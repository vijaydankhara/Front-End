import React from "react";
import { useState } from "react";
import coffee from "../assets/coldCoffee.jpg";
import tea from "../assets/tea.webp";

export function Coffee() {
  return (
    <div>
      <h1 className="bg-[#45240a] 
      text-[#d2b094] rounded-full p-1 text-3xl m-5 text-center font font-bold font-serif">
        How To Make Iced Coffee
      </h1>

      <div className=" border-2 border-red-500 flex justify-between gap-5 bg-[#583417]">
        <div className="m-5">
          <h2 className="bg-yellow-300 px-5 py-2 rounded-full">Ingredients</h2>
          <ul className="my-5">
            <li className="my-3 text-[#d2b094] text-md">
              3 tablespoons warm water
            </li>
            <li className="my-3 text-[#d2b094] text-md">
              2 teaspoons instant coffee granules
            </li>
            <li className="my-3 text-[#d2b094] text-md">1 teaspoon sugar</li>
            <li className="my-3 text-[#d2b094] text-md">1 cup ice, or as needed</li>
            <li className="my-3 text-[#d2b094] text-md">
              6 fluid ounces cold milk
            </li>
          </ul>
        </div>

        <div className="m-5">
          <h2 className="bg-yellow-300 p-2 rounded-full text-center">
            Directions
          </h2>
          <ul className="mt-5">
            <li className="my-5 text-[#d2b094] text-md">
              1. Gather all ingredients.
            </li>
            <li className="my-5 text-[#d2b094] text-md">
              2. Combine warm water, instant coffee, and sugar in a sealable
              jar. Seal and shake until foamy.
            </li>
            <li className="my-5 text-[#d2b094] text-md">
              3. Pour into a glass full of ice; add milk. Adjust to taste if
              necessary.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Tea() {
    return (
      <div>
        <h1 className="bg-[#ddac84] 
        text-[#d2b094] rounded-full p-1 text-3xl m-5 text-center font font-bold font-serif">
          How To Make Iced Coffee
        </h1>
  
        <div className=" border-2 border-red-500 flex justify-between gap-5 bg-[#ddac84]">
          <div className="m-5">
            <h2 className="bg-yellow-300 px-5 py-2 rounded-full">Ingredients</h2>
            <ul className="my-5">
              <li className="my-3 text-[#d2b094] text-md">
                3 tablespoons warm water
              </li>
              <li className="my-3 text-[#d2b094] text-md">
                2 teaspoons instant coffee granules
              </li>
              <li className="my-3 text-[#d2b094] text-md">1 teaspoon sugar</li>
              <li className="my-3 text-[#d2b094] text-md">1 cup ice, or as needed</li>
              <li className="my-3 text-[#d2b094] text-md">
                6 fluid ounces cold milk
              </li>
            </ul>
          </div>
  
          <div className="m-5">
            <h2 className="bg-yellow-300 p-2 rounded-full text-center">
              Directions
            </h2>
            <ul className="mt-5">
              <li className="my-5 text-[#d2b094] text-md">
                1. Gather all ingredients.
              </li>
              <li className="my-5 text-[#d2b094] text-md">
                2. Combine warm water, instant coffee, and sugar in a sealable
                jar. Seal and shake until foamy.
              </li>
              <li className="my-5 text-[#d2b094] text-md">
                3. Pour into a glass full of ice; add milk. Adjust to taste if
                necessary.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

const Recips = () => {
  const [showRecips, setShowRecips] = useState(false);

  const buttonClick = () => {
    setShowRecips(!showRecips);
  };

  return (
    <div className=" grid grid-cols-2 bg-[#d2b094] p-10">
      <button
        className="bg-[#ddac84] text-center font font-bold"
        onClick={buttonClick}
      >
        <img src={coffee} alt="" className=" text-white text-3xl" />
        Click To Recips and Hiden{" "}
      </button>
      {showRecips && <Coffee />}

      {/* Tea */}
      <button
        className="bg-[#45240a] text-center font font-bold"
        onClick={buttonClick}
      >
        <img src={tea} alt="" className=" text-white text-3xl" />
        Click To Recips and Hiden{" "}
      </button>
      {showRecips && <Tea />}
    </div>
  );
};

export default Recips;
