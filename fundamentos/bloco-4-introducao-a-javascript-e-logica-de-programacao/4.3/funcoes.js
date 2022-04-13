/*  Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: 
{ area: 0, perimetro: 0 } 
perimetro = (base *2) + (altura * 2)
area = base * altura
*/


    

    // function quadrilatero(base, altura) {

    //   let objeto = {
    //     area: base * altura,
    //     perimetro: base * 2 + altura * 2,
    //   };
    //   return objeto;
    // }

    // console.log(quadrilatero(2, 4));

    /* Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: 
{
 pares: 0, 
 ímpares: 0 
} 
*/

// function parImpar (numeros) {
//     let par = 0;
//     let impares = 0;

//    for (let index = 0; index < numeros.length; index +=1) {
//     if (numeros[index] % 2 === 0) {
//         par+= 1
//     } else {
//         impares+= 1
//     }
    
//    } 
//    let objeto = {
//        pares: par,
//        impares: impares,
//    }
//    return objeto
// }
// console.log(parImpar([1, 2, 3, 4, 5, 6, 7]));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .


function maiorValor (array) {
    let maiorIndice = 0;
    let indice = 0;
    for (let index = 0; index < array.length; index +=1) {
        if (array[index] > maiorIndice) {
         maiorIndice = array[index];
        } else if (maiorIndice === array[index]) {
         indice = maiorIndice   
        }
    } 

    return indice; 
    
} 
console.log(maiorValor([2, 3, 6, 7, 10, 1]));

