// VARIABLES

// Numbers
let btn = document.getElementById('left').children
let dot = document.querySelector("#right > button:nth-child(10)")
let string
let arr = []
let counter = 0

// Display
let upper = document.querySelector("#upper")
let lower = document.querySelector("#lower")

// FUNCTIONS, EVENTS & HANDLERS

// Decimal handler
dot.addEventListener('click', ()=> {
    if(counter < 1 && arr.length >= 1) {
        arr.push(dot.innerHTML)
        counter++
    }
})

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener("click", ()=> {

    // Display numbers    

    arr.push(btn[i].innerHTML)
    
    string = arr.join('')
    })
}





