const sum = require('./sum');

describe('Verifica a soma de a + b', () => {
    it('soma de a + b', () => {
      expect(sum(4, 5)).toBe(9);
    });
    it('soma de 0 + 0 é 0', () => {
      expect(sum(0, 0)).toBe(0);
    });
    it('deve disparar um erro caso receba como parâmetro uma string', () => {
      expect(() => sum(4, '5')).toThrowError();
      expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
  });

sum(4, 5);