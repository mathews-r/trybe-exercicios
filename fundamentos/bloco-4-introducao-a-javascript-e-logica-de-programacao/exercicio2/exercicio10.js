const custoProduto = 200;
const valorVenda = 450;
const imposto = custoProduto * 0.2;
const valorCustoTotal = custoProduto + imposto;
let lucro = valorVenda - valorCustoTotal;
let quantidadeVenda = 1000;
let lucroTotal = lucro * quantidadeVenda;




if (custoProduto < 0 || valorVenda <0) {
    console.log("ERRO")
} else {
    console.log("Seu lucro foi de:");
    console.log(lucroTotal);
}

