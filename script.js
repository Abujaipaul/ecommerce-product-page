
const cartIcon = document.querySelector("#cart_icon_toggle")
const cartBox = document.querySelector(".cart_box")
const cartIndicatorItems = document.querySelector("#cart_indicator_items")
const cartIndicatorEmpty = document.querySelector("#cart_indicator_empty")
const deleteButton = document.querySelector("#dustbin_delete")
const substractButton = document.querySelector("#substract_button")
const additionButton = document.querySelector("#addition_button")
const itemPicked = document.querySelector("#item_picked")


 //to trigger the cart dropdown.
 cartIcon.addEventListener("click", () => {
     cartBox.classList.toggle("cart_disappear")
 })

 //to delete the cart_indicator_items
function deleteItems(){
     cartIndicatorItems.remove()
     cartIndicatorEmpty.style = "display : block;"
 }
 deleteButton.addEventListener("click", deleteItems)

 //to add or minus number of goods picked.

