import React from 'react';

const Counter = ({ count, timesClicked, onDecrement, onIncrement, onInputNumberChange, onInputNumber, numberInputted }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <div>Times the increment/decrement buttons have been clicked: <span>{timesClicked}</span></div>
          <input type="text" onChange={event => onInputNumberChange(event.target.value)} value={numberInputted}/><button onClick={onInputNumber}>Count Chnage Number</button>
        </div>
      </div>
    );
}


export default Counter;