"use strict"; 
const apiKey = "pub_1580ad21fb467885984bc2769ec3b49273221669bfa34e8957545a08bf366616";
const usersLijst = document.getElementById("usersLijst"); 
leesUser();
async function leesUser() { 
   const response = await fetch(`https://reqres.in/api/users?page=1&per_page=10`, {
      method: 'GET',
      headers: {
         'x-api-key': apiKey
      }
   });
   const nietGevondenDiv = document.getElementById("nietGevonden"); 
   if (response.ok) { 
      const users = await response.json();
      console.log(users);
      for (const user of users.data) {
         const li = document.createElement("li"); 
         const userLink = document.createElement("a");
         userLink.href = "#";
         userLink.innerHTML = `${user.first_name} ${user.last_name}`;
         userLink.onclick = function (event) {
            userOpvragen(user.id, li);
            // Disable the link when clicked.
            event.preventDefault();
            this.style.pointerEvents = 'none';
            this.style.opacity = '0.5';
            this.style.cursor = 'not-allowed';
         };
         li.appendChild(userLink);
         usersLijst.appendChild(li);
      };
      
   } else { 
     nietGevondenDiv.hidden = false;
   } 
}

async function userOpvragen(id, listItem) { 
   const response = await fetch(`https://reqres.in/api/users/${id}`, {
      method: 'GET',
      headers: {
         'x-api-key': apiKey
      }
   });
   const nietGevondenDiv = document.getElementById("nietGevonden"); 
   if (response.ok) { 
      const userData = await response.json();
      const dl = document.createElement('dl');
      console.log(userData);
      dl.innerHTML = `
        <dt>Nummer:</dt>
        <dd id="nummer">${userData.data.id || ''}</dd>
        <dt>Voornaam:</dt>
        <dd id="voornaam">${userData.data.first_name || ''}</dd>
        <dt>Familienaam:</dt>
        <dd id="familienaam">${userData.data.last_name || ''}</dd>
        <dt>Email adres:</dt>
        <dd id="emailAdres">${userData.data.email || ''}</dd>
        <dt>Avatar:</dt>
        <dd><img id="avatar" src="${userData.data.avatar || 'leeg.png'}" alt="avatar"></dd>
      `;
    
      listItem.appendChild(dl);       ;
      
      nietGevondenDiv.hidden = true; 
   } else { 
     nietGevondenDiv.hidden = false;
   } 
} 