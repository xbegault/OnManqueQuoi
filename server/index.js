var express = require('express')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/onmangequoicemidi');

var FoodPointSchema = new mongoose.Schema({
  	name: String,
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now },
});

var VoteFoodPointSchema = new mongoose.Schema({
	foodPoint: FoodPointSchema,
  	created_at: { type: Date, default: Date.now },
});

// Create a model based on the schema
var FoodPointModel = mongoose.model('foodPoint', FoodPointSchema);
var VoteFoodPointModel = mongoose.model('voteFoodPoint', VoteFoodPointSchema);

var app = express()

app.post('/food-point', function (req, res) {
	foodPoint = new FoodPointModel(req.body).save(function (err) {
		if (err) { throw err; }
			console.log("Food point created");
		});
	res.json();
})

app.post('/vote/:id', function (req, res) {
	restaurant = new VoteFoodPointModel(req.body).save(function (err) {
		if (err) { throw err; }
			console.log("Food point created");
		});
	res.json();
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



