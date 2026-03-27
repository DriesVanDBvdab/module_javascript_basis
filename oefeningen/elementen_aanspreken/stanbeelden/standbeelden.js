"use strict";
function toonStandbeeld() {
   const img = document.getElementById("afbeelding")
   img.src = `${this.dataset.foto}.jpg`;
   this.dataset.plaats = "...";
   img.title = this.dataset.plaats;
}
const hyperlinks = document.getElementsByTagName("a");
for (const hyperlink of hyperlinks) {
   hyperlink.onclick = toonStandbeeld;
}

// const standbeeldenLijst = document.getElementById("standbeelden");
// for (const childElement of standbeeldenLijst.children) { 
//    console.log(childElement); 
// }

// const eersteLi = document.querySelector("li");
// for (const sibling of eersteLi.parentElement.children) { 
//    if (sibling!== eersteLi){
//    console.log(sibling); 
//    }
// }

// const tweedeLi = document.querySelector("li:nth-child(2)");
// let volgendeSibling = tweedeLi.nextElementSibling;
// while (volgendeSibling !== null){
//    console.log(volgendeSibling); 
//    volgendeSibling = volgendeSibling.nextElementSibling;
// }

const voorlaatsteLi= document.querySelector("li:nth-last-child(2)");
let vorigeSibling = voorlaatsteLi.previousElementSibling;
while (vorigeSibling !== null){
   console.log(vorigeSibling); 
   vorigeSibling = vorigeSibling.previousElementSibling;
}