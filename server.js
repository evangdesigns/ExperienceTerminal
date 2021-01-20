require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, 'client/build');

app.use(express.static(publicPath));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

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

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});