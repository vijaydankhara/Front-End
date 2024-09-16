import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  empty_wishlist,
  remove_wishlist,
} from "../redux/reduxWishlist/WishlistAction";
import { increment, decrement } from "../redux/reduxCart/CartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {
  const dataWh = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const [removingId, setRemovingId] = useState(null);

  const handleRemoveClick = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      dispatch(remove_wishlist(id));
      setRemovingId(null);
    }, 1000);
  };



  return (
    <div className="container mx-auto ">
      <div className="mb-2 pr-2 text-right">
        <button onClick={() => dispatch(empty_wishlist())} className="btn">
          Empty Wishlist
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        {dataWh.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Image</th>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody className="container">
              {dataWh.map((item) => (
                <tr key={item.id} className="text-center border-t">
                  <td className="py-4 px-4 border">
                    <img
                      src={item.image}
                      alt="wishlistimage"
                      className="h-auto w-16 mx-auto"
                    />
                  </td>
                  <td className="py-4 px-4 border">
                    <h2 className="text-wrap w-28 mx-auto">{item.title}</h2>
                  </td>
                  <td className="py-4 px-4 border">
                    <p className="line-clamp-2">{item.description}</p>
                  </td>
                  
                  <td className="py-4 px-4 border">
                    <button
                      onClick={() => handleRemoveClick(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className={`text-2xl ${
                          removingId === item.id ? "animate-spin" : ""
                        }`}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center h-[500px]">
            <NavLink to="/">

              <img
                src="https://fashionsupreme1.wawbizstores.com/assets/images/wishlist.png"
                alt="Empty Wishlist Cart"
                className="object-cover"
              />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
