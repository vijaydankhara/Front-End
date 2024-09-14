import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  remove_cart,
  empty_cart,
  increment,
  decrement,
} from "../redux/reduxCart/CartAction";
import { add_wishlist } from "../redux/reduxWishlist/WishlistAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faHeart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const data1 = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [removingId, setRemovingId] = useState(null);

  const handleRemoveClick = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      dispatch(remove_cart(id));
      setRemovingId(null);
    }, 1000);
  };

  const handleAddToWishlist = (item) => {
    dispatch(add_wishlist(item)); // Add to wishlist
    dispatch(remove_cart(item.id)); // Remove from cart
  };

  // INCREMENT PRODUCT
  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  // DECREMENT PRODUCT
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  return (
    <div className="container mx-auto">
      <div className="mb-2 pr-2 text-right">
        <button onClick={() => dispatch(empty_cart())} className="btn">
          Empty Cart
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        {data1.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Image</th>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Quantity</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((item) => (
                <tr key={item.id} className="text-center border-t">
                  <td className="py-4 px-4 border">
                    <img
                      src={item.image}
                      alt="cartimage"
                      className="h-auto w-16 mx-auto"
                    />
                  </td>
                  <td className="py-4 px-4 border">{item.title}</td>
                  <td className="py-4 px-4 border">${item.price}</td>
                  <td className="py-4 px-4 border">
                    <div className="flex justify-center items-center space-x-2">
                      <button onClick={() => handleDecrement(item.id)}>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-xl cursor-pointer"
                        />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)}>
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="text-xl cursor-pointer"
                        />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4 border">
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => handleRemoveClick(item.id)}
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className={`text-2xl ${
                            removingId === item.id ? "animate-spin" : ""
                          }`}
                        />
                      </button>
                      <button
                        onClick={() => handleAddToWishlist(item)}
                        className="p-2 text-blue-500 hover:text-red-500"
                      >
                        <FontAwesomeIcon icon={faHeart} className="text-2xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center h-[500px] ">
            <a href="" to="/">
              <img
                // src="https://zoe.menu/assets/images/empty_cart.gif"
                src=" https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif"
                alt="Empty Cart"
                className="object-cover"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
