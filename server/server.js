var express = require('express');
var bodyParser = require('body-parser');

var db = require('./config/db');

var model = require('./db/model')(db);
var FoodPointModel = model.FoodPointModel;
var VoteFoodPointModel = model.VoteFoodPointModel;

var app = express();
app.use(bodyParser.json());

app.get('/food-points', function (req, res) {
     FoodPointModel.find(function (err, foodPoints) {
        if (err) { console.log(err); res.sendStatus(400); throw err; }
        res.json(foodPoints);
    });
});


app.post('/food-point', function (req, res) {
	foodPoint = new FoodPointModel({"name":"test"}).save(function (err) {
		if (err) { console.log(err); res.sendStatus(400); throw err; }
        	res.sendStatus(200);
		});
});

app.post('/vote/:id', function (req, res) {
	restaurant = new VoteFoodPointModel(req.body).save(function (err) {
		if (err) { res.sendStatus(400); throw err; }
        	res.sendStatus(200);
		});
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!')
});



