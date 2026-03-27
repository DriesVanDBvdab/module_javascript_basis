"use strict";

const tbody = document.querySelector("tbody");
// const date = new Date(2022, 4, 22).getDate();
for (let index = 0; index < 10; index++) {
    const date = new Date(2022, 4, 22 + index);
    const tr = tbody.insertRow();
    const datumTd = tr.insertCell();
    datumTd.innerText = date.toLocaleDateString("nl-BE");
    const todoId = tr.insertCell();
    const inputField = document.createElement("input");
    inputField.type = "text"; 
    todoId.appendChild(inputField);
}