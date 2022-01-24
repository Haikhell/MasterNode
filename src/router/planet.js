const express = require('express');
const controller = require('../controller/planet/route');

const router = express.Router();

router.get('/randomPlanet', controller.getPlanet);

module.exports = router;
