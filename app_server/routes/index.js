const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlWinners = require('../controllers/ctrlWinners'); // ... for the list of World Cup winners (countries)
const ctrlScorer = require('../controllers/ctrlScorer'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/khlwinners', ctrlWinners.winnerlist);  // List of World Cup winners (countries)
router.get('/khlscorer', ctrlScorer.winnerlist);  // List of Golden ball winners (players)

module.exports = router;