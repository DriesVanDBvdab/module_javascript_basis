"use strict";
document.getElementById("zonderOfMetAfbeeldingen").onclick = function() {
    let zonderAfbeelding = false;
    if(this.innerText === "Zonder afbeeldingen"){
        zonderAfbeelding = true;
        this.innerText = "Met afbeeldingen";
    } else {
        zonderAfbeelding = false;
        this.innerText = "Zonder afbeeldingen";
    } 
    for (const standbeeld of document.querySelectorAll("#standbeelden li img")) {
        standbeeld.hidden = zonderAfbeelding;
    }
}