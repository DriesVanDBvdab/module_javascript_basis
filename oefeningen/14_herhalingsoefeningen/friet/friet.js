"use strict";
const deurenLijst = document.getElementById("deurenLijst");
const gevonden = document.getElementById("gevonden");
const aantalBeurten = document.getElementById("aantalBeurten");
let aantalKeerGeprobeerd = 0;
deurenLijst.style.listStyleType = "none";
deurenLijst.style.display = "flex";
const frietDeur = Math.floor(Math.random() * 7);
for (let index = 0; index < 7; index++) {
    const li = document.createElement("li");
    const deurLink = document.createElement("a");
    deurLink.href = "#";
    const img = document.createElement('img');
    img.src = 'deurtoe.png';
    img.alt = 'afbeelding van een gesloten deur';
    deurLink.appendChild(img);
    
    deurLink.onclick = function(event) {
        aantalKeerGeprobeerd ++;
        const linkImg = this.querySelector("img");
        if(index === frietDeur) {
            linkImg.src = 'gevonden.png';
            linkImg.alt = 'de friet staat in de open deur';
            gevonden.hidden = false;
            aantalBeurten.innerHTML = `${aantalKeerGeprobeerd.toString()} ${aantalKeerGeprobeerd > 1 ? "BEURTEN" : "BEURT"}`
        } else {
            linkImg.src = 'deuropen.png';
            linkImg.alt = 'Afbeelding van een open deur';
        }
    };
    
    li.appendChild(deurLink);
    deurenLijst.appendChild(li);
}