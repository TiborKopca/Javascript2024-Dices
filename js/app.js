//CONSTANTES
const randomBtn = document.getElementById("btn-random");
const rangeBtn = document.getElementById("btn-range");
const picture = document.getElementById("picture");
const section = document.getElementById("centrar");
const quantity = document.getElementById("dado__input-quantity");
const rangevalue = document.getElementById("range-value");

//CREATE ELEMENT

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

function tirarDadoRange() {
  //dados is the value of the range input
  let dados = quantity.value;
  
  //clear previus atempts(even remove innerHTML | function)
//picture.innerHTML = "";  //this was for the random button(deprecated)
  removeDado();

  //loop to create the dices by the range input
  for (let i = 1; i <= dados; i++) {
    const dado = document.createElement("img");
    picture.insertBefore(dado, picture.firstChild);
    dado.id = "dado" + i;
    dado.className = "dado";
    dado.src = `./img/${randomInt(1, 6)}.png`;
    // picture.insertBefore(dado, picture.children[0]);
  }

  // dado.appendChild(newimage);
}
function removeDado() {
  const img = document.querySelectorAll(".dado"); //NodeList
//const img = document.getElementsByTagName("img"); //HTMLCollection
  console.log(img)
  img.forEach((element) => {
    element.remove();
  });
}

//EVENT LISTENERS
// randomBtn.addEventListener("click", tirarDadoAleatorio);
rangeBtn.addEventListener("click", tirarDadoRange);

quantity.addEventListener("input", () => {
  rangevalue.textContent = quantity.value;
});


