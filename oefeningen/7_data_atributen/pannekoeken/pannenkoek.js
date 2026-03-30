"use strict";
for (const element of document.querySelectorAll("#ingrediënten, #werkwijze")) {
    element.onclick = function () {
        this.classList.toggle("opvallend");
    };
}

for (const hyperlink of document.querySelectorAll("a[data-teverbergenid]")) {
    hyperlink.onclick = function () {
        const bijbehorendElement = document.getElementById(this.dataset.teverbergenid);
        if (this.innerText === "Verbergen") {
            bijbehorendElement.hidden = true;
            this.innerText = "Tonen";
        } else {
            bijbehorendElement.hidden = false;
            this.innerText = "Verbergen";
        }
    };
}