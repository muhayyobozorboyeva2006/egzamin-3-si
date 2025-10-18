

let homeCards = document.getElementById("home-cards")
let filterProductsMain = products.filter((el) => el.discount > 0)
let sliceProductsMain = filterProductsMain.slice(filterProductsMain.length-4 , filterProductsMain.length)
sliceProductsMain.map((el) => {
  console.log(el);
  
    homeCards.innerHTML +=`
                  <div href="../imges/tavar1440.html?id=${el.id}" class="aksiy2">
            <div class="h-[100px]">
                <img class="aksiy2-img" src="${el.images[0]}" alt="${el.name}">
                <p class="aksiyo-p">${el.discount}%</p>
              <img class="like-img" src="../paka/Button (4).png" alt="layk">
            </div>

            <div class="aksiy3">
              <div class="aksiy4">
                <h1 class="aksiy4-h1">${el.price} ₽</h1>
                <h2 class="aksiy4-h2">С картой</h2>
              </div>
              <div class="aksiy4">
                <h1 class="aksiy4-h1">${el.price-10} ₽</h1>gige
                <h2 class="aksiy4-h2">Обычная</h2>
              </div>
            </div>
            <p class="aksiy1-p">${el.description}</p>
            <img class="aksiy1-img1" src="../assets/images/general/rating (1).png" alt="yulduzcha">
            <button class="aksiy1-button" >В корзину</button>
            </div>
    `;
});