import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (value === 'AC') {
      setDisplay('0');
    } 
  
      
     else if (value === 'Del') {
      setDisplay(display.length === 1 ? '0' : display.slice(0, -1));
      }
       else if (value === '=') {

        setDisplay(eval(display).toString());
      }
      else {
        setDisplay(display === '0' ? value : display + value);
      }
    };
  
    const buttons = [
      'AC', 'Del', '%', '/',
      '7', '8', '9', '*',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '00', '0', '.', '='
    ];

    return (
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          {buttons.map((button, index) => (
            <button key={index} onClick={() => handleClick(button)}>
              {button}
            </button>
          ))}
        </div>
      </div>
    );
  };

  export default App;
