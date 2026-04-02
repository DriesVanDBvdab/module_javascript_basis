"use strict"; 
const id = sessionStorage.getItem("id"); 
leesUser(); 
leesTodos(); 
async function leesUser() { 
 const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); 
 if (response.ok) { 
   const user = await response.json(); 
   verwerkUser(user); 
 } else { 
  document.getElementById("nietGevonden").hidden = false; 
 } 
} 
function verwerkUser(user) { 
 document.getElementById("name").innerText = user.name; 
 document.getElementById("city").innerText = user.address.city; 
}