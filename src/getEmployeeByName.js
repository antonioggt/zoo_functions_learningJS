const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

module.exports = getEmployeeByName;
