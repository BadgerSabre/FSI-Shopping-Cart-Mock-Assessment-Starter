let itemTotal = 1

let quantity = document.querySelector(".total-quantity")

let buttonUp = document.getElementById('quantity-up')
buttonUp.addEventListener('click',function(){
    itemTotal = itemTotal + 1
    quantity.textContent = itemTotal
})

let buttonDown = document.getElementById('quantity-down')
buttonDown.addEventListener('click',function(){
    itemTotal = itemTotal - 1
    quantity.textContent = itemTotal
})