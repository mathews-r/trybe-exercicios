const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// EXERCICIO ARRAY.FIND

const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return number;
//   }
// }

// REFATORADO
const findDivisibleBy3And5 = (number) => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
} 

console.log(findDivisibleBy3And5());

// EXERCICIO ARRAY.FIND

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  return names.find((name => name.length <= 5));
}

console.log(findNameWithFiveLetters());

// EXERCICIO ARRAY.FIND

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((item) => item.id === id);
}

console.log(findMusic('31031685'))

// EXERCICIO ARRAY.SOME E ARRAY.EVERY

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return names.some((item) => item === name)
}

console.log(hasName(names, 'Ana'))

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

const verifyAges = (arr, minimumAge) => {
 return people.every((item) => item.age >= minimumAge)
}

console.log(verifyAges(people, 18));

// EXERCICIOS ARRAY.SORT 

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((pessoa1, pessoa2) => pessoa2.age - pessoa1.age);

console.log(people);