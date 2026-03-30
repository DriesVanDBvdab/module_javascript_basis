"use strict";
const getal1Input = document.getElementById("getal1");
const getal1Fout = document.getElementById("getal1Fout");
const getal2Input = document.getElementById("getal2");
const getal2Fout = document.getElementById("getal2Fout");
const delenKnop = document.getElementById("delen");
function validateInputNumber (input, fout) {
    let inputValid = input.checkValidity();
    fout.hidden = inputValid;
    return inputValid;
}
getal1Input.onchange = function () {
    let delenOke = true;
    delenTonen.hidden = true;
    delenOke = validateInputNumber(getal1Input, getal1Fout);
    if(delenOke && getal2Input.value != "") {
        delenKnop.disabled = false;
    }
};
getal2Input.onchange = function () {
    let delenOke = true;
    delenTonen.hidden = true;
    delenOke = validateInputNumber(getal2Input, getal2Fout);
    if(delenOke && getal1Input.value != "") {
        delenKnop.disabled = false;
    }
};

delenKnop.onclick = function () {
    let getal1 = parseInt(getal1Input.value, 10);
    let getal2 = parseInt(getal2Input.value, 10);

    let result = getal1 / getal2;
    console.log("The result is"+ result);
    delenTonen.textContent = result.toString();
    delenTonen.hidden = false;
};