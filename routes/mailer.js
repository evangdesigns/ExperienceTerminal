const router = require('express').Router();
const nodemailer = require('nodemailer')

const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS
// POST route from contact form
router.post('/', async(req, res) => {
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    socketTimeout: 5000,
    logger: false,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: `${req.body.email}`, // This is ignored by Gmail
    to: GMAIL_USER,
    subject: 'New message from contact form on evanGdesigns.com',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      response.render('contact-failure') // Show a page indicating failure
    }
    else {
      ressponse.render('contact-success') // Show a page indicating success
    }
  })
})


module.exports = router;