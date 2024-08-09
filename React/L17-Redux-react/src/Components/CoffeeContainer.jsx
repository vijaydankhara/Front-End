import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_coffee } from "../rudux/Index";

const CoffeeContainer = () => {
  const numOfCoffee = useSelector((state) => state.numOfCoffee);

  console.log(numOfCoffee);

  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="my-10 text-4xl">
        numOfCoffee:{" "}
        <span className="text-green-700 text-5xl">{numOfCakes}</span>
      </h1>
      <button
        className=" text-6xl rounded-full py-3 px-6 text-center bg-[#feaa2c] text-[#000] hover:bg-indigo-800 hover:text-[#fff]"
        onClick={() => dispatch(buy_coffee())}
      >
        Cake Decrement
      </button>
    </div>
  );
};

export default CoffeeContainer;
