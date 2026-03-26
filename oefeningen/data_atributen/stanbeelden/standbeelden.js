"use strict";
function toonStandbeeld() {
   const img = document.getElementById("afbeelding")
   img.src = `${this.dataset.foto}.jpg`;
   this.dataset.plaats = "...";
   img.title = this.dataset.plaats;
}
const hyperlinks = document.getElementsByTagName("a");
for (const hyperlink of hyperlinks) {
   hyperlink.onclick = toonStandbeeld;
}