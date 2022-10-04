const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* Implemente a função getRelatedEmployees para verificar se uma pessoa colaboradora é gerente e quais pessoas ela lidera.

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:
A função isManager será responsável por verificar se uma pessoa colaboradora é gerente:

Deve retornar true se o id passado for de uma pessoa gerente;
Deve retornar false se o id passado não for de uma pessoa gerente.
A função getRelatedEmployees será responsável por retornar as pessoas lideradas pela gerência:

Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações:

Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.
Exemplo de output:

[ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
Caso a pessoa não seja gerente, dispare um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
Para lançar o erro, você vai utilizar a função construtora Error da biblioteca padrão do JavaScript.

Exemplo:

throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!'); */

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const xablau = employees.filter((employee) => employee.managers.includes(managerId));
    return xablau.map((e) => `${e.firstName} ${e.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
