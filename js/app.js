//CONSTANTES
const randomBtn = document.getElementById("btn-random");
const rangeBtn = document.getElementById("btn-range");
const picture = document.getElementById("picture");
const section = document.getElementById("centrar");
const quantity = document.getElementById("dado__input-quantity");
const rangevalue = document.getElementById("range-value");
const dado = document.createElement("img");

//CREATE DEFAULT ELEMENT
dado.id = "primerDado";
dado.className = "dado";
dado.src = `./img/${randomInt(1, 6)}.png`;
picture.appendChild(dado);

//FUNCTIONS
function randomInt(numMin, numMax) {
  return Math.floor(Math.random() * numMax) + numMin;
}

function tirarDadoAleatorio() {
  const numMax = 6; //max 6 dados
  const numMin = 1; //min 1 dado
  //create element of your choice
  const dado = document.createElement("img");
  //cleaning all elements under the parent container picture
  picture.innerHTML = "";
  //call function to obtain a random number
  let numero = randomInt(numMin, numMax);
  //set the src of the element to the random number
  dado.src = `./img/${numero}.png`;
  //append the element to the parent container picture
  picture.appendChild(dado);
}

//ARRAY OF DICE
let numeroUNO = 0,
  numberDOS = 0,
  numberTRES = 0,
  numberCUATRO = 0,
  numberCINCO = 0,
  numberSEIS = 0;

function tirarDadoRange() {
  //dados is the value of the range input
  let dados = quantity.value;

  //clear previus atempts(even remove innerHTML | function)
  //picture.innerHTML = "";  //this was for the random button(deprecated)
  removeDado();

  //loop to create the dices by the range input
  for (let i = 1; i <= dados; i++) {
    const diceElement = document.createElement("img");
    const randomNumber = randomInt(1, 6);
    diceElement.id = "dado" + i;
    diceElement.className = "dado";
    diceElement.src = `./img/${randomNumber}.png`;
    picture.insertBefore(diceElement, picture.firstChild);

    //data for statistic
    //On every turn, if the random number is 1, 2, 3, 4, 5, or 6, increment the corresponding variable by 1.
    switch (randomNumber) {
      case 1:
        numeroUNO++;
        break;
      case 2:
        numberDOS++;
        break;
      case 3:
        numberTRES++;
        break;
      case 4:
        numberCUATRO++;
        break;
      case 5:
        numberCINCO++;
        break;
      case 6:
        numberSEIS++;
        break;
      default:
        break;
    }
  }

  const numberofDicesEveryTurn = document.querySelectorAll(".dado");
  console.log(`Has tirado ${numberofDicesEveryTurn.length} dados`);

  //SEND THE DATA TO THE FUNCTION TO ANALYZE THEM
  analizarDados(
    numberofDicesEveryTurn.length,
    numeroUNO,
    numberDOS,
    numberTRES,
    numberCUATRO,
    numberCINCO,
    numberSEIS
  );
}

function removeDado() {
  const img = document.querySelectorAll(".dado"); //NodeList
  //const img = document.getElementsByTagName("img"); //HTMLCollection
  //   console.log(img)
  img.forEach((element) => {
    element.remove();
  });
}

let bote = 0; //bote is the total rounds of the dices
function analizarDados(dadosCandidad, n1, n2, n3, n4, n5, n6) {
  //Filling the grand total number of dices rolled for All rounds
  bote += dadosCandidad;

  console.log(`Numeros acumulados sumados:${bote}`);
  const numeros = [n1, n2, n3, n4, n5, n6];
  console.log(numeros);

  //i needs to start @ 0 because we are using the index of the array
  for (let i = 0; i < 6; i++) {
    document.getElementById("valor"+(i+1)).innerHTML =
      Math.floor((numeros[i] / bote) * 100) + "%";
  }

  // calcElementDOM("valor1", numeroUNO);
  // calcElementDOM("valor2", numberDOS);
  // calcElementDOM("valor3", numberTRES);
  // calcElementDOM("valor4", numberCUATRO);
  // calcElementDOM("valor5", numberCINCO);
  // calcElementDOM("valor6", numberSEIS);
}
// function calcElementDOM(id, data) {
//   const element = document.getElementById(id);
//   //FORMULA = specific number / number of dices * 100%
//   element.textContent = Math.floor(data / bote * 100) + '%';;
// }

//EVENT LISTENERS
// randomBtn.addEventListener("click", tirarDadoAleatorio);
rangeBtn.addEventListener("click", tirarDadoRange);

quantity.addEventListener("input", () => {
  rangevalue.textContent = quantity.value;
});
