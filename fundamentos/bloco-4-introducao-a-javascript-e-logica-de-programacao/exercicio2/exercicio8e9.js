const primeiroNumero = 10;
const segundoNumero = 4;
const terceiroNumero = 2;

let soma = primeiroNumero + segundoNumero + terceiroNumero
let divisao = soma % 2

if (divisao == 0 ) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}