import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import './Counter.css';

const Counter = () => {
  const [valueToIncremente, setValueToIncrement] = useState(0);
  const counter = useCounter(valueToIncremente);

  const onChangeHandle = e => {
    setValueToIncrement(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <h1>{counter.counter}</h1>
      </div>

      <div className="btns-container">
        <button className="btn red-button" onClick={counter.customDecrement}>
          -{valueToIncremente}
        </button>
        <button className="btn red-button" onClick={counter.decrement}>
          -
        </button>
        <button className="btn green-button" onClick={counter.increase}>
          +
        </button>
        <button className="btn green-button" onClick={counter.customIncrease}>
          +{valueToIncremente}
        </button>
      </div>

      <div>
        <input
          className="input-custom-value "
          type="number"
          onChange={e => onChangeHandle(e)}
          placeholder="Enter your custom counter"
        />
      </div>
    </div>
  );
};

export default Counter;
