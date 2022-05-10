
  function decode(string2) {
    let novaString2 = '';
  
    for (let index2 = 0; index2 < string2.length; index2 += 1) {
      if (string2[index2] == '1') {
        novaString2 += 'a';
      } else if (string2[index2] == '2') {
        novaString2 += 'e';
      } else if (string2[index2] == '3') {
        novaString2 += 'i';
      } else if (string2[index2] == '4') {
        novaString2 += 'o';
      } else if (string2[index2] == '5') {
        novaString2 += 'u';
      } else {
        novaString2 += string2[index2];
      }
    }
    return novaString2;
  }

  module.exports = decode;