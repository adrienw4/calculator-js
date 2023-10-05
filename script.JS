const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("input");

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
  const value = button.value;
  console.log(value);
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
