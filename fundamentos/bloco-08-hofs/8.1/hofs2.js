// 1
const pessoa = (nomeCompleto) => {
  let email = nomeCompleto.toLowerCase().split(' ').join('_');
  return {nomeCompleto, email: `${email}@betrybe.com`};
}

const newEmployees = (pessoa) => {
  const employees = {
    id1: pessoa('Pedro Guerra'), 
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: pessoa('Luiza Drumond'), 
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: pessoa('Carla Paiva'), 
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(pessoa));

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (numeroApostado, callback) => {
  let numeroAleatorio = Math.floor(Math.random() * 5 + 1);
  return callback(numeroApostado, numeroAleatorio);
}

const checar = (numeroApostado, numeroAleatorio) => {
  if (numeroAleatorio === numeroApostado) {
    return 'Parabéns você ganhou.'
  } else {
    return 'Tente novamente.'
  }
}


console.log(sorteio(2, checar));
