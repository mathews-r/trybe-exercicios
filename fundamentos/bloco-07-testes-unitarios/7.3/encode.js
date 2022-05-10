function encode(string) {

  let novaString = '';
    
  for (let index = 0; index < string.length; index+=1) {
    if (string[index] == 'a') {
      novaString += '1';
    } else if (string[index] == 'e') {
      novaString += '2';
    } else if (string[index] == 'i') {
      novaString += '3';
    } else if (string[index] == 'o') {
      novaString += '4';
    } else if (string[index] == 'u') {
      novaString += '5';
    } else {
      novaString += string[index];
    }
    
    }
    return novaString;
  }

  module.exports = encode;
