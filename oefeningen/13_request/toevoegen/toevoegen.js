"use strict";
const apiKey = "pub_1580ad21fb467885984bc2769ec3b49273221669bfa34e8957545a08bf366616";
document.getElementById("toevoegen").onclick = async function () { 
   const user = { 
      first_name: document.getElementById("voornaam").value, 
      last_name: document.getElementById("familienaam").value 
   }; 
   const response = await fetch("https://reqres.in/api/users", 
      {
         method: "POST", 
         headers: {
         'x-api-key': apiKey
      },
      body: JSON.stringify(user) 
    }); 
   const foutDiv = document.getElementById("fout"); 
   if (response.ok) { 
      foutDiv.hidden = true; 
      const data = await response.json(); 
      document.getElementById("nummer").innerText = data.id; 
      document.getElementById("toegevoegd").hidden = false; 
   } else { 
      foutDiv.hidden = false; 
   } 
}; 