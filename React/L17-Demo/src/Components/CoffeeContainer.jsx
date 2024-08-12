import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy_coffee } from '../rudux/Index';


const CoffeeContainer = () => {
    const numOfCoffees = useSelector(state => state.coffee.numOfCoffee);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center p-4">
            <div className="bg-white cack shadow-lg rounded-lg overflow-hidden max-w-sm">
                <img 
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-shop-promotion-template-design-84599decbe3effcd2afc6d759ee33404_screen.jpg?ts=1704016959" 
                    alt="Coffee" 
                    className="vijay"
                />
                <div className="p-4">
                    <h1 className="text-4xl mb-4">
                        NumOfCoffees: <span className="text-green-700 text-5xl">{numOfCoffees}</span>
                    </h1>
                    {numOfCoffees > 0 ? (
                        <button 
                            className="text-2xl rounded-full py-2 px-4 text-center bg-[#feaa2c] text-[#000] hover:bg-indigo-800 hover:text-[#fff] transition-colors"
                            onClick={() => dispatch(buy_coffee())}
                        >
                            Buy Coffee 
                        </button>
                    ) : (
                        <p className="w-full text-center py-2 bottom-0 text-2xl bg-[#ff0000] text-[#fff] font-serif rounded-b-full">Out Of Stocks</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoffeeContainer;
