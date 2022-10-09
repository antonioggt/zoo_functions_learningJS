/* Implemente a função getOldestFromFirstSpecies que deverá encontrar o animal mais velho da espécie gerenciado por uma pessoa colaboradora.

A função recebe um parâmetro ID referente à pessoa colaboradora e a partir desse ID:

A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;

A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;

A função deverá encontrar o animal mais velho daquela espécie;

A função deverá retornar um array com as informações do animal mais velho daquela espécie.

O que será testado:

Passado o id de uma pessoa colaboradora, a função getOldestFromFirstSpecies deverá encontrar a primeira espécie de animal gerenciado por essa pessoa, e retornar um array com nome, sexo e idade do animal mais velho dessa espécie. */

const { employees, species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.find((specie) => ids.includes(specie.id)).name;
}

function getOldestFromFirstSpecies(id) {
  const arr = [];
  const pessoa = employees.find((e) => e.id === id);
  const firstAnimal = pessoa.responsibleFor.map((e) => `${getSpeciesByIds(e)}`)[0];
  const oldR = species.find((e) => e.name === firstAnimal).residents;
  const info = oldR.sort((a, b) => b.age - a.age);
  const oldest = info[0];
  arr.push(oldest.name, oldest.sex, oldest.age);
  return arr;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
