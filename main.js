// Start Header
const choices_eles = document.querySelector(".choices-eles");
const shop_button = document.querySelector("button.shop");
shop_button.addEventListener("click", function () {
  choices_eles.classList.toggle("show-choices");
});

const cancel_icon = document.querySelector("button.cancel");
cancel_icon.addEventListener("click", function () {
  choices_eles.classList.remove("show-choices");
});

// Start Our Products Section
const add_cards = document.querySelectorAll(".badge");
const carts = document.querySelector(".carts");
const shop_nbr = document.querySelector(".shop_nbr");
const totale_cart_price = document.querySelector("span.total-price");

add_cards.forEach((cart) => {
  cart.addEventListener("click", function () {
    const badge_value = cart.firstElementChild.nextElementSibling.textContent;
    if (badge_value != "Cart Added") {
      // Get the price & image & name of cart
      const cart_name = cart.nextElementSibling.firstElementChild.textContent;
      const cart_image = cart.parentElement.firstElementChild.src;
      const cart_price =
        cart.nextElementSibling.firstElementChild.nextElementSibling
          .firstElementChild.textContent;
      // create & add cart cart
      const cart_ele = document.createElement("div");
      cart_ele.innerHTML = `
            <div class="cart p-2 mb-2 d-flex justify-content-between align-items-center">
                <div class="image pe-3">
                    <img src="${cart_image}" alt="">
                </div>
                <div class="desc text-start w-100">
                    <p class="name mb-0 fw-bold">${cart_name}</p>
                    <p class="price mb-0 fw-bold">$<span class="price">${cart_price}</span></p>
                    <p class="remove mb-0 text-danger cursor-pointer">remove</p>
                </div>
                <div class="range">
                    <i class="fa-solid fa-angle-up angle-up cursor-pointer"></i>
                    <div class="number-eles">1</div>
                    <i class="fa-solid fa-angle-down angle-down  cursor-pointer"></i>
                </div>
            </div>
            `;
      carts.appendChild(cart_ele);
      // Custom Numver of things that you shop
      shop_nbr.textContent = Number(shop_nbr.textContent) + 1;
      totale_cart_price.textContent =
        Number(totale_cart_price.textContent) + Number(cart_price);
      // Make Cart Add
      cart.firstElementChild.nextElementSibling.textContent = "Cart Added";
    }
  });
});

// Remove an Element
carts.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove")) {
    const remove_cart = event.target.parentElement.parentElement;

    set_carts(event.target.parentElement.firstElementChild.textContent);

    const price_ele =
      event.target.parentElement.firstElementChild.nextElementSibling
        .firstElementChild.textContent;

    totale_cart_price.textContent =
      Number(totale_cart_price.textContent) - Number(price_ele);
    if (totale_cart_price.textContent < 0) totale_cart_price.textContent = 0;

    remove_cart.remove();
    let new_shop_nbr = Number(shop_nbr.textContent) - 1;
    if (new_shop_nbr < 0) {
      shop_nbr.textContent = 0;
    } else {
      shop_nbr.textContent = Number(shop_nbr.textContent) - 1;
    }
    
    if (carts.innerHTML == "") {
      totale_cart_price.textContent = 0;
    }


  }
});

// Decrease || Increase
carts.addEventListener("click", function (event) {
  if (event.target.classList.contains("angle-down")) {
    const angle_down = event.target;
    const number_eles =
      angle_down.parentElement.firstElementChild.nextElementSibling;
    const cart_price =
      angle_down.parentElement.parentElement.firstElementChild
        .nextElementSibling.firstElementChild.nextElementSibling
        .firstElementChild;

    if (number_eles.textContent <= 1) {
      number_eles.textContent = 1;
    } else {
      number_eles.textContent = Number(number_eles.textContent) - 1;
      totale_cart_price.textContent =
        Number(totale_cart_price.textContent) - Number(cart_price.textContent);
      shop_nbr.textContent = Number(shop_nbr.textContent) - 1;
    }
  }
  if (event.target.classList.contains("angle-up")) {
    const angle_up = event.target;
    const number_eles =
      angle_up.parentElement.firstElementChild.nextElementSibling;
    const cart_price =
      angle_up.parentElement.parentElement.firstElementChild.nextElementSibling
        .firstElementChild.nextElementSibling.firstElementChild;

    number_eles.textContent = Number(number_eles.textContent) + 1;
    totale_cart_price.textContent =
      Number(totale_cart_price.textContent) + Number(cart_price.textContent);
    shop_nbr.textContent = Number(shop_nbr.textContent) + 1;
  }
});


// Clear all Carts
const clear_carts = document.querySelector(".clear_carts");
clear_carts.addEventListener("click", function() {
  carts.innerHTML = "";
  shop_nbr.textContent = 0;
  totale_cart_price.textContent = 0;
});



function set_carts(name) {
  const all_cards = document.querySelectorAll(".card");
  if (all_cards.length != 0) {
    all_cards.forEach(element => {
      let card_name = element.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.textContent;
      if (card_name == name) {
        element.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent = "Add To Cart";
      }
    });
  }
}

