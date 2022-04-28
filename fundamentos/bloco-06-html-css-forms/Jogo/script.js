// CRIAR MENU DE ESCOLHA X OU O.

let divSelector = document.getElementById("selecionar");
let selecionaX = document.createElement("div");
selecionaX.id = "divEscolherX";
selecionaX.className = 'selected';
selecionaX.innerText = "X";
divSelector.appendChild(selecionaX);

let selecionaO = document.createElement("div");
selecionaO.id = "divEscolherO";
selecionaO.innerText = "O";
divSelector.appendChild(selecionaO);

// EVENTO AO CLICAR EM X OU O.

const seletor = document.querySelectorAll(".selec");
function selectXorO() {
  for (let i = 0; i < seletor.length; i += 1) {
    seletor[i].addEventListener("click", function (event) {
      document.querySelector(".selected").classList.remove("selected");
      event.target.classList.add("selected");
    });
  }
}
selectXorO();


// CRIAR BOARD.
function criaBoard() {
  for (let index = 0; index < 9; index += 1) {
    const board = document.getElementById("tabela");
    const pixel = document.createElement("div");
    pixel.id = index;
    pixel.addEventListener("click", function () {
      if (selecionaX.className === "selected") {
        pixel.style.backgroundColor = "orange";
        pixel.innerText = "X";
      } else {
        pixel.style.backgroundColor = "blueviolet";
        pixel.innerText = "O";
      }
    });

    pixel.className = "pixel";
    board.appendChild(pixel);
  }
}
criaBoard();


// CRIAR BOTAO JOGAR NOVAMENTE.

let clear = document.getElementById("reniciar");
let botaoClear = document.createElement("button");
botaoClear.id = "botaoClear";
botaoClear.innerText = "Jogar Novamente";
clear.appendChild(botaoClear);

botaoClear.addEventListener('click', function(){
  location.reload();
});

