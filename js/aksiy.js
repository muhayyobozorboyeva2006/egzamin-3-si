let aksiy2Card = document.getElementById("aksiy2card")
let filteraksiy = products.filter((el) => el.discount > 0)
let slicaksiy = filteraksiy.slice(1 ,5)
slicaksiy.map((el) => {
  console.log(el);
  
  aksiy2Card.innerHTML += `
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