
const cartIcon = document.querySelector(".cart_icon")
const cartBox = document.querySelector(".cart_box")



 //to trigger the cart dropdown.
 cartIcon.addEventListener("click", () => {
     cartBox.classList.toggle("cart_disappear")
 })