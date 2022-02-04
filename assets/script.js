let itemTotal = 1

let quantity = document.querySelector(".total-quantity")

let buttonUp = document.getElementById('quantity-up')
buttonUp.addEventListener('click',function(){
    itemTotal = itemTotal + 1
    quantity.textContent = "Quantity:" + itemTotal
})

let buttonDown = document.getElementById('quantity-down')
buttonDown.addEventListener('click',function(){
    if(itemTotal > 1){
        itemTotal = itemTotal - 1
        quantity.textContent = "Quantity:" + itemTotal
    }
})