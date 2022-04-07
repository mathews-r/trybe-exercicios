const anguloA = -50;
const anguloB = -120;
const anguloC = -20;

const somaTriangulo = anguloA + anguloB + anguloC;

if (somaTriangulo == 180) {
    console.log("true");
} else if (somaTriangulo <180 && somaTriangulo >180) {
    console.log("false")
} else if (somaTriangulo < 0) {
    console.log("Erro, ângulo inválido");
}