module.exports = function (db) {
    var FoodPointSchema = new db.Schema({
        name: String,
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    });

    var FoodPointModel = db.model('foodPoint', FoodPointSchema);

    var VoteFoodPointSchema = new db.Schema({
        foodPoint: FoodPointSchema,
        created_at: { type: Date, default: Date.now }
    });

    var VoteFoodPointModel = db.model('voteFoodPoint', VoteFoodPointSchema);

    return {
        'FoodPointModel': FoodPointModel,
        'VoteFoodPointModel': VoteFoodPointModel
    };
};