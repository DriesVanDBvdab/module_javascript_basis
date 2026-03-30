"use strict";
const feedbackField = document.getElementById("ingevuld");
const spelersnUl = document.getElementById("spelers");

function showFeedback(event) {
  const currentInput = event.target;

  if (currentInput.value.trim() === '') {
    feedbackField.innerText = "Verplicht";
    feedbackField.style.backgroundColor = "#ff0000";
    feedbackField.style.color = "white";
  } else {
    let allFilled = true;
    for (const input of playerInputs) {
      if (input.value.trim() === '') {
        allFilled = false;
        break;
      }
    }
    if (allFilled) {
        feedbackField.innerText = "";
        feedbackField.style.backgroundColor = "#ffffff";
    }
  }
}
for (const spelerInput of spelersnUl.getElementsByTagName("input")) {
    spelerInput.addEventListener('blur', showFeedback);
   
}