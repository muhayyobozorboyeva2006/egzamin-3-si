
let params= new URLSearchParams(window.location.search)
const id=params.get("id");
 
let singlePro = document.querySelector(".singlePro");

let  singleProduct=products.filter((el) => el.id==id)
console.log(singleProduct);
singleProduct.map((el)=>{
  singlePro.innerHTML +=`
            <div class="tavarlar-card">
                            <div class="tavar2">
                                    <div class="tavar3">
                                        ${
                                          el.images.map((img)=>{ 
                                            return`<img class="tavar3-img" src="${img}" alt="sutli mahsulotlatr" />
                                            `
                                          }).join(" ")
                                        }
                                    </div>
                                    <div>
                                        <img class="tavar2-img" src="${el.images[0]}" alt="sutli mahsulotlatr">
                                    
                                    </div>             
                                   </div>
            
                                   </div>
  `
})
   



let homesindle = document.getElementById("home-card")
let filtersindle = products.filter((el) => el.discount > 0)
let slicesindle = filtersindle.slice(filtersindle.length - 8, filtersindle.length)
slicesindle.map((el) => {
    homesindle.innerHTML += `
                  <a href="../imges/tavar1440.html?id=${el.id}" class="aksiy2">
            <div class="h-[100px]">
                <img class="aksiy2-img" src="${el.images[2]}" alt="rasm">
                <p class="aksiyo-p">${el.discount}%</p>
              <img class="like-img" src="../paka/Button (4).png" alt="layk">
            </div>

            <div class="aksiy3">
              <div class="aksiy4">
                <h1 class="aksiy4-h1">${el.price} ₽</h1>
                <h2 class="aksiy4-h2">С картой</h2>
              </div>
              <div class="aksiy4">
                <h1 class="aksiy4-h1">${el.price - 10} ₽</h1>
                <h2 class="aksiy4-h2">Обычная</h2>
              </div>
            </div>
            <p class="aksiy1-p">${el.description}</p>
            <img class="aksiy1-img1" src="../assets/images/general/rating (1).png" alt="yulduzcha">
            <button class="aksiy1-button">В корзину</button>
            </a>
    `;
});

