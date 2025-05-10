class Queue {
  constructor() {
    this.elements = [];
  }

  // Retorna o tamanho da fila
  size() {
    return this.elements.length;
  }

  // Adiciona um item ao final da fila
  enqueue(item) {
    this.elements.push(item);
  }

  // Retorna o primeiro item da fila sem removê-lo
  peek() {
    if (this.elements.length === 0) {
      throw new Error('A fila está vazia');
    }
    return this.elements[0];
  }

  // Remove e retorna o primeiro item da fila
  dequeue() {
    if (this.elements.length === 0) {
      throw new Error('A fila está vazia');
    }
    return this.elements.shift();
  }
}

module.exports = Queue;