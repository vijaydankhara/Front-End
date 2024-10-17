import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Increment count
    setCount(count + 1); 
  };

  const handleDecrement = () => {
    // Decrement count
    setCount(count > 0 ? count - 1 : 0); 
  };

  return (
    <div>
      <h1 className='p-2 bg-indigo-400 text-white text-center'>Counter Example</h1>
      <div>
        <h2 className='ml-5'>Current Count: {count}</h2>
        <button 
          onClick={handleIncrement} 
          className="mt-2 ml-5 p-2 bg-green-500 hover:bg-green-800 text-white rounded">
          Increment
        </button>
        <button 
          onClick={handleDecrement} 
          className="mt-2 ml-5 p-2 bg-red-500 hover:bg-red-800 text-white rounded">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;