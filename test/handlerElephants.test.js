const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao receber o parametro "count" retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count').toBe(4));
  });
  it('ao receber o parametro "names" retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names').toContain('Jefferson'));
  });
  it('ao receber o parametro "averageAge" retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge').toBeCloseTo(10.5));
  });
});
