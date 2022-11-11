//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
//used to parse http request

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//write everytime you wanna use body-parser

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
	res.send("Thanks for posting that");
	console.log(req.body.num1);
});


app.listen(3000, function() {
	console.log("Server is running on port 3000");
});
