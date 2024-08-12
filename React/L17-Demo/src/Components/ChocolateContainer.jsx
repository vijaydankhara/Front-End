import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_chocolate } from "../rudux/Chocolate/ChocolateAction";

const ChocolateContainer = () => {
  const AvailableStocks = useSelector(
    (state) => state.chocolate.AvailableStock
  );
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
        <img
          src="https://www.jiomart.com/images/product/original/rvm3n43x94/galaxy-silky-smooth-cookie-crumble-chocolate-bar-loaded-with-milk-crumbly-cookie-pieces-with-100-cashback-50g-pack-of-8-product-images-orvm3n43x94-p599985261-4-202402202145.jpg?im=Resize=(420,420)"
          alt="Chocolate"
          className="vijay"
        />
        <div className="p-4">
          <h1 className="text-4xl mb-4">
          AvailableStocks:{" "}
            <span className="text-green-700 text-5xl">{AvailableStocks}</span>
          </h1>
          {AvailableStocks > 0 ? (
            <button
              className="text-2xl rounded-full py-2 px-4 text-center bg-[#feaa2c] text-[#000] hover:bg-indigo-800 hover:text-[#fff] transition-colors"
              onClick={() => dispatch(buy_chocolate())}
            >
              Buy Chocolate
            </button>
          ) : (
            <p className="w-full text-center py-2 bottom-0 text-2xl bg-[#ff0000] text-[#fff] font-serif rounded-b-full">Out Of Stocks</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChocolateContainer;
