"use strict";
for (const todo of document.querySelectorAll("#todo li")){
todo.onclick = function () {
this.classList.toggle("vanbelang");
}
}