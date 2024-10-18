import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy_cake, buy_choco } from '../rudux/Action';

const CakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCake);
  const numOfChocos = useSelector((state) => state.numOfChoco);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold">Vijay Store</h1>
        <div className="space-y-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Cakes:</span> <span>{numOfCakes}</span>
            <button 
              className={`ml-4 px-4 py-2 rounded text-white ${numOfCakes === 0 ? 'bg-[#ff0000] cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
              onClick={() => numOfCakes > 0 && dispatch(buy_cake())}
              disabled={numOfCakes === 0}
            >
              {numOfCakes === 0 ? 'Out of Stock' : 'Buy Cake'}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Chocos: </span>  <span>{numOfChocos}</span>
            <button 
              className={`ml-4 px-4 py-2 rounded text-white ${numOfChocos === 0 ? 'bg-[#ff0000] cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'}`}
              onClick={() => numOfChocos > 0 && dispatch(buy_choco())}
              disabled={numOfChocos === 0}
            >
              {numOfChocos === 0 ? 'Out of Stock' : 'Buy Choco'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeContainer;
