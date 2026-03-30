"use strict";
document.getElementById("toevoegen").onclick = function () {
    verbergAlleFoutMeldingen();
    let allesOK = true;
    if (!document.getElementById("voornaam").checkValidity()) {
        document.getElementById("voornaamFout").hidden = false;
        allesOK = false;
    }
    if (!document.getElementById("kinderen").checkValidity()) {
        document.getElementById("kinderenFout").hidden = false;
        allesOK = false;
    }
    if (!document.getElementById("geslacht").checkValidity()) {
        document.getElementById("geslacht").hidden = false;
        allesOK = false;
    }
    document.getElementById("toegevoegd").hidden = !allesOK
};
function verbergAlleFoutMeldingen() {
    for (const melding of document.querySelectorAll("span.fout")) {
        melding.hidden = true;
    }
}