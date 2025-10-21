let diCartscard = document.querySelector(".cart3lar-div")

let badge = document.getElementById("badge")
let card = JSON.parse(localStorage.getItem("card") === "undefined" || "[]")
badge.textContent = card.length
console.log(card);
