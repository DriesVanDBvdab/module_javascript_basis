"use strict";
const laatsteBezoek = localStorage.getItem('laatsteBezoek');
if(laatsteBezoek !== null) {
    document.getElementById("tijdLaatsteBezoek").innerHTML = laatsteBezoek;
}
let aantalBezoeken = localStorage.getItem("aantalBezoeken");
aantalBezoeken = aantalBezoeken === null ? 1 : Number(aantalBezoeken) + 1;
document.getElementById("aantalBezoeken").innerHTML = aantalBezoeken;
localStorage.setItem("laatsteBezoek", new Date().toLocaleString("nl-BE"));
localStorage.setItem("aantalBezoeken", aantalBezoeken);

