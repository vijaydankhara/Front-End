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
        <h1 className="text-2xl font-bold">Redux Store</h1>
        <div className="space-y-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Cakes:</span> <span>{numOfCakes}</span>
            <button 
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => dispatch(buy_cake())}
            >
              Buy Cake
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Chocos:</span> <span>{numOfChocos}</span>
            <button 
              className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              onClick={() => dispatch(buy_choco())}
            >
              Buy Choco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeContainer;
