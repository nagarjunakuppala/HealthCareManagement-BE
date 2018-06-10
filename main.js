var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//adding all routes
const appointmentRoute = require('./routes/appointmentRoute');

var app = express();

//GETTING MONGODB CONNECTION
mongoose.connect('mongodb://localhost:27017/healthmanagement');
mongoose.connection.on('connected',() =>{
	console.log("connected to mongodb at port 27017");
});
mongoose.connection.on('error',(err)=>{
	console.log(err);
});
//Added by chaitra
app.use(cors());
app.use(bodyParser.json());
app.use('/appointment', appointmentRoute);

//node js server port
const PORT = 4003;
app.listen(PORT, () =>{
	console.log(" node server started at port number 4003");
})