"use strict";
const linksSelect = document.getElementById("links");
const rechtsSelect = document.getElementById("rechts");
const eenNaarRechtsButton = document.getElementById("eenNaarRechts");
const allesNaarRechtsButton = document.getElementById("allesNaarRechts");
const eenNaarLinksButton = document.getElementById("eenNaarLinks");
const allesNaarLinksButton = document.getElementById("allesNaarLinks");

function verplaatsAlleBurgersVanNaar(vanSelect, naarSelect) {
    for (const vanOption of vanSelect.options) {
        const naarOption = document.createElement("option");
        naarOption.innerText = vanOption.innerText;
        naarSelect.appendChild(naarOption);
    }
    vanSelect.options.length = 0;
}
allesNaarRechtsButton.onclick = function () {
    verplaatsAlleBurgersVanNaar(linksSelect, rechtsSelect);
    this.disabled = true;
    allesNaarLinksButton.disabled = false;
};
allesNaarLinksButton.onclick = function () {
    verplaatsAlleBurgersVanNaar(rechtsSelect, linksSelect);
    this.disabled = true;
    allesNaarRechtsButton.disabled = false;
};
function verplaatsBurgerVanNaar(vanSelect, naarSelect) {
  const naarOption = document.createElement("option");
  naarOption.innerText = vanSelect.options[vanSelect.selectedIndex].innerText;
  naarSelect.appendChild(naarOption);
  vanSelect.removeChild(vanSelect.options[vanSelect.selectedIndex]);
}
eenNaarLinksButton.onclick = function () {
  verplaatsBurgerVanNaar(rechtsSelect, linksSelect);
  if (rechtsSelect.options.length === 0) {
    eenNaarLinksButton.disabled = true;
  }
};
eenNaarRechtsButton.onclick = function () {
  verplaatsBurgerVanNaar(linksSelect, rechtsSelect);
  if (linksSelect.options.length === 0) {
    eenNaarRechtsButton.disabled = true;
  }
};

linksSelect.onchange = function () {
  eenNaarRechtsButton.disabled = false;
};

rechtsSelect.onchange = function () {
  eenNaarLinksButton.disabled = false;
};