"use strict"; 
const apiKey = "pub_1580ad21fb467885984bc2769ec3b49273221669bfa34e8957545a08bf366616";
document.getElementById("zoeken").onclick = function () { 
   const nummerInput = document.getElementById("zoekNummer"); 
   const nummerFout = document.getElementById("nummerFout"); 
   if (nummerInput.checkValidity()) { 
      nummerFout.hidden = true; 
      leesUser(nummerInput.value);
   } else { 
      nummerFout.hidden = false; 
   } 
}
async function leesUser(id) { 
   const response = await fetch(`https://reqres.in/api/users/${id}`, {
      method: 'GET',
      headers: {
         'x-api-key': apiKey
      }
   });
   const nietGevondenDiv = document.getElementById("nietGevonden"); 
   if (response.ok) { 
      const user = await response.json()            ;
      document.getElementById("nummer").innerText = user.data.id;
      document.getElementById("voornaam").innerText = user.data.first_name;   
      document.getElementById("familienaam").innerText = user.data.last_name;   
      document.getElementById("emailAdres").innerText = user.data.email; 
      document.getElementById("avatar").src = user.data.avatar; 
      nietGevondenDiv.hidden = true; 
   } else { 
     nietGevondenDiv.hidden = false;
   } 
} 
// leesUser();
// async function leesUser() { 
//    const response = await fetch("https://reqres.in/api/users/1", {
//       method: 'GET',
//       headers: {
//          'x-api-key': apiKey
//       }
//    });
//    const user = await response.json();
//    document.getElementById("nummer").innerText = user.data.id;
//    document.getElementById("voornaam").innerText = user.data.first_name; 
//    document.getElementById("familienaam").innerText = user.data.last_name; 
//    document.getElementById("emailAdres").innerText = user.data.email; 
//    document.getElementById("avatar").src = user.data.avatar;
//    console.log(user.data.avatar);
// } 