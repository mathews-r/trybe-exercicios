const botao = document.getElementById('botao-enviar');

function botaoSend(event) {
  event.preventDefault();
}

botao.addEventListener('click', botaoSend);