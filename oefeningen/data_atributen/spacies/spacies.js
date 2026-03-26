"use strict";
function onTextChange() {
    document.getElementById("toonAantalSpacies").disabled = /\S/.test(this.value) === '' ? true : false;
}
document.getElementById("spacies").addEventListener('input', onTextChange);
document.getElementById("toonAantalSpacies").onclick = function () {
    let aantalSpacies = 0;
    for (let teken of document.getElementById("spacies").value) {
        if(teken === " ") {
            aantalSpacies++;
        }
    }
    document.getElementById("aantalSpacies").innerText = aantalSpacies;
}