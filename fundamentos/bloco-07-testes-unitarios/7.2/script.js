// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }

// testingScope(false);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// console.log(oddsAndEvens.sort());

// const ordenaArray = () => {
//   let resultado = [];
//   for (let index = 0; index < oddsAndEvens.length; index += 1) {
//     resultado = oddsAndEvens[index].push();
//   }
//   console.log(resultado);
// }
// // console.log(oddsAndEvens); // será necessário alterar essa linha 😉

const fatorial = (numero) => {
  for (let index = 0; index < numero.length; index = index + 1) {
    
    resultado = numero * numero[index]
    console.log(resultado);
  }
}
fatorial(4);