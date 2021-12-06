// Desafio 10
function techList(tecnoList, name) {
  // seu código aqui
  // Array = [];
  // EM ORDEM ALFABÉTICA Array = [obj, obj]

  //alfabetizando o array tecnoList
  tecnoList.sort();
  let resposta = [];
  
  if (tecnoList === "") {
    let resposta = "Vazio!";

  } else {    
    for (let i = 0; i < tecnoList.length; i++){
      [this["obj"+i]] = { tech: tecnoList[i], nome: name };      
    }

    return console.log(obj1);
  }
}

//teste
let tecnoList = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "Eloísa";
console.log(techList(tecnoList,name))

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
