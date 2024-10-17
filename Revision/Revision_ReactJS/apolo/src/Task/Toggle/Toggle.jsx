import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div>
      <h1 className='p-2 bg-pink-400 text-white text-center'>Toggle Example</h1>
      <button
        onClick={handleToggle}
        className={`mt-4 ml-5 p-2 rounded ${isToggled ? 'bg-green-500' : 'bg-red-500'} text-white`}
      >
        {isToggled ? 'On' : 'Off'}
      </button>
      <p className="mt-2 ml-5">The toggle is <p>{isToggled ? 'On' : 'Off'}</p></p>
    </div>
  );
}

export default ToggleButton;