const myFizzBuzz = require('./myFizzBuzz');

describe('verifica se é divisivel por 3 e 5', () => {
  it('é divisivel pelos 2 numeros', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz'); 
    expect(myFizzBuzz(3)).toBe('fizz'); 
    expect(myFizzBuzz(5)).toBe('buzz'); 
    expect(myFizzBuzz('1')).toBe(false); 
  });
});


myFizzBuzz(15);
