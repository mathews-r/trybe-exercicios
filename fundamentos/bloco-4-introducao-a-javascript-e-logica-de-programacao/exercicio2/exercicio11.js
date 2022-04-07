let salarioBruto = 5300;
const inss1 = salarioBruto * 0.08;
const inss2 = salarioBruto * 0.09;
const inss3 = salarioBruto * 0.11;
const inss4 = 570.88
const ir1 = 0;
const ir2 = (salarioBruto - inss2) * 0.075 - 142.80;
const ir3 = (salarioBruto - inss3) * 0.15 - 354.80;
const ir4 = (salarioBruto - inss4) * 0.225 - 636.13;
const ir5 = (salarioBruto - inss4) * 0.275 - 869.36;

let salarioLiquido = 0

if (salarioBruto <= 1556.94) {
    salarioLiquido = (salarioBruto - inss1) - ir1;
    console.log("Seu salário líquido é:");
    console.log(salarioLiquido);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioLiquido = (salarioBruto - inss2) - ir2
    console.log("Seu salário líquido é:");
    console.log(salarioLiquido);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioLiquido = (salarioBruto - inss3) - ir3
    console.log("Seu salário líquido é:");
    console.log(salarioLiquido);
} else if (salarioBruto >= 5189.83 && salarioBruto < 5235.55) {
    salarioLiquido = (salarioBruto - inss4) - ir4
    console.log("Seu salário líquido é:");
    console.log(salarioLiquido);
} else if (salarioBruto >= 5235.56){
    salarioLiquido = (salarioBruto - inss4) - ir5
    console.log("Seu salário líquido é:");
    console.log(salarioLiquido);
}


