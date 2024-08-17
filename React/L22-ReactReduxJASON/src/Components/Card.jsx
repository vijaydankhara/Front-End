import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const Card = () => {
  const productData = useSelector((state) => state.cart);
  console.log("HomeData", productData);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART" });
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="object-cover h-72 w-72"
          src="https://theobroma.in/cdn/shop/files/RedVelvetCakehalfkg.jpg?v=1711125747"
          alt="product"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">
          Heart Red Velvet Cake
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">$449</span>
            <span className="text-lg text-slate-900 line-through mx-2">$899</span>
          </p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                aria-hidden="true"
                className="h-5 w-5 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-600 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3765fd] duration-700"
          >
            <FontAwesomeIcon icon={faCartPlus} className="mr-2 h-6 w-6" />
            Add to Cart
          </button>
          <button className="flex items-center justify-center rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3765fd] duration-700">
            <FontAwesomeIcon icon={faHeart} className="mr-2 h-6 w-6" />
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
