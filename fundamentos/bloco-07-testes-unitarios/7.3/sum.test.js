const sum = require('./sum');

function verificaSoma() {
  describe('Verifica a soma de a + b', () => {
    it('soma de a + b', () => {
      expect(sum(4, 5)).tobe(9);
    });
  });
}