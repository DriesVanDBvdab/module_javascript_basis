"use strict";
const voornaam = SessionStorage.getItem("voornaam");
if (voornaam !== null) {
  document.getElementById("voornaam").innerText = voornaam;
} 