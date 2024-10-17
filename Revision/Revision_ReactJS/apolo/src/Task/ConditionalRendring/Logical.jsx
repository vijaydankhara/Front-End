import React, { useState } from 'react';
import Turnary from './turnary';
import SwitchCase from './SwitchCase';
import CondiIfElse from './if-else';

const LogicalOp = () => {

  const [hideDetail, setHideDetail] = useState(true);

  return (
    <div>
      <h1 className='p-2 bg-sky-400 text-white text-center'>
        Logical && Conditional Rendering
      </h1>
      
      {/* Toggle Content */}
      <div>
        {!hideDetail && <p>Logical && Conditional Rendering using the logical operator</p>}
      </div>

      {/* Single Button for Toggling */}
      <button  className="mt-6 px-4 py-2 bg-orange-300 text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors duration-300" onClick={() => setHideDetail(!hideDetail)}>
        {hideDetail ? 'Show Details' : 'Hide Details'}
      </button>
   
    </div>
  );
};

export default LogicalOp;
