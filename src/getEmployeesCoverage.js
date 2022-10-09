/* Implemente a função getEmployeesCoverage que deverá retornar as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.

A função vai receber um objeto como parâmetro que vai determinar o seu comportamento, sendo:

name: o nome ou sobrenome da pessoa a ser buscada;

id: o id da pessoa a ser buscada.

A função deve retornar um objeto no seguinte formato:

{
id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
fullName: "Sharonda Spry", // nome completo: firstName + lastName
species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
Para isso:

Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade name:

a propriedade name pode possuir como valor o primeiro ou último nome da pessoa colaboradora, portanto garanta que seu código funciona das duas maneiras.
Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade id;

Retorne um array com as informações de todas as pessoas colaboradoras caso a função não receba parâmetro;

Lance um erro caso o id seja inválido.

Exemplos de uso da função getEmployeesCoverage:

Caso o parâmetro seja um objeto com nome e id, retorne as informações da pessoa colaboradora
Caso a função não receba parâmetros, retorne um array com a informação de todas as pessoas colaboradoras
Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, lance um erro

De olho na dica eyes: Crie funções que dividam as tarefas em partes menores. Por exemplo, você pode criar uma função getSpecies encarregada somente por buscar o nome das espécies que a pessoa é responsável.

O que será testado:

A função, caso o objeto passado por parâmetro tenha a propriedade name, deverá retornar somente a pessoa correspondente;

A função poderá receber como parâmetro um objeto com a propriedade name recebendo o segundo nome como valor;

A função, caso o objeto passado por parâmetro tenha a propriedade id, deverá retornar somente a pessoa correspondente;

A função, caso não receba parâmetros, deverá retornar uma lista com a cobertura de todas as pessoas colaboradoras;

A função, caso não haja nenhuma pessoa com o name ou id especificados deverá lançar um error.

 */

const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const spcValue = (param) => param.map((e) => `${species.find((element) => element.id === e).name}`);

const lctValue = (p) => p.map((e) => `${species.find((element) => element.id === e).location}`);

const arrayGeral = employees.map((e) => ({
  id: `${e.id}`,
  fullName: `${e.firstName} ${e.lastName}`,
  species: spcValue(e.responsibleFor),
  locations: lctValue(e.responsibleFor),
}));

const firstNames = employees.map((e) => `${e.firstName}`);
const lastNames = employees.map((e) => `${e.lastName}`);
const names = [...firstNames, ...lastNames];
const ids = arrayGeral.map((e) => `${e.id}`);

/* const locationValue = () => {
  responsibleFor.map((e) => `${species.find((element) => element.id === e).location}`);
}; */

/* function getSpeciesByIds(...ids) {
  return species.find((specie) => ids.includes(specie.id)).name;
}

function getLocationByIds(...ids) {
  return species.find((specie) => ids.includes(specie.id)).locations;
} */

/* const populateArray = () => {
  const returnedObj = employees.forEach((e) => {
    const obj = {};
    const speciesValue = responsibleFor.map((element) => getSpeciesByIds(element));
    obj.id = e.id;
    obj.fullName = `${e.firstName} ${e.lastName}`;
    obj.species = speciesValue;
    return obj;
  });
  const trulyObject = species.forEach((e) => {
    returnedObj.locations = responsibleFor.map((element) => getLocationByIds(element));
    return returnedObj;
  });
  array.push(returnedObj);
};
console.log(populateObj()); */

function getEmployeesCoverage(param) {
  if (typeof param === 'undefined') {
    return arrayGeral;
  }
  if (!names.includes(param.name) && !ids.includes(param.id)) {
    throw new Error('Informações inválidas');
  }
  if (names.includes(Object.values(param)[0])) {
    return arrayGeral.find((e) => e.fullName.includes(Object.values(param)[0]));
  }
  return arrayGeral.find((e) => e.id.includes(Object.values(param)[0]));

// const obj = { id: '', fullName: '', species: [...speciesValue] };    // obj.id = e.id;
// obj.fullName = `${e.firstName} ${e.lastName}`;
}
module.exports = getEmployeesCoverage;
