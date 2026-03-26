"use strict";
function toonLandData(){
    document.getElementById("hoofdstad").innerText = this.dataset.hoodfstad;
    document.getElementById("oppervlakte").innerText = this.dataset.oppervlakte;
}

const landenLinks = document.querySelectorAll("#landen a");
for (const landLink of landenLinks) {
    landLink.onclick = toonLandData;
}