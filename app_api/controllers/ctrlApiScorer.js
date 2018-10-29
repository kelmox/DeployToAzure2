// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'goldenBallWinner' model so we can interact with the GoldenBallWinners collection
const scorerModel = mongoose.model('khlscorer');

const scorerList = function (req, res) {
    scorerModel.find({}, function(err, scorer){
        if (err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(scorer);
        }
    });};

const addScorer = function (req, res) {
    res
        .status(201)
        .json({"Add scorer" : "Work in progress"});
};

module.exports = {
    scorerList,
    addScorer
};