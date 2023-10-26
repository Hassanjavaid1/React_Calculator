import React, { useEffect, useState } from "react";
import "./CSS/Calculator.css";
export default function Calculator() {
    const [input,setinput] = useState('')
    const handleOnClick = (value) => {
       if(value == '='){
            // Evaluate the expression and update the input state with the result
            try {
                setinput(eval(input).toString());
            } catch (error) {
                // Handle error if the expression is invalid
                setinput('Error');
            }

        }else if(value == 'AC'){
            setinput('')
        }
        else{
            setinput(prevInput => prevInput + value);
            
  }
    }
  return (
    <>
      <div className="calculator">
        <input type="text" id="input" value={input} readOnly/>
        <div className="row">
          <button className="btn" onClick = {() => handleOnClick('1')}>1</button>
          <button className="btn" onClick = { () =>handleOnClick('2')}>2</button>
          <button className="btn" onClick = {() =>handleOnClick('3')}>3</button>
          <button className="btn" onClick = {() => setinput('')}>AC</button>
        </div>
        <div className="row">
          <button className="btn" onClick = {() => handleOnClick('4')}>4</button>
          <button className="btn" onClick = {() => handleOnClick('5')}>5</button>
          <button className="btn" onClick = {() => handleOnClick('6')}>6</button>
          <button className="btn" onClick = {() => handleOnClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="btn" onClick = {() => handleOnClick('7')}>7</button>
          <button className="btn" onClick = {() => handleOnClick('8')}>8</button>
          <button className="btn" onClick = {() => handleOnClick('9')}>9</button>
          <button className="btn" onClick = {() => handleOnClick('-')}>-</button>
        </div>
        <div className="row">
          <button className="btn" onClick = {() => handleOnClick('0')}>0</button>
          <button className="btn" onClick = {() => handleOnClick('*')}>X</button>
          <button className="btn" onClick = {() => handleOnClick('/')}>/</button>
          <button className="btn" onClick = {() => handleOnClick('=')}>=</button>
        </div>
      </div>
    </>
  );
}
