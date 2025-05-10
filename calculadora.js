class Calculadora {
  static soma(a, b) {
    return a + b;
  }

  static subtração(a, b) {
    return a - b;
  }

  static multiplicação(a, b) {
    return a * b;
  }

  static divisão(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
  }

  // Novo método para calcular expressões complexas
  static calcularExpressaoComplexa() {
    // Exemplo: (2 + 3) * (6 / 2) - 4
    const resultado = this.subtração(
      this.multiplicação(
        this.soma(2, 3),
        this.divisão(6, 2)
      ),
      4
    );
    return resultado;
  }
}

module.exports = Calculadora;