"use strict";
const vdabHyperlink = document.getElementById("vdab");
console.log(vdabHyperlink.href);
const jaarSpan = document.getElementById("jaar");
jaarSpan.innerText = new Date().getFullYear();