"use strict";
document.getElementById("begroeting").innerText = begroeting();
function begroeting() {
    const uur = new Date().getHours();
    if (uur < 12) {
        return "Goedemorgen.";
    }
    if (uur < 18) {
        return "Goedemiddag.";
    }
    return "Goedenavond.";
}