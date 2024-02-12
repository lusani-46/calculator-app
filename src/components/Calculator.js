import React, { useState } from 'react';
import '../styles/Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [input, setInput] = useState('');

  const handleNumberClick = (num) => {
    if (displayValue === '0' || input.includes('=')) {
      setDisplayValue(num);
      setInput(num);
    } else if (!displayValue.startsWith('0') || displayValue.includes('.')) {
      setDisplayValue(displayValue + num);
      setInput(input + num);
    }
  };

  const handleOperatorClick = (operator) => {
    if (!input.includes('=')) {
      setInput(input + operator);
      setDisplayValue(operator);
    }
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
      setInput(input + '.');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setInput('');
  };

  const handleEqualsClick = () => {
    if (!input.includes('=')) {
      try {
        const result = eval(input);
        setDisplayValue(isFinite(result) ? result.toString() : '0');
        setInput(input + '=' + result);
      } catch (error) {
        setDisplayValue('0');
        setInput('');
      }
    }
  };

  return (
    <div id="calculator-container">
      <div id="calculator">
        <div id="display">{displayValue}</div>
        <div className="buttons">
          <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
          <button id="one" onClick={() => handleNumberClick('1')}>1</button>
          <button id="two" onClick={() => handleNumberClick('2')}>2</button>
          <button id="three" onClick={() => handleNumberClick('3')}>3</button>
          <button id="four" onClick={() => handleNumberClick('4')}>4</button>
          <button id="five" onClick={() => handleNumberClick('5')}>5</button>
          <button id="six" onClick={() => handleNumberClick('6')}>6</button>
          <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
          <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
          <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
          <button id="add" onClick={() => handleOperatorClick('+')} className="operator">+</button>
          <button id="subtract" onClick={() => handleOperatorClick('-')} className="operator">-</button>
          <button id="multiply" onClick={() => handleOperatorClick('*')} className="operator">*</button>
          <button id="divide" onClick={() => handleOperatorClick('/')} className="operator">/</button>
          <button id="decimal" onClick={handleDecimalClick}>.</button>
          <button id="clear" onClick={handleClearClick}>AC</button>
          <button id="equals" onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
