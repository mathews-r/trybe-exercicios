// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf("Portfólio");

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push("Contato")

// console.log(menu);

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index+=1 ) {
//     console.log(groceryList[index]);
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let nomes of names){
//     console.log(nomes);
// }


// exercicio fatorial

// let numero = 10
// let fatorial = 1

// for (let index = 1 ; index <= numero ; index +=1){
//     fatorial = fatorial * index
// } console.log("O fatorial de " + numero + " é: " + fatorial);

// exercicio inverter palavra

// let word = "Mathews";
// let resposta = "";
// for (let index = word.length -1 ; index >=0; index -=1){
//     resposta += word[index]; 
// } 
// console.log(resposta);

// exercicio maior e menor palavra

let array = ['java', 'javaScript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let resultado = "";

for (let index = 0; index < array.length; index += 1) {
     if (array[index].length >  maiorPalavra){
         maiorPalavra = array[index].length;
     } 
    
} console.log(maiorPalavra);
// for (let index2 = 0; index2 < array.length; index2 += 1){
//     if(array[index2].length == maiorPalavra){
//         resultado = maiorPalavra;
//     }
// }console.log(resultado);



// Exercicio numeros primos

// let primos = [];
// let n = 50;

// for (let index = 0; index <= n; index +=1);{
//     primos[index] = index + 1;
// }
//     console.log(primos);
//   // if (index % primos === 0 ) {

    
