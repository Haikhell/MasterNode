const getPlanet = require('../function/planet');

module.exports = (req, res) => {
  const value = getPlanet();
  res.send({ value });
};
