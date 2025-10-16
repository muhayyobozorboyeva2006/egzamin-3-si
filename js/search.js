let searchCards= document.getElementById("searchcards")
let isExistProduct = false;
let searchInput=document.getElementById("input");
isExistProduct ? searchCards.classList.remove("search-cards") : searchCards.classList.add("search-cards")

searchInput.addEventListener("input" , function(e){
    searchCards.innerHTML=""
    let inputValue = e.target.value
    let res = products.filter((el) => el.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
    inputValue ? (isExistProduct =true) : (isExistProduct=false)
    isExistProduct ? searchCards.classList.remove("search-cards") : searchCards.classList.add("search-cards")
    res.map((el) => {
        searchCards.innerHTML += `
       <div class="search-card">
        <img class="search-card_img" src="${el.images[0]}" alt="mevalarni surtlar">
        <div class="search-card1">
          <h1 class="search-card_h1">${el.name}</h1>
          <p class="search-card_p">${el.description }
          </p>
        </div>
       </div>
    `
    });
})

