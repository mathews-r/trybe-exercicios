function personalizaBackground () {

const cubos = document.querySelector('.quadrado');
const body = document.getElementById('body');
const divCubos = document.createElement('div')
divCubos.className = 'quadrado';
divCubos.id = 'cube';
cubos.appendChild(divCubos);

cubos.addEventListener('click', function() {
   body.style.backgroundColor = 'brown'
  
});

} personalizaBackground();