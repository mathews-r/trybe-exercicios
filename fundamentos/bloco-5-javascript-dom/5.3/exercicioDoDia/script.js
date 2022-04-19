function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // EXERCICIO 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function diasDoMes() {
    const dias = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
      let arrayDias = dezDaysList[index];
      let itemDia = document.createElement('li');

      if (arrayDias === 24 || arrayDias === 31) {
        itemDia.className = "day holyday";
        itemDia.innerText = arrayDias;
        dias.appendChild(itemDia);

      } else if (arrayDias === 4 || arrayDias === 11 || arrayDias === 18) {
        itemDia.className = "day friday";
        itemDia.innerText = arrayDias;
        dias.appendChild(itemDia);

      } else if (arrayDias === 25) {
        itemDia.className = "day holyday friday";
        itemDia.innerText = arrayDias;
        dias.appendChild(itemDia);

      } else {
        itemDia.innerText = arrayDias;
        itemDia.className = 'day';
        dias.appendChild(itemDia);

    }}
        
    };
    diasDoMes()

    // EXERCICIO 2
    function holydays (Feriados) {
        let feriado = document.querySelector('.buttons-container');
        let botao = document.createElement('button');

        botao.className = "btn-holiday";
        botao.innerText = "Feriados";
        feriado.appendChild(botao);
    }
    holydays('Feriados');

    // EXERCICIO 3

    function botaoFeriado() {
      let btnFeriado = document.querySelector('.btn-holiday');
      let feriadosDez = document.querySelectorAll('days-container');

      btnFeriado.addEventListener('click', function () {
        for (let index = 0; index < feriadosDez.length; index += 1) {
          if (feriadosDez[index].style.backgroundColor === "#eee") {
            feriadosDez[index].style.backgroundColor = "red";
          } else {
            feriadosDez[index].style.backgroundColor = "#eee";
          }
        }
      });
    }
    botaoFeriado();

    // EXERCICIO 4

    function sextou() {
        let btnSexta = document.createElement('button');
        let feriado = document.querySelector('.buttons-container');

        btnSexta.id = "btn-friday";
        btnSexta.innerText = "Sexta-feira";
        feriado.appendChild(btnSexta);



    }
    sextou('Sexta-feira');