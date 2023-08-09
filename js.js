// M O D E L

const model = {
    // Operands
    addDigit: '',
    digit: '',
    operand: undefined
}

// V I E W

const view = {

   // Numbers & operators
    numbers: document.querySelectorAll('[data-number]'),
    operations: document.querySelectorAll('[data-operation]'),
    addOps: document.querySelectorAll('[data-add]'),
    equals: document.querySelector('[data-equals]'),
    deleteAdigit: document.querySelector('[data-delete]'),
    allClear: document.querySelector('[data-all-clear]'),

    // Display
    upper: document.querySelector("#upper"),
    lower: document.querySelector("#lower"), 

    listen: function () {

        // Display numbers
        this.numbers.forEach( num => {
            num.addEventListener('click', () => {
                controller.addNumber(num.innerText)
                controller.displayNumber()
            })
        })

        // Choose operation
        this.operations.forEach( op => {
            op.addEventListener('click', () => {
                controller.selectCalc(op.innerText)
                controller.displayNumber()
            })
        })

        // Basic calculation
        this.equals.addEventListener('click', () => {
            controller.basicCalc()
            controller.displayNumber()
        })

        // Additional calculations
        this.addOps.forEach(addop => {
            addop.addEventListener('click', (e) => {
                controller.addCalc(e.target.innerText)
                controller.displayNumber()
            })
        })

        // Clear all
        this.allClear.addEventListener('click', () => {
            controller.clearAll()
            controller.displayNumber()
        })

        // Delete one digit
        this.deleteAdigit.addEventListener('click', () => {
            controller.removeAdigit()
            controller.displayNumber()
        })
    }
}

// C O N T R O L L E R

const controller = {

    addNumber: function (num) {
        if(num === '.' && model.digit.includes('.')) return    
        if(model.digit.length <= 20) {
            model.digit = model.digit.toString() + num.toString()
        } else return
    },
    
    getDigit: function (n) {
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
    },

    displayNumber: function () {
        view.lower.innerText = this.getDigit(model.digit)
        if (model.operand != null) {
            view.upper.innerText = `${this.getDigit(model.addDigit)} ${model.operand}`
        } else {
            view.upper.innerText = ''
        }
    },

    basicCalc: function () {
        let compute
        const prev = parseFloat(model.addDigit)
        const current = parseFloat(model.digit)
        if(isNaN(prev) || isNaN(current)) return
            switch (model.operand) {
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
        model.digit = compute
        model.operand = undefined
        model.addDigit = ''
    },

    addCalc: function (str) {
        if (str == '√') {
            model.digit = Math.sqrt(model.digit)
        } else  {
            model.digit = model.digit/100
        }
    },

    selectCalc: function (oper) {
        if(model.digit === '') return
        if(model.addDigit !== '') {
            calc()
        }
        model.operand = oper
        model.addDigit = model.digit
        model.digit = ''
    },
    
    clearAll: function () {
        model.addDigit = ''
        model.digit = ''
        model.operand = undefined
    },
    
    removeAdigit: function () {
        model.digit = model.digit.toString().slice(0, -1)
    },

    start: view.listen()
}

controller.start