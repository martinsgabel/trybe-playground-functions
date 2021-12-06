// Desafio 10
function techList(tecnoList, name) {
  // seu código aqui
  // consultei como alterar automaticamente o nome do objeto em loop e aprendi sobre o "this[]" https://stackoverflow.com/questions/8260156/how-do-i-create-dynamic-variable-names-inside-a-loop

  //para declarar uma condição de array vazia consultei outros métodos em https://www.freecodecamp.org/portuguese/news/como-ver-se-um-array-em-javascript-esta-vazio-ou-sem-length/
  tecnoList.sort();
  let resposta = [];
  
  if (!tecnoList.length) {
    resposta = "Vazio!";

  } else {    
    for (let i = 0; i < tecnoList.length; i++){
      resposta.push(this["obj"+i] = { tech: tecnoList[i], name: name })    
    }    
  }
  return console.log(resposta);
}

tecnoList = [];
name = "Lucas";
console.log(techList(tecnoList,name));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
