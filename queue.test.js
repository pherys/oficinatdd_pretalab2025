const Queue = require('./queue');

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue();
    expect(queue).toEqual({ elements: [] });
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.elements).toEqual([1]);
  });

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    const removed = queue.dequeue();
    expect(removed).toBe(1);
    expect(queue.elements).toEqual([2]);
  });
});