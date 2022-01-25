const axios = require('axios');

test('route test ', async () => {
  const res = await axios.get('http://127.0.0.1:4040/planet/randomPlanet');
  expect(res.data.value.name).toBeTruthy();
});
