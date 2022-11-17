//jshint esversion:6 (if linter gives error)

const express = require("express");
const bodyParser = require("body-parser");
//used to parse http request

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//write everytime you wanna use body-parser

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator", function(req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
	const num1 = parseInt(req.body.num1);
	const num2 = parseInt(req.body.num2);
	const sum = num1 + num2;
	res.send("The sum of " + num1 + " and " + num2 + " is: " + sum);
});

app.post("/bmicalculator", function(req, res) {
	let weight = parseFloat(req.body.weight);
	let height = parseFloat(req.body.height);

	let bmi = 10000 * (weight / Math.pow(height, 2));
	// let bmi = bmiLong.toFixed(1);
	res.send("Your BMI is " + bmi);
});


app.listen(3000, function() {
	console.log("Server is running on port 3000");
});
