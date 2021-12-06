// Desafio 10
function techList(tecnoList, name) {
  // seu código aqui
  // consultei como alterar automaticamente o nome do objeto em loop e aprendi sobre o "this[]" https://stackoverflow.com/questions/8260156/how-do-i-create-dynamic-variable-names-inside-a-loop 
  tecnoList.sort();
  let resposta = [];
  
  if (tecnoList === "") {
    let resposta = "Vazio!";

  } else {    
    for (let i = 0; i < tecnoList.length; i++){
      resposta.push(this["obj"+i] = { tech: tecnoList[i], name: name })    
    }

    return resposta;
  }
}


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
