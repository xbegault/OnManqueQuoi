var express = require('express');

var db = require('./config/db');

var model = require('./db/model')(db);
var FoodPointModel = model.FoodPointModel;
var VoteFoodPointModel = model.VoteFoodPointModel;

var app = express();

app.post('/food-point', function (req, res) {
	foodPoint = new FoodPointModel(req.body).save(function (err) {
		if (err) { console.log(err); throw err; }
			console.log("Food point created");
		});
	res.json(foodPoint);
});

app.post('/vote/:id', function (req, res) {
	restaurant = new VoteFoodPointModel(req.body).save(function (err) {
		if (err) { throw err; }
			console.log("Food point created");
		});
	res.json(restaurant);
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!')
});



