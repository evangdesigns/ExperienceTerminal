require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("MongoDB database connection established successfully")
});

const titleRouter = require('./routes/titles');
const skillRouter = require('./routes/skills');
const projectRouter = require('./routes/projects');
const projectSectionRouter = require('./routes/projectSections');
const imageRouter = require('./routes/images');
const mailRouter = require('./routes/mailer');

app.use('/titles', titleRouter);
app.use('/skills', skillRouter);
app.use('/projects', projectRouter);
app.use('/project-sections', projectSectionRouter);
app.use('/images', imageRouter);
app.use('/contact', mailRouter);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});