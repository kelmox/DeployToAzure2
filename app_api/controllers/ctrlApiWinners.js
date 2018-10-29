// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'worldCupWinner' model so we can interact with the WorldCupWinners collection
const winnerModel = mongoose.model('khlwinner');

const winnersList = function (req, res) {

    winnerModel.find({}, function(err, winners){
       if (err){
           res.status(404).json(err);
       }
       else{
           res.status(200).json(winners);
       }
    });
};

const addWinner = function (req, res) {
    winnerModel.create(req.body, function(err, newWinner){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newWinner);
            }
        }
    );
};

module.exports = {
    winnersList,
    addWinner
};



