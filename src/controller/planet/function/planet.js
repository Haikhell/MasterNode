const axios = require('axios')
let cachePlanet = null
const minTimeRandom = 10000
const maxTimeRandom = 12000

async function setPlanet() {
  try {
    const planetData = await axios.get('http://127.0.0.1:4041/adapter/get')
    if (planetData.data) cachePlanet = planetData.data
    const time = Math.floor(
      minTimeRandom + Math.random() * (maxTimeRandom - minTimeRandom),
    );
    if (!cachePlanet) {
      return setPlanet()
    }
    setTimeout(setPlanet, time)
  } catch (error) {
    return setPlanet()
  }
}

setPlanet()

module.exports.getPlanet = () => {
  return cachePlanet
}