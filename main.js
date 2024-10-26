// Start Header
const shop_button = document.querySelector("button.shop");
const choices_eles = document.querySelector(".choices-eles");
const cancel_icon = document.querySelector("button.cancel");
const angle_up = document.querySelector(".cart .range .angle-up");
const angle_down = document.querySelector(".cart .range .angle-down");
const number_eles = document.querySelector(".cart .range .number-eles");

shop_button.addEventListener("click", function() {
    choices_eles.classList.toggle("show-choices");
});

cancel_icon.addEventListener("click", function() {
    choices_eles.classList.remove("show-choices");
});

angle_down.addEventListener("click", function() {
    if (number_eles.textContent <= 0) {
        number_eles.textContent =  0;
    }
    else number_eles.textContent = Number(number_eles.textContent) - 1;
});
angle_up.addEventListener("click", function() {
    number_eles.textContent = Number(number_eles.textContent) + 1;
});









