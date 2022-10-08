const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const obj = {};
    species.forEach((e) => {
      const nome = e.name;
      const { residents } = e;
      obj[nome] = residents.length;
    });
    return obj;
  }
  if (Object.keys(animal).length === 1) {
    const specie = species.find((e) => e.name === animal.specie);
    return specie.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const specie = species.find((e) => e.name === animal.specie);
    const filtered = specie.residents.filter((e) => e.sex === animal.sex);
    return filtered.length;
  }
}

module.exports = countAnimals;
