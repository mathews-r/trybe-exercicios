const myRemove = require('./myRemove');

describe('testa se está removendo o número correto', () => {
  it('tem que eliminar o numero 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// console.log(myRemove([1, 2, 3, 4], 3));