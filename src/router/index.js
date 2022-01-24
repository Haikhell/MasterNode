const express = require('express');

const router = express.Router();
const planet = require('./planet');

router.use('/planet', planet);

module.exports = router;
