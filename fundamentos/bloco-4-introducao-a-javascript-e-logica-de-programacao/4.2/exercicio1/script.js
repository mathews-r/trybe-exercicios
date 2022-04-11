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

let array = ['java', 'javaScript', 'phyton', 'html', 'css'];
let maiorPalavra = array[0];

for (let index = 0; index < array.length; index+=1){
    if (array[index] > maiorPalavra){
        maiorPalavra = array[index]
    }
}
console.log(maiorPalavra);    
