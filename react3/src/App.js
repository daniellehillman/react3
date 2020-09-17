import React, {useState} from 'react';

// const App = () => {

//   // declare your state 
//   const [countState, setCountState] = useState ({
//     count: 0,
//     message: 'Hello'
//   })

//   countState.handleBtnClickUp = () => {
//     setCountState({ ...countState, count: countState.count + 1})
//   }
//   countState.handleBtnClickDown = () => {
//     setCountState({ ...countState, count: countState.count - 1})
//   }
//   countState.handleBtnClickReset = () => {
//     setCountState({ ...countState, count: 0})
//   }

//  return (
//    <>
//    <h1>Count: {countState.count}</h1>
//    <button onClick= {countState.handleBtnClickUp}>Count up</button>
//    <button onClick= {countState.handleBtnClickDown}>Count down</button>
//    <button onClick= {countState.handleBtnClickReset}>Reset</button>
//    </>
//  )
// }

// export default App

const App = () => {

  const [calcState, setCalcState] = useState({
    firstNum: '',
    secondNum: '',
    operator: '',
    result: ''
  })

  calcState.handleAddDigit = event => {
    if (calcState.operator.length === 0) {
      setCalcState({ ...calcState, firstNum: calcState.firstNum + event.target.value })
    } else {
      setCalcState({ ...calcState, secondNum: calcState.secondNum + event.target.value})
    }
  }
  calcState.handleOperator = event => {
    setCalcState({ ...calcState, operator: event.target.value })
  }
  calcState.handleResult = () => {
    let result = ''
    let firstNum = parseInt(calcState.firstNum)
    let secondNum = parseInt(calcState.secondNum)

    switch (calcState.operator) {
      case '+':
        result = `${firstNum + secondNum}` 
        break
      case '-':
        result = `${firstNum - secondNum}`
        break
      case 'x':
        result = `${firstNum * secondNum}`
        break
      case '/':
        result = `${firstNum / secondNum}`
        break
      default:
        break
    }

    setCalcState({ ...calcState, result })
  }

  calcState.handleClear = () => {
    setCalcState({ ...calcState, firstNum: '', secondNum: '', operator: '', result: '' })
  }

  return (
    <>
      <p>
        <button value={0} onClick={calcState.handleAddDigit}>0</button>
        <button value={1} onClick={calcState.handleAddDigit}>1</button>
        <button value={2} onClick={calcState.handleAddDigit}>2</button>
        <button value={3} onClick={calcState.handleAddDigit}>3</button>
        <button value={4} onClick={calcState.handleAddDigit}>4</button>
        <button value={5} onClick={calcState.handleAddDigit}>5</button>
        <button value={6} onClick={calcState.handleAddDigit}>6</button>
        <button value={7} onClick={calcState.handleAddDigit}>7</button>
        <button value={8} onClick={calcState.handleAddDigit}>8</button>
        <button value={9} onClick={calcState.handleAddDigit}>9</button>
      </p>
      <p>
        <button value="+" onClick={calcState.handleOperator}>+</button>
        <button value="-" onClick={calcState.handleOperator}>-</button>
        <button value="x" onClick={calcState.handleOperator}>x</button>
        <button value="/" onClick={calcState.handleOperator}>/</button>
      </p>
      <p>
        <button onClick={calcState.handleResult}>=</button>
        <button onClick={calcState.handleClear}>RESET</button>
      </p>
  <h1>{calcState.firstNum} {calcState.operator} {calcState.secondNum} {calcState.result.length > 0 ? `= ${calcState.result}` : ''}</h1>
    </>
  )
}

export default App
