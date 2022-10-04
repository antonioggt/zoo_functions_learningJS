const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const residentes = species.find((specie) => specie.name === animal).residents;
  return residentes.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
