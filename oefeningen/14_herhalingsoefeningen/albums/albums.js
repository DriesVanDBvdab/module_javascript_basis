"use strict";
leesUsers();
async function leesUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
        const users = await response.json();
        verwerkUsers(users);
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }
}
function verwerkUsers(users) {
    const ul = document.getElementById("userLijst");
    for (const user of users) {
        const hyperlink = document.createElement("a");
        hyperlink.innerText = user.name;
        hyperlink.href = "#";
        hyperlink.dataset.id = user.id;
        hyperlink.onclick = toonAlbums;
        const li = document.createElement("li");
        li.appendChild(hyperlink);
        ul.appendChild(li);
    }
}
async function toonAlbums() {
    const userEnAlbumDiv = document.getElementById("userEnAlbum");
    userEnAlbumDiv.hidden = false;
    document.getElementById("userName").innerText = this.innerText;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${this.dataset.id}`);
    const nietGevondenDiv = document.getElementById("nietGevonden");
    if (response.ok) {
        nietGevondenDiv.hidden = true;
        const albums = await response.json();
        verwerkAlbums(albums);
    } else {
        nietGevondenDiv.hidden = false;
    }
}
function verwerkAlbums(albums) {
    const ul = document.getElementById("albums");
    verwijderAlleChildElementenVan(ul);
    for (const album of albums) {
        const li = document.createElement("li");
        li.innerText = album.title;
        ul.appendChild(li);
    }
}
function verwijderAlleChildElementenVan(element) {
    while (element.lastChild !== null) {
        element.lastChild.remove();
    }
}