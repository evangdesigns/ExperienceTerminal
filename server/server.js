const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://employerAdmin:S7687SoXzr5i1FkJ@cluster0.a20hh.mongodb.net/EmployerTerminalDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


const titleRouter = require('./routes/titles');
const skillRouter = require('./routes/skills');

app.use('/titles', titleRouter);
app.use('/skills', skillRouter);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});