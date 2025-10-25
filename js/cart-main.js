let diCartscard = document.querySelector(".cart3lar-div")

let badge = document.getElementById("badge")
let card = JSON.parse(localStorage.getItem("card")  || "[]")
badge.textContent = card.length
console.log(card);
function showCards(content , data){
    data.map((el)=>{
        content.innerHTML+=`
          <div class="cart3lar-div">
                            <div class="cart3lar-div-1">
                                <div class="card3lar_img">
                                    <button class="cartlar4"></button>
                                    <img class="cart3lar-img" src="../paka/image (5).png" alt="maxsulodlar">
                                </div>
                                <div class="cart4lar">
                                    <p class="cart3lar-p">${el.description}</p>
                                    <h1 class="cart3lar-h1">${el.parse} ₽ зашт.</h1>
                                </div>
                            </div>
                            <div class="cart5">
                                <div class="buttoncard">
                                    <button class="btncard1">-</button>
                                    <span>0</span>
                                    <button class="btncard2">+</button>
                                </div>
                                <div class="cart6">
                                    <p class="cart3lar-p">222 ₽</p>
                                    <s class="cart3lar-s">11,00 ₽</s>
                                </div>
                            </div>
                        </div>
        `
    })

}
showCards(diCartscard , card)