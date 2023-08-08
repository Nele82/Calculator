// V A R I A B L E S

// Numbers & operators
const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')
const addOps = document.querySelectorAll('[data-add]')
const equals = document.querySelector('[data-equals]')
const deleteAdigit = document.querySelector('[data-delete]')
const allClear = document.querySelector('[data-all-clear]')

// Display
let upper = document.querySelector("#upper")
let lower = document.querySelector("#lower")

// Operands
let addDigit = ''
let digit = ''
let operand = undefined

// F U N C T I O N S 

function addNumber(num){
    if(num === '.' && digit.includes('.')) return    
    if(digit.length <= 20) {
        digit = digit.toString() + num.toString()
    } else return
}

function getDigit (n) {
    const numDigit = n.toString()
    const decLeft = parseFloat(numDigit.split('.')[0])
    const decRight = numDigit.split('.')[1]
    let showDigit
    if (isNaN(decLeft)) {
        showDigit = ''
    } else {
        showDigit = decLeft.toLocaleString('en-US')
    }
    if (decRight != null) {
        return `${showDigit}.${decRight}`
    } else {
        return showDigit
    }
}

function displayNumber () {
    lower.innerText = getDigit(digit)
    if (operand != null) {
        upper.innerText = `${getDigit(addDigit)} ${operand}`
    } else {
        upper.innerText = ''
    }
}

function basicCalc() {
    let compute
    const prev = parseFloat(addDigit)
    const current = parseFloat(digit)
    if(isNaN(prev) || isNaN(current)) return
        switch (operand) {
            case '+': 
                compute = prev + current
                break        
            case '-': 
                compute = prev - current
                break        
            case 'X': 
                compute = prev * current
                break        
            case '÷': 
                compute = prev / current
                break              
            case '^': 
                compute = Math.pow(prev,current)
                break              
            default:
                return
        }
    digit = compute
    operand = undefined
    addDigit = ''
}

function addCalc(str){
    if (str == '√') {
        digit = Math.sqrt(digit)
    } else  {
        digit = digit/100
    }
}

function selectCalc (oper) {
    if(digit === '') return
    if(addDigit !== '') {
        calc()
    }
    operand = oper
    addDigit = digit
    digit = ''
}

function clearAll() {
    addDigit = ''
    digit = ''
    operand = undefined
}

function removeAdigit() {
    digit = digit.toString().slice(0, -1)
}

// E V E N T S  &  H A N D L E R S

// Display numbers
numbers.forEach( num => {
    num.addEventListener('click', () => {
        addNumber(num.innerText)
        displayNumber()
    })
})

// Choose operation
operations.forEach( op => {
    op.addEventListener('click', () => {
        selectCalc(op.innerText)
        displayNumber()
    })
})

// Basic calculation
equals.addEventListener('click', () => {
    basicCalc()
    displayNumber()
})

// Additional calculations
addOps.forEach(addop => {
    addop.addEventListener('click', (e) => {
        addCalc(e.target.innerText)
        displayNumber()
    })
})

// Clear all
allClear.addEventListener('click', () => {
    clearAll()
    displayNumber()
})

// Delete one digit
deleteAdigit.addEventListener('click', () => {
    removeAdigit()
    displayNumber()
})




