const encode = require('./encode')
const decode = require('./decode')

describe('Testa a função encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });
  it('verifica se substitui a por 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
});