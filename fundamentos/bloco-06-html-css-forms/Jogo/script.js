// CRIAR MENU DE ESCOLHA X OU O.

let divSelector = document.getElementById('selecionar');
let selecionaX = document.createElement('div');
selecionaX.id = 'divEscolherX';
selecionaX.innerText = 'X';
divSelector.appendChild(selecionaX);

let selecionaO = document.createElement('div');
selecionaO.id = 'divEscolherO';
selecionaO.innerText = 'O';
divSelector.appendChild(selecionaO);

// EVENTO AO CLICAR EM X OU O.

let x = document.getElementById('divEscolherX');

x.addEventListener('click', function(){
selecionaX.style.backgroundColor = 'orange';
});

// CRIAR BOARD.

for(let index = 0; index < tabela.length; index += 1){
    
}




// CRIAR BOTAO JOGAR NOVAMENTE.

let clear = document.getElementById('reniciar');
let botaoClear = document.createElement('button');
botaoClear.id = 'botaoClear';
botaoClear.innerText = 'Jogar Novamente';
clear.appendChild(botaoClear);

function limparBoard(){
  board.style.backgroundColor = 'white';
}; 
limparBoard();