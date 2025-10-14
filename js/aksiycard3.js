let aksiy3Card = document.querySelector("#aksiycard3")
let filterProducts = products.filter((el) => el.discount > 0)
let sliceProducts = filterProducts.slice(12, 16)
sliceProducts.map((el) => {
    aksiy3Card.innerHTML += `
          <div class="aksiy2">
            <img class="aksiy2-img" src="${el.images[0]}" alt="bilnchik">
            <img class="like-img" src="../paka/Button (4).png" alt="layk">
            <div class="aksiy3">
              <div class="aksiy4">
                <h1 class="aksiy4-h">${el.price} ₽</h1>

              </div>
            </div>
            <p class="aksiy1-p">${el.description}</p>
            <img class="aksiy1-img1" src="../paka/rating (3).png" alt="yulduzcha">
            <button class="aksiy1-button">В корзину</button>
          </div>

    `;
});