"use strict";
let sauzenJson = null;
let pogingen = 0;
let gekozenSaus = "";
let geradenLetters = "";
let sausNummer = 0;

const radenLijst = document.getElementById("radenLijst");
const letterTeRaden = document.getElementById("letterTeRaden");
const radenButton = document.getElementById("raden");
const sausWoord = document.getElementById("sausWoord");
const verkeerdAfbeelding = document.getElementById("verkeerd");

radenButton.onclick = function() {
    if(pogingen === 10) {
        return;
    }
    letterInSaus(letterTeRaden.value);
};

radenLijst.style.listStyleType = "none";
letterTeRaden.addEventListener('input', (event) => {      
    event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
    if (event.target.value.length > 0) {
        radenButton.disabled = false;
    } else {
        radenButton.disabled = true;
    }
});

async function loadJsonFile(callback) {
  try {
    const response = await fetch('sauzen.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Sauzen JSON: ', data);
    verwerkSauzen(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

function verwerkSauzen(data) {
    if (data) {
        sausNummer = Math.floor(Math.random() * data.length);
        console.log('JSON data:', data[sausNummer]);
        gekozenSaus = data[sausNummer];
        for (let i = 0; i < gekozenSaus.length; i++) {
            geradenLetters += ".";
        }
        sausWoord.innerHTML = geradenLetters;
    } else {
        console.log('No data available to process.');
    }
}

function letterInSaus(letter) {
    let geradenLettersArray = geradenLetters.split('');
    let letterGevonden = false;
    for (let i = 0; i < gekozenSaus.length; i++) {
        const currentLetter = gekozenSaus[i];
        if(currentLetter === letter) {
            geradenLettersArray[i] = letter;
            letterGevonden = true;

        } 
    }
    if(!letterGevonden) {
        updateAfbeelding();
    }

    let nieuweGeradenLetters = geradenLettersArray.join('');
    sausWoord.innerHTML = nieuweGeradenLetters;
    geradenLetters = nieuweGeradenLetters;
}

function updateAfbeelding() {
    pogingen++;
    verkeerdAfbeelding.src = `${pogingen.toString()}.png`;
}

loadJsonFile(verwerkSauzen);