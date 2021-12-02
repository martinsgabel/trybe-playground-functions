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

  for (let i = 0; i < string.length; i++){
    if (string[i] != " ") {
      
    }
  }

}

console.log(splitSentence("Grace of the Lords"))
string = "Grace Of The";
console.log(string.length);

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
