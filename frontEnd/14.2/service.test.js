const service = require('./service');

describe('Testes para o arquivo de service', () => {
  it('Testa se o retorno da função é um número aleatório', () => {
    service.geraNumeroAleatorio = jest.fn().mockReturnValue(10);

    expect(service.geraNumeroAleatorio()).toBe(10);
    expect(service.geraNumeroAleatorio).toHaveBeenCalled();
    expect(service.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
  })
  it('Testa se o primeiro número é dividido pelo segundo', () => {
    service.geraNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.geraNumeroAleatorio(2, 1)).toBe(2);
    expect(service.geraNumeroAleatorio).toHaveBeenCalled();
    expect(service.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(service.geraNumeroAleatorio).toHaveBeenCalledWith(2, 1);
  })
  it('Testa se os parâmetros são multiplicados', () => {
    service.geraNumeroAleatorio = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(service.geraNumeroAleatorio(1, 2, 3)).toBe(6);
    expect(service.geraNumeroAleatorio).toHaveBeenCalled();
    expect(service.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(service.geraNumeroAleatorio).toHaveBeenCalledWith(1, 2, 3);
  })
  it('Testa se a função retorna o dobro do parâmetro', () => {
    service.geraNumeroAleatorio.mockReset();
    expect(service.geraNumeroAleatorio).toHaveBeenCalledTimes(0);

    service.geraNumeroAleatorio = jest.fn().mockImplementationOnce((a) => a * 2);

    expect(service.geraNumeroAleatorio(5)).toBe(10);
    expect(service.geraNumeroAleatorio).toHaveBeenCalled();
    expect(service.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(service.geraNumeroAleatorio).toHaveBeenCalledWith(5);
  })
});