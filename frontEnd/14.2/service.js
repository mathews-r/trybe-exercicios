const geraNumeroAleatorio = () => Math.floor(Math.random() * 100);
const caixaAlta = (str) => str.toUpperCase();
const firstString = (str) => str[0];
const concatStrings = (str1, str2) => str1+str2;


module.exports = { geraNumeroAleatorio, caixaAlta, firstString, concatStrings };