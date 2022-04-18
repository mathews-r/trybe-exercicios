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