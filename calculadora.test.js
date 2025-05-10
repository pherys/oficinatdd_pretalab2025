const Calculadora = require('./calculadora');

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const resultado = Calculadora.soma(2, 3);
    expect(resultado).toBe(5);
  });

  it('Deverá retornar a subtração de dois números', () => {
    const resultado = Calculadora.subtração(5, 3);
    expect(resultado).toBe(2);
  });

  it('Deverá retornar a multiplicação entre dois números', () => {
    const resultado = Calculadora.multiplicação(2, 3);
    expect(resultado).toBe(6);
  });

  it('Deverá retornar a divisão entre dois números', () => {
    const resultado = Calculadora.divisão(6, 3);
    expect(resultado).toBe(2);
  });

  it('Deverá calcular uma expressão com parênteses e as quatro operações', () => {
    // Exemplo: (2 + 3) * (6 / 2) - 4
    const resultado = Calculadora.subtração(
      Calculadora.multiplicação(
        Calculadora.soma(2, 3),
        Calculadora.divisão(6, 2)
      ),
      4
    );
    expect(resultado).toBe(11); // (2 + 3) * (6 / 2) - 4 = 11
  });
});