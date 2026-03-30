"use strict";
document.getElementById("palidroom").onblur = function () {
    let omgekeerd = "";
    for (let teken of this.value) {
        if("aeiou".includes(teken)) {
            omgekeerd = teken + omgekeerd;
        }
    }
    document.getElementById("feedback").innerText = omgekeerd === this.value ? "Dit is een palidroom" : "Dit is geen palidroom";
}