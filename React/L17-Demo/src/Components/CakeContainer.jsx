import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy_cake } from '../rudux/Index';

const CakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCake); 
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                <img 
                    src="https://imgmediagumlet.lbb.in/media/2022/02/61f93800571b3d41eee88d0a_1643722752250.jpg?fm=webp&w=480&h=480&dpr=2" 
                    alt="Cake" 
                    className="vijay"
                />
                <div className="p-4">
                    <h1 className="text-4xl mb-4">
                        numOfCakes: <span className="text-green-700 text-5xl">{numOfCakes}</span>
                    </h1>
                    {numOfCakes > 0 ? (
                        <button 
                            className="text-2xl rounded-full py-2 px-4 text-center bg-[#feaa2c] text-[#000] hover:bg-indigo-800 hover:text-[#fff] transition-colors"
                            onClick={() => dispatch(buy_cake())}
                        >
                            Buy Cake
                        </button>
                    ) : (
                        <p className="text-xl text-red-500">Not available Cake</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CakeContainer;
