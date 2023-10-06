// Variable screenDisplay sélection classe screen  // 
const screenDisplay = document.querySelector(".screen");
// buttons contient les input sous forme de tableau pour utilsation dans forEach 
const buttons = document.querySelectorAll("input");
// Variable calculation tableau vide pour utilisation dans la fonction calculate
let calculation = [];
// Variable assignée dans la fonction calculate 
let accumulativeCalculation;

// Une fonction sert à executer un script soit à l'appel d'un eventListener soit au chargement de la page. Calculate est une fonction paramètrée avec button, que je vais remplacer par chaque bouton contenu dans mon tableau buttons
function calculate(button) {
  const value = button.value;
  if (value === "C") {
    calculation = [];
    screenDisplay.textContent = "";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
