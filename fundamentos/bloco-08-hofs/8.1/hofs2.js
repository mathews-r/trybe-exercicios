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
  if (numeroApostado === numeroAleatorio) {
    return 'Parabéns você ganhou.'
  } else {
    return 'Tente novamente.'
  }
}


console.log(sorteio(2, checar));

// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:.

const correcao = (gabarito, resposta, callback) => {
return `Você obteve ${a} pontos.`
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (gabarito, resposta) => {
  let certo = 0;
  let errado = 0;
  let nota = (certo - errado);

for (let index = 0; index < RIGHT_ANSWERS.length; index += 1){
  
  for (let index2 = 0; index2 < STUDENT_ANSWERS.length; index2 += 1) {
 
  if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
    certo += 1
  } else {
    errado += 0.5
  }} }
  return console.log(nota);
}

check(RIGHT_ANSWERS, STUDENT_ANSWERS);

