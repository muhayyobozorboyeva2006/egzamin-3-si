let price=document.querySelector("#pricecard")
let filterprice=products.filter((el) => el.description>0)
filterprice.map((el)=>{
    console.log(el.price);
    
    price.innerHTML+=`
                 
    `
})