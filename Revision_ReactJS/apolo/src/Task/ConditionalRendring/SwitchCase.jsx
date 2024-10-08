import React, { useState } from 'react';

const SwitchCase = () => {
  const [dayName, setDayName] = useState('Monday'); 
  const [inputValue, setInputValue] = useState('');

  let dayMessage;
  switch (dayName) {
    case 'Monday':
      dayMessage = <p>Start of the week! </p>;
      break;
    case 'Tuesday':
      dayMessage = <p>It's Tuesday! </p>;
      break;
    case 'Wednesday':
      dayMessage = <p>Midweek! Almost there.</p>;
      break;
    case 'Thursday':
      dayMessage = <p>Thursday is here.</p>;
      break;
    case 'Friday':
      dayMessage = <p>Friday fun day!</p>;
      break;
    case 'Saturday':
      dayMessage = <p>It's the weekend!</p>;
      break;
    case 'Sunday':
      dayMessage = <p>Sunday rest day! </p>;
      break;
    default:
      dayMessage = <p>Invalid day!!!</p>;
      break;
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSwitchDay = () => {
    setDayName(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1 className='p-2 bg-purple-600 text-white text-center'>Switch Case - Day of the Week</h1>
      <h3>Current Day: {dayName}</h3>
      <h3>Message: {dayMessage}</h3>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter day name (Monday)"
      />
      <br />
      <button  className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300" onClick={handleSwitchDay}>Switch Day</button>
    </div>
  );
};

export default SwitchCase;
