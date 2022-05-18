// 1 Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// function flatten (array) {
//  return array.reduce( (acc, curr) => acc.concat(curr), [])
// } 

const flatten = (array) => array.reduce( (acc, curr) => acc.concat(curr), []);


console.log(flatten(arrays));

// 2 - 
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Crie uma string com os nomes de todas as pessoas autoras.

const autores = (array) => {
  return array.reduce( (acc, curr) => {
    return `${acc} ${curr.author.name}, `
  },'' )
}

console.log(autores(books));

// 3 Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const mediaIdade = (array) => {
 const idade = array.map( (book) => (book.releaseYear - book.author.birthYear))
 .reduce( (acc, curr) => (acc + curr), 0) / 6;
  return idade
}

console.log(mediaIdade(books));

// 4 Encontre o livro com o maior nome.

const longestNamedBook = (array) => {
  return array.reduce( (acc, curr) => {
  if (curr.name.length > acc.name.length) {
    return curr;
  }
  return acc;
  },)
}

console.log(longestNamedBook(books));

// 5 Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  return array.reduce( (acc, curr) => {
    let contador = 0;
    if (acc === 'a' || curr === 'A') {
      contador += 1
    }
    return contador
  }, 0)
}

console.log(containsA(names));