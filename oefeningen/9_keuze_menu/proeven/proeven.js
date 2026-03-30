"use strict"; 
document.getElementById("burgers").onchange = function () {
    this.options[this.selectedIndex].remove();
};