const axios = require('axios');
const { randomMinMax } = require('../../../helper/random');

const options = {
  url: 'https://swapi.dev/api/planets',
};

let planet = null;
const oldId = null;

async function getPlanetApi(id) {
  const resp = await axios.get(`${options.url}/${id}`);
  return resp;
}

function randomNewPlanetId() {
  const id = randomMinMax(1, 59);
  if (id === oldId) {
    return randomNewPlanetId();
  }
  return id;
}

async function rec() {
  const id = randomNewPlanetId();
  planet = (await getPlanetApi(id)).data;
  return setTimeout(() => rec(), randomMinMax(10000, 12000));
}

(async () => {
  rec();
})();

module.exports = () => planet;
