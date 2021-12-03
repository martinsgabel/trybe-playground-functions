// Desafio 1
function compareTrue(v1,v2) {
  // seu código aqui

  if (v1 && v2) {
    return true;
  } else {
    return false;
  }   
}

// testando
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area;

  area = (base*height)/2;

  return area;
}

// testando
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let splitted = string.split(' ');
  return console.log(splitted);
}

// teste
console.log(splitSentence("Grace of the Lords"));

// Desafio 4
function concatName(stringArray) {
  
  let index = stringArray.length-1;
  let res = stringArray[index] + ", " + stringArray[0];
  return console.log(res);
}

// teste
let stringArray = ['foguete', 'não', 'tem', 'ré'];
console.log(concatName(stringArray));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  
  wins = wins*3;
  let rest = wins+ties;
  return console.log(rest);
}

//teste
console.log(footballPoints(0,0));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
