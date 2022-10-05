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

  it('ao receber o parametro "location" retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location').toBe('NW'));
  });

  it('ao receber o parametro "popularity" retorna um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity').toBeGreaterThanOrEqual(5));
  });

  it('ao receber o parametro "availability" retorna um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability').not.toContain('Monday'));
  });

  it('Quando não passar parâmetro algum deve retornar undefined', () => {
    expect(handlerElephants().toBe(undefined));
  });
});
