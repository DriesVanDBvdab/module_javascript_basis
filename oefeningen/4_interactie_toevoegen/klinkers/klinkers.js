"use strict";
document.getElementById("appelen").oninput = function () {
    let aantalKlinkers = 0;
    for (let teken of this.value.toLowerCase()) {
        if("aeiou".includes(teken)) {
            aantalKlinkers++;
        }
    }
    document.getElementById("aantalKlinkers").innerText = aantalKlinkers;
}