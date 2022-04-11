// EXERCÍCIO 1, 2, 3 E 4

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: "Sim"
//   };

//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: "Ambos recorrente" 
//   }
//   // console.log(info);

// EXERCÍCIO 5

// for (let informacao in info) {
//     console.log(info[informacao] + " e " + info2[informacao]);
// }

// EXERCÍCIO 6, 7 E 8

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
     {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos.titulo);
  console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");