"use strict";
const burgerLinks = document.querySelectorAll("#beschikbaar a");
const aantal = document.getElementById("aantal");
const mandje = document.getElementById("mandje"); 
console.log("The number of burgers is :"+ burgerLinks.length);
let aantalBurgers = localStorage.getItem("aantalBurgers");
if(aantalBurgers === null) {
    aantalBurgers = 0;
}
aantal.innerHTML = aantalBurgers.toString();
let burgerLijst = JSON.parse(localStorage.getItem("burgerLijst")); 
if (burgerLijst === null) { 
  burgerLijst = [];
}

for (const burger of burgerLijst) { 
  const li = document.createElement("li"); 
  li.innerText = burger; 
  mandje.appendChild(li); 
} 

for (const burgerLink of burgerLinks) {
    burgerLink.onclick = function () {
        console.log("clicking on the " + this.innerHTML + " burger");
        aantalBurgers ++;
        localStorage.setItem("aantalBurgers", aantalBurgers); 
        aantal.innerHTML = aantalBurgers.toString();
        burgerLijst.push(this.innerHTML);
        const li = document.createElement("li"); 
        li.innerText = this.innerHTML; 
        mandje.appendChild(li); 
        localStorage.setItem("burgerLijst", JSON.stringify(burgerLijst)); 
    };
}
