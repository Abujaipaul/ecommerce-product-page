
const cartIcon = document.querySelector("#cart_icon_toggle")
const cartBox = document.querySelector(".cart_box")
const cartIndicatorItems = document.querySelector("#cart_indicator_items")
const cartIndicatorEmpty = document.querySelector("#cart_indicator_empty")
// buttons
const deleteButton = document.querySelector("#dustbin_delete")
const substractButton = document.querySelector("#substract_button")
const additionButton = document.querySelector("#addition_button")
const addToCartButton = document.querySelector("#add_to_cart_text")
// variables tragetting the item picked span.
const itemPicked = document.querySelectorAll("#item_picked")[2]
const cartIconPicked = document.querySelectorAll("#item_picked")[0]
const itemPickedInCart = document.querySelectorAll("#item_picked")[1]
const cartBoxItems = document.querySelector(".cart_box_items")
//thumbnails pictures
const thumbnailPictures = document.querySelectorAll(".thumbnail_box")



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
let numberOfItems = 0;

 function displayItemPicked(){
    itemPicked.innerHTML = numberOfItems 
    cartIconPicked.innerHTML = numberOfItems
    itemPickedInCart.innerHTML = numberOfItems
 }
 
 function adder(){
    numberOfItems++
    displayItemPicked()
 }
 
 function substractor(){
    numberOfItems--
    displayItemPicked()
 }
   
 additionButton.addEventListener("click", adder)
 substractButton.addEventListener("click", substractor)
 
//to add items to cart box.
 function addItems(){
     cartBoxItems.append(cartIndicatorItems)
      cartIndicatorEmpty.style = "display : none;"
 }

 addToCartButton.addEventListener("click", addItems)

 //focus on thumbnail picture
    thumbnailPictures.forEach((picture) => {
        picture.addEventListener("click", () => {
           picture.classList.toggle("thumbnail_focus")
        })
    })

  
 
