// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui

  if (v1 && v2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area;

  area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  // consultei o site para descobrir uma forma mais prática de repartir a string
  // Link: https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
  let splitted = string.split(' ');
  return console.log(splitted);
}

// Desafio 4
function concatName(stringArray) {
  
  let index = stringArray.length-1;
  let res = stringArray[index] + ", " + stringArray[0];
  return console.log(res);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  
  wins = wins*3;
  let rest = wins+ties;
  return console.log(rest);
}

// Desafio 6 
function highestCount(numArray) {
  // consultei para comparar com o que tinha feito para achar o erro, eu tinha invertido a ordem da expressão dentro da condição if
  // Link: https://stackoverflow.com/questions/13794225/finding-largest-integer-in-an-array-in-javascript
  
  let numMaior = numArray[0];
  let qntdMaior = 0;
   
  for (let i = 0; i < numArray.length ; i++){
    if (numMaior<numArray[i]){
      numMaior = numArray[i];
    }
  }

  for (i = 0; i < numArray.length; i++) {
    if (numMaior === numArray[i]) {
      qntdMaior+=1;
    }
  }

  return console.log(qntdMaior);
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;

  if (cat1Distance > cat2Distance){
    return console.log("cat1");
  } else if (cat2Distance === cat1Distance){
    return console.log("os gatos trombam e o rato foge");
  } else {
    return console.log("cat2");
  }
}

// Desafio 8
function fizzBuzz(noArrays) {
  // seu código aqui
  let resArray = [];

  for (let i =0; i < noArrays.length;i++) {
    if (noArrays[i]%3===0 && noArrays[i]%5===0) {
      resArray.push("fizzBuzz");
    } else if (noArrays[i]%3===0) {
      resArray.push("fizz");
    } else if (noArrays[i]%5===0){
      resArray.push("buzz");
    } else {
      resArray.push("bug!")
    }
  }
  return console.log(resArray);
}

// Desafio 9
function encode(string2) {
  // Recebi ajuda de meus colegas no Slack e em especial de minha colega Luá para descobrir que o sinal de atribuição não substitui caracteres dentro de uma string.  
  let encoded = "";
  
  for (let i = 0; i < string2.length ; i++) {
    switch (string2[i]){
      case "a": 
        encoded += 1;
        break;
      case "e": 
        encoded += 2;
        break;
      case "i": 
        encoded += 3;
        break;
      case "o": 
        encoded += 4;
        break;
      case "u": 
        encoded += 5;
        break;
      default:
        encoded += string2[i];
        break;
    }
  }  
  return console.log(encoded);
}

function decode(string3) {
  // seu código aqui
  let decoded = "";
  
  for (let i = 0; i < string3.length ; i++) {
    switch (string3[i]){
      case "1": 
        decoded += "a";
        break;
      case "2": 
        decoded += "e";
        break;
      case "3": 
        decoded += "i";
        break;
      case "4": 
        decoded += "o";
        break;
      case "5": 
        decoded += "u";
        break;
      default:
        decoded += string3[i];
        break;
    }
  }  
  return console.log(decoded);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
