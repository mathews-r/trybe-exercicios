// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function link(event){
  event.preventDefault();
}

HREF_LINK.addEventListener('click', link);


function check(event){
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', check);


function texto(event) {
  let palavra = event.key; 
    if(palavra === 'a') {
    INPUT_TEXT.value = 'a';
  } else {
event.preventDefault();
}
}

INPUT_TEXT.addEventListener('keypress', texto);