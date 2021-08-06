import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import './Counter.css';

const Counter = () => {
  const [customValue, setCustomValue] = useState(0);
  const counter = useCounter(customValue);

  const onChangeHandle = e => {
    setCustomValue(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <h1>{counter.counter}</h1>
      </div>

      <div className="btns-container">
        <button className="btn red-button" onClick={counter.customDecrement}>
          -{customValue}
        </button>
        <button className="btn red-button" onClick={counter.decrement}>
          -
        </button>
        <button className="btn green-button" onClick={counter.increase}>
          +
        </button>
        <button className="btn green-button" onClick={counter.customIncrease}>
          +{customValue}
        </button>
      </div>

      <div className="more-options">
        <input
          className="input-custom-value "
          type="number"
          onChange={e => onChangeHandle(e)}
          placeholder="Enter your custom counter"
        />
        <button className="btn blue-button" onClick={counter.resetCounter}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
