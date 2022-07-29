import React, { useState } from 'react'

//NEED TO CONVERT LINES 22-26 INTO STATE AND THEN UPDATE FUNCTIONS


export default function Calculator() {

// const output = document.querySelector('.output')

// const numberButtons = document.querySelectorAll('.number')
// const numberButtonArray = Array.from(numberButtons)
// const symbolButtons = document.querySelectorAll('.symbol')
// const symbolButtonArray = Array.from(symbolButtons)
// const modifierButtons = document.querySelectorAll('.modifier')
// const modifierButtonsArray = Array.from(modifierButtons)
// const allClear = document.querySelector('.clear-all')
// const clearButton = document.querySelector('.clear')

const [hideClear, setHideClear] = useState(true)
const [output, setOutput] = useState(0)


let screenDisplay = ''
const wholeNumbersInput = []
let previousSymbolPressed = ''
let calculationResult = ''
const buttonsPressed = []
console.log(buttonsPressed)
// numberButtonArray.forEach(button => {
//     button.addEventListener('click', () => {
//         screenDisplay += button.value
//         output.innerText = screenDisplay 
//         buttonsPressed.unshift(button) 
//         allClear.classList.add('hide')
//         clearButton.classList.remove('hide')
//     })
// })

const handleNumber = (e) => {
  const button = e.target
  screenDisplay += e.target.value
  setOutput(screenDisplay) 
  buttonsPressed.unshift(button) 
  setHideClear(false)
  // allClear.classList.add('hide')
  // clearButton.classList.remove('hide')
}

// symbolButtonArray.forEach(button => {
//     button.addEventListener('click', () => {
//         const previousButton = buttonsPressed[0]
//         const previousButtonCheck = previousButton.classList.contains('symbol')
//         if(!previousButtonCheck) {
//             const wholeNumber = parseFloat(screenDisplay)
//             wholeNumbersInput.unshift(wholeNumber)
//             console.log(screenDisplay)
//             console.log(wholeNumbersInput)
//             screenDisplay = ''

//             if(previousSymbolPressed === '+') {
//                 calculationResult =  wholeNumbersInput[1] + wholeNumbersInput[0]
//                 wholeNumbersInput.unshift(calculationResult)
//                 output.innerText = calculationResult
//             }
//             if(previousSymbolPressed === '-') {
//                 calculationResult =  wholeNumbersInput[1] - wholeNumbersInput[0]
//                 wholeNumbersInput.unshift(calculationResult)
//                 output.innerText = calculationResult
//             }
//             if(previousSymbolPressed === 'X') {
//                 calculationResult =  wholeNumbersInput[1] * wholeNumbersInput[0]
//                 wholeNumbersInput.unshift(calculationResult)
//                 output.innerText = calculationResult
//             }
//             if(previousSymbolPressed === '/') {
//                 calculationResult =  wholeNumbersInput[1] / wholeNumbersInput[0]
//                 wholeNumbersInput.unshift(calculationResult)
//                 output.innerText = calculationResult
//             }
//             if(previousSymbolPressed === '%') {
//                 calculationResult =  wholeNumbersInput[0] / 100
//                 wholeNumbersInput.unshift(calculationResult)
//                 output.innerText = calculationResult
//             }
//         }
//         previousSymbolPressed = button.value   
//         buttonsPressed.unshift(button)     
//     })
// })

const handleSymbol = (e) => {
  const previousButton = buttonsPressed[0]
  console.log(previousButton)
  const previousButtonCheck = previousButton.classList.contains('symbol')

  if(!previousButtonCheck) {
      const wholeNumber = parseFloat(screenDisplay)
      wholeNumbersInput.unshift(wholeNumber)
      console.log(screenDisplay)
      console.log(wholeNumbersInput)
      screenDisplay = ''

      if(previousSymbolPressed === '+') {
          calculationResult =  wholeNumbersInput[1] + wholeNumbersInput[0]
          wholeNumbersInput.unshift(calculationResult)
          setOutput(calculationResult)
      }
      if(previousSymbolPressed === '-') {
          calculationResult =  wholeNumbersInput[1] - wholeNumbersInput[0]
          wholeNumbersInput.unshift(calculationResult)
          setOutput(calculationResult)
      }
      if(previousSymbolPressed === 'X') {
          calculationResult =  wholeNumbersInput[1] * wholeNumbersInput[0]
          wholeNumbersInput.unshift(calculationResult)
          setOutput(calculationResult)
      }
      if(previousSymbolPressed === '/') {
          calculationResult =  wholeNumbersInput[1] / wholeNumbersInput[0]
          wholeNumbersInput.unshift(calculationResult)
          setOutput(calculationResult)
      }
      if(previousSymbolPressed === '%') {
          calculationResult =  wholeNumbersInput[0] / 100
          wholeNumbersInput.unshift(calculationResult)
          setOutput(calculationResult)
      }
    }
    // previousSymbolPressed = button.value   
    previousSymbolPressed = e.target.value   
    buttonsPressed.unshift(e.target)     
}

// modifierButtonsArray.forEach(button => {
//     button.addEventListener('click', () => {
//         const buttonValue = button.value
//         if(buttonValue === '%'){ 
//             screenDisplay = screenDisplay / 100
//             output.innerText = screenDisplay
//         }
//         if(buttonValue === '+/-') {
//             screenDisplay = -screenDisplay
//             output.innerText = screenDisplay
//         }
//         if(buttonValue === '.') {
//             screenDisplay += button.value
//             output.innerText = screenDisplay
//         }
//     })
// })

const handleModifier = (e) => {
  const buttonValue = e.target.value
  if(buttonValue === '%'){ 
      screenDisplay = screenDisplay / 100
      setOutput(screenDisplay)
  }
  if(buttonValue === '+/-') {
      screenDisplay = -screenDisplay
      setOutput(screenDisplay)
  }
  if(buttonValue === '.') {
      screenDisplay += e.target.value
      setOutput(screenDisplay)
  }
}

// allClear.addEventListener('click', () => {
//     screenDisplay = ''
//     previousSymbolPressed = ''
//     wholeNumbersInput.length = 0
//     calculationResult = ''
//     buttonsPressed.length = 0
//     output.innerText = 0
// })

const handleAllClear = () => {
  screenDisplay = ''
  previousSymbolPressed = ''
  wholeNumbersInput.length = 0
  calculationResult = ''
  buttonsPressed.length = 0
  setOutput(0)
}

// clearButton.addEventListener('click', () => {
//     screenDisplay = ''
//     output.innerText = 0
//     allClear.classList.remove('hide')
//     clearButton.classList.add('hide')
// })

const handleClear = () => {
  screenDisplay = ''
  setOutput(0)
  setHideClear(true)
}

  return (
    <div className="app">
        <h1>Calculator</h1>
        <div className="output-screen">
            <span className="output">{output}</span>
        </div>
        <div class="calcbuttons">
            { hideClear && <button className={`key clear-all`} onClick={handleAllClear}>AC</button>}
            { !hideClear && <button className={`key clear`} onClick={handleClear}>C</button>}
            <button className="key modifier" value="%" onClick={handleModifier}>%</button>
            <button className="key modifier" value="+/-" onClick={handleModifier}>+/-</button>
            <button className="key symbol" value="/" onClick={handleSymbol}>/</button>
            <button className="key number" value="7" onClick={handleNumber}>7</button>
            <button className="key number" value="8" onClick={handleNumber}>8</button>
            <button className="key number" value="9" onClick={handleNumber}>9</button>
            <button className="key symbol" value="X" onClick={handleSymbol}>X</button>
            <button className="key number" value="4" onClick={handleNumber}>4</button>  
            <button className="key number" value="5" onClick={handleNumber}>5</button>
            <button className="key number" value="6" onClick={handleNumber}>6</button>
            <button className="key symbol" value="-" onClick={handleSymbol}>-</button>
            <button className="key number" value="1" onClick={handleNumber}>1</button>
            <button className="key number" value="2" onClick={handleNumber}>2</button>
            <button className="key number" value="3" onClick={handleNumber}>3</button>
            <button className="key symbol" value="+" onClick={handleSymbol}>+</button>
            <button className="key key-zero number" value="0" onClick={handleNumber}>0</button>
            <button className="key modifier" value="." onClick={handleModifier}>.</button>
            <button className="key symbol" value="=" onClick={handleSymbol}>=</button>
        </div>
    </div>
  )
}
