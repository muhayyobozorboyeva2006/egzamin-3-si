let productsCardslar = document.getElementById("homecardslar");
let card = JSON.parse(localStorage.getItem("card") || "[]")

let badge = document.getElementById("badge")
localStorage.setItem("card", JSON.stringify(card))

badge.textContent = card.length
function showcards(content, data) {
  content.innerHTML = "";
  data.map((product) => {
    content.innerHTML += `
            <div class="aksiy2">
            <div class="h-[100px]">
                <img class="aksiy2-img" src="${product.images[0]}" alt="${product.name}">
                <p class="aksiyo-p">${product.discount}%</p>
              <img class="like-img" src="../paka/Button (4).png" alt="layk">
            </div>

            <div class="aksiy3">
              <div class="aksiy4">
                <h1 class="aksiy4-h1">${product.price} ₽</h1>
                <h2 class="aksiy4-h2">С картой</h2>
              </div>
              <div class="aksiy4">
                <h1 class="aksiy4-h1">${product.price - 10} ₽</h1>
                <h2 class="aksiy4-h2">Обычная</h2>
              </div>
           </div>
            <p class="aksiy1-p">${product.description}</p>
            <img class="aksiy1-img1" src="../assets/images/general/rating (1).png" alt="yulduzcha">
            ${card.find((el) => el.id === product.id) ?
        `  <div class="buttoncard">
            <button onClick="decreaseQuatity(${product.id})" class="btncard1">-</button>
            <span>${card.find((el) => el.id === product.id).qty}</span>
            <button onClick="increaseQuatity(${product.id})" class="btncard2">+</button>
            </div>` :
        `<button onClick="addToCart(${product.id})"
              class="aksiy1-button" >В корзину</button>`
      }
             </div>
    `
  })
}
showcards(productsCardslar, products);

function addToCart(id) {
  let item = products.find((el) => el.id === id);
  item.qty = 1
  card.push(item)
  badge.textContent = card.length
  showcards(productsCardslar, products);
}

function increaseQuatity(id) {
  let item = card.find((el) => el.id === id)
  item.qty += 1
  localStorage.setItem("card", JSON.stringify(card))
  showcards(productsCardslar, products);
}

function decreaseQuatity(id) {
  let item = card.find((el) => el.id === id)
  item.qty -= 1

  if (item.qty <= 0) {
    card = card.filter((el) => el.id != id)
  }
  badge.textContent = card.length
  showcards(productsCardslar, products);
}