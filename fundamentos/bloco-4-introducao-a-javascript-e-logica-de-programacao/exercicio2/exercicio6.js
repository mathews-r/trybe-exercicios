const peca = "rei";

switch (peca.toLocaleLowerCase()) {
  case "torre":
    console.log("Horizontal e Vertical");
    break;

  case "cavalo":
    console.log("Movimento em L");
    break;

  case "bispo":
    console.log("Diagonal");
    break;

  case "rei":
    console.log("Qualquer direção 1 unidade por vez");
    break;

  case "rainha":
    console.log("Qualquer direção");
    break;

    default: 
    console.log("Essa peça não existe.");
}
