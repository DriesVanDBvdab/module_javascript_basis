"use strict";
document.getElementById("isHetWeekend").onclick = function () {
    const dagInWeek = new Date() .getDay();
    document.getElementById("weekend").innerText =
        dagInWeek === 6 || dagInWeek === 0 ? "Ja" : "Nee";
}
const standbeeldenUl = document.getElementById("standbeelden");
for (const hyperlink of standbeeldenUl.getElementsByTagName("a")) {
    hyperlink.onclick = toonStandbeeld;
    function toonStandbeeld() {
        const img = document.getElementById("afbeelding");
       img.title = this.dataset.plaats;
       img.src = `${this.dataset.foto}.jpg`;
    }
}