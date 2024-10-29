// Start Header
// const angle_up = document.querySelector(".cart .range .angle-up");
// const angle_down = document.querySelector(".cart .range .angle-down");
// const cart_price = document.querySelector(".price_ele .price");






// Start Header
const choices_eles = document.querySelector(".choices-eles");
const shop_button = document.querySelector("button.shop");
shop_button.addEventListener("click", function() {
    choices_eles.classList.toggle("show-choices");
});
const cancel_icon = document.querySelector("button.cancel");
cancel_icon.addEventListener("click", function() {
    choices_eles.classList.remove("show-choices");
});


// Start Our Products Section
const add_cards = document.querySelectorAll(".badge");
const carts = document.querySelector(".carts");
const shop_nbr = document.querySelector(".shop_nbr");
const totale_price = document.querySelector("span.total-price");
add_cards.forEach(element => {
    element.addEventListener("click", function() {
        const ele_name = element.nextElementSibling.firstElementChild.textContent;
        const image_ele = element.parentElement.firstElementChild.src;
        const price_ele = element.nextElementSibling.firstElementChild
        .nextElementSibling.firstElementChild.textContent;
        // create cart element
        const cart_ele = document.createElement("div");
        cart_ele.innerHTML = `
        <div class="cart p-2 mb-2 d-flex justify-content-between align-items-center">
            <div class="image pe-3">
                <img src="${image_ele}" alt="">
            </div>
            <div class="desc text-start w-100">
                <p class="name mb-0 fw-bold">${ele_name}</p>
                <p class="price_ele mb-0 fw-bold">$<span class="price">${price_ele}</span></p>
                <p class="remove mb-0 text-danger cursor-pointer">remove</p>
            </div>
            <div class="range">
                <i class="fa-solid fa-angle-up angle-up cursor-pointer"></i>
                <div class="number-eles">0</div>
                <i class="fa-solid fa-angle-down angle-down  cursor-pointer"></i>
            </div>
        </div>
        `;
        carts.appendChild(cart_ele);
        // Here
        shop_nbr.textContent = Number(shop_nbr.textContent) + 1;
        totale_price.textContent = Number(totale_price.textContent + price_ele);
    });
});

// Remove an Element
carts.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove")) {
        const remove_cart = event.target.parentElement.parentElement;


        const price_ele = event.target.parentElement.firstElementChild.nextElementSibling.
        firstElementChild.textContent;

        totale_price.textContent = Number(totale_price.textContent) - price_ele;

        remove_cart.remove();
        shop_nbr.textContent = Number(shop_nbr.textContent) - 1;
    }
});

// Decrease || Increase
carts.addEventListener("click", function(event) {
    if (event.target.classList.contains("angle-down")) {
        const angle_down = event.target;
        angle_down.addEventListener("click", function() {
            // const number_eles = angle_down.parentElement.nextElementSibling.nextElementSibling;
            console.log(number_eles);
            if (number_eles.textContent <= 0) {
                number_eles.textContent =  0;
            }
            else {
                number_eles.textContent = Number(number_eles.textContent) - 1;
                totale_price.textContent = Number(totale_price.textContent) - Number(cart_price.textContent); 
            }
        });
    }
    if (event.target.classList.contains("angle-up")) {
        const angle_up = event.target;
        const number_eles = angle_up.parentElement.firstElementChild.nextElementSibling;
        const cart_price = angle_up.parentElement.parentElement.firstElementChild.
        nextElementSibling.firstElementChild.nextElementSibling.firstElementChild
        .textContent;
        angle_up.addEventListener("click", function() {
            number_eles.textContent = Number(number_eles.textContent) + 1;
            console.log(number_eles.textContent);
            totale_price.textContent = Number(totale_price.textContent) + Number(cart_price); 
        });
    }
});




/// custom totale price in remove and also in increase and decrease

