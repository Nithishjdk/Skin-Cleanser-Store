let addBtn = document.getElementsByClassName("add_btn");
let cart2 = document.getElementById("cart2");
let cart = [];
for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", () => {
    addBtn[i].classList.toggle("selected");
    let img = addBtn[i].getAttribute("product-img");
    let name = addBtn[i].getAttribute("product-name");
    let price = addBtn[i].getAttribute("product-price");
    let product = {
      p_img: img,
      p_name: name,
      p_price: price,
    };
    let quantity = document.getElementById("quantity");
    if (addBtn[i].classList.contains("selected")) {
      addBtn[i].innerHTML = "Remove from cart";
      cart.push(product);
      quantity.innerHTML = `${cart.length}`;
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].p_name == name) {
          cart.splice(i, 1);
          quantity.innerHTML = `${cart.length}`;
        }
      }
      addBtn[i].innerHTML = "Add to cart";
    }
    cart2.innerHTML = ``;
    cart.forEach((ele) => {
      cart2.innerHTML += `
        <div id="cart2_items">
          <img src="${ele.p_img}" height="70" width="50"> 
          <aside id="cart2_info">
            <p id="cart2_info1">${ele.p_name}</p>
            <p id="cart2_info2">${ele.p_price}</p>
          </aside>
          <aside id="cart2_btn">
          <button id="item_remove_btn">X</button>
          </aside>
        </div>
      `;
    });

    /* let item_remove_btn = document.getElementById("item_remove_btn");
    console.log(item_remove_btn);
    
    item_remove_btn.addEventListener("click", () => {
     if(!(addBtn[i].classList.contains("selected"))){
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].p_name == name) {
          cart.splice(i, 1);
          quantity.innerHTML = `${cart.length}`;
        }
      }
      addBtn[i].innerHTML = "Add to cart";
     }
    }); */
  });
}

let price_cart = document.getElementById("price_cart");
let cart_layer = document.getElementById("cart_layer");
let one = document.getElementById("one");
price_cart.addEventListener("click", () => {
  cart_layer.style.right = "0";
  one.style.filter = "grayscale(1)";
});

let close_cart = document.getElementById("close");
close_cart.addEventListener("click", () => {
  cart_layer.style.right = "-35%";
  one.style.filter = "none";
});
