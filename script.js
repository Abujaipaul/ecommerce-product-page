
const cartIcon = document.querySelector("#cart_icon_toggle")
const cartBox = document.querySelector(".cart_box")
const cartIndicatorItems = document.querySelector("#cart_indicator_items")
const cartIndicatorEmpty = document.querySelector("#cart_indicator_empty")
const cartNumber = document.querySelector(".cart_number")
// buttons
const deleteButton = document.querySelector("#dustbin_delete")
const substractButton = document.querySelector("#substract_button")
const additionButton = document.querySelector("#addition_button")
const addToCartButton = document.querySelector("#add_to_cart_text")
const closeModalButton = document.querySelector("#close_modal_button")
const previousBox = document.querySelector(".previous_box")
const nextBox = document.querySelector(".next_box")
const previousBoxMobile = document.querySelector(".previous_box_mobile")
const nextBoxMobile = document.querySelector(".next_box_mobile")
// variables tragetting the item picked span.
const itemPicked = document.querySelectorAll("#item_picked")[2]
const cartIconPicked = document.querySelectorAll("#item_picked")[0]
const itemPickedInCart = document.querySelectorAll("#item_picked")[1]
const cartBoxItems = document.querySelector(".cart_box_items")
//thumbnails pictures
const thumbnailPictures = document.querySelectorAll(".thumbnail_box")
//modals
const modalWindow = document.querySelector(".modal_window")
const modalBox = document.querySelector(".modal_box")
//images object
const sliderImages = {
   image1 : "./images/image-product-1.jpg",
   image2 : "./images/image-product-2.jpg",
   image3 : "./images/image-product-3.jpg",
   image4 : "./images/image-product-4.jpg",
}
//primary photo box holder
const modalImageHolder = document.querySelector("#modal_primary_photo")
//mobile photo box holder
const mobileImageHolder = document.querySelector("#mobile_photo")



 //to trigger the cart dropdown.
 cartIcon.addEventListener("click", () => {
     cartBox.classList.toggle("cart_disappear")
 })

 //to delete the cart_indicator_items
function deleteItems(){
     cartIndicatorItems.remove()
     cartIndicatorEmpty.style = "display : block;"
     cartNumber.style.display = "none"
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
      cartNumber.style.display = "block"
 }

 addToCartButton.addEventListener("click", addItems)

 //focus on thumbnail picture when clicked and remove focus when clicked again 
    thumbnailPictures.forEach((picture) => {
        picture.addEventListener("click", () => {
           picture.classList.toggle("thumbnail_focus")
        })
    })

//To open the modal 
 thumbnailPictures.forEach((picture) => {
        picture.addEventListener("dblclick", () => {
           modalWindow.style.display = "flex"
        })
    })
 
 //To close the modal
 function closeModal(){
   modalWindow.style.display = "none"
 }
 closeModalButton.addEventListener("click", closeModal)

 //To close the modal by clicking the background
modalWindow.addEventListener("click", (e) => {
  if(e.target === modalWindow){
   modalWindow.style.display = "none"
  }
})
//to close the modal by clicking Escape key
document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
      modalWindow.style.display = "none"
    }
})

// By clicking the next and previous button, the images change on the primary photo box.
const counterText = document.querySelector(".counter_text")
counterText.style = "font-size: 22px;"
let counterIndex = 0;

const objectSliderImages = Object.values(sliderImages)
const totalImages = objectSliderImages.length

function updateSlider(){
   modalImageHolder.src = objectSliderImages[counterIndex]
   mobileImageHolder.src = objectSliderImages[counterIndex]
   counterText.innerText = counterIndex + 1;
}

function nextButton(){
  counterIndex++
  if(counterIndex >= totalImages){
   counterIndex = 0
  }

  updateSlider()
}

function previousButton(){
   counterIndex--
   if(counterIndex < 0){
      counterIndex = totalImages - 1
   }

   updateSlider()
}

nextBox.addEventListener("click", nextButton)
previousBox.addEventListener("click", previousButton)

previousBoxMobile.addEventListener("click", previousButton)
nextBoxMobile.addEventListener("click", nextButton)

updateSlider()

//hamburger menu functionality
const hamburgerMenuIcon = document.querySelector("#hamburger_menu_icon")
const closeMenuIcon = document.querySelector("#close_menu_icon")
const mainMenuBox = document.querySelector(".main_menu_box")

   hamburgerMenuIcon.addEventListener("click", () => {
      mainMenuBox.style.display = "block"
   })
   closeMenuIcon.addEventListener("click", () => {
      mainMenuBox.style.display = "none"
   })


// 
   