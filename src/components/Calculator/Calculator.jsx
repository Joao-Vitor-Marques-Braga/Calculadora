import { useState } from 'react'
import { Box } from '@mui/material'
import './style.css'
import Container from '@mui/material/Container'

export const Calculator = () => {
  const[num, setNum] = useState(0);
  const[oldNum, setOldNum] = useState();
  const[operator, setOperator] = useState();

  function inputNum(e){
    var input = e.target.value
    setNum(num + input);
    if(num===0){
      setNum(input);
    } else{
      setNum(num + input)
    }
  }

  function clear(){
    setNum(0);
  }

  function porcentage(){
    setNum(num/100);
  }

  function invertValue(){
    if(num>0){
      setNum(-num)
    } else{
      setNum(Math.abs(num))
    }
  }

  function operatorHandler(e){
    var operatorInput = e.target.value
    setOperator(operatorInput);
    setOldNum(num);
    setNum(clear);
  }

  function calculate(){
    if(operator === "/"){
      setNum(oldNum / num);
    } else if(operator === "x"){
      setNum(oldNum * num);
    } else if(operator === "+"){
      setNum(oldNum + num);
    } else if(operator === "-"){
      setNum(oldNum - num);
    }
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className='wrapper'>
          <div className='result'>
            <h1>{num}</h1>
          </div>

          <button onClick={clear}>AC</button>
          <button onClick={invertValue}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button className='basics-operation' onClick={operatorHandler} value="/">/</button>

          <button className='numbers' onClick={inputNum} value={7}>7</button>
          <button className='numbers' onClick={inputNum} value={8}>8</button>
          <button className='numbers' onClick={inputNum} value={9}>9</button>
          <button className='basics-operation' onClick={operatorHandler} value="x">x</button>

          <button className='numbers' onClick={inputNum} value={4}>4</button>
          <button className='numbers' onClick={inputNum} value={5}>5</button>
          <button className='numbers' onClick={inputNum} value={6}>6</button>
          <button className='basics-operation' onClick={operatorHandler} value="-">-</button>

          <button className='numbers' onClick={inputNum} value={1}>1</button>
          <button className='numbers' onClick={inputNum} value={2}>2</button>
          <button className='numbers' onClick={inputNum} value={3}>3</button>
          <button className='basics-operation' onClick={operatorHandler} value="+">+</button>

          <button className='numbers' onClick={inputNum} value={0}>0</button>
          <button className='numbers'>,</button>
          <button onClick={calculate}>=</button>
        </div>
      </Container>
    </div>
  )
}