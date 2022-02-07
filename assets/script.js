let total = 1
let itemQuantity = document.querySelector('.total-quantity')
let totalPrice = document.querySelector(`.total-price`)

let btnUp = document.querySelector('#quantity-up')
btnUp.addEventListener('click',function(){
    total = total + 1
    itemQuantity.textContent = `Quantity: ${total}`
})

let btnDown = document.querySelector('#quantity-down')
btnDown.addEventListener('click',function(){
    if(total > 1){
        total = total -1
        itemQuantity.textContent = `Quantity: ${total}`
    }    
})

let btnRemove = document.querySelector(`.remove`)
btnRemove.addEventListener(`click`,function(){
    document.querySelector(`.cart-item`).remove()
})



// let itemTotal = 1

// let quantity = document.querySelector(".total-quantity")

// let buttonUp = document.getElementById('quantity-up')
// buttonUp.addEventListener('click',function(){
//     itemTotal = itemTotal + 1
//     quantity.textContent = "Quantity:" + itemTotal
// })

// let buttonDown = document.getElementById('quantity-down')
// buttonDown.addEventListener('click',function(){
//     if(itemTotal > 1){
//         itemTotal = itemTotal - 1
//         quantity.textContent = "Quantity:" + itemTotal
//     }
// })

// let removeBtn = document.querySelector('.remove')
// removeBtn.addEventListener('click', function(){
//     document.querySelector('.cart-item').remove()
// })