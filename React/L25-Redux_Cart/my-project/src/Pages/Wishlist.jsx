import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  empty_wishlist,
  remove_wishlist,
} from "../redux/reduxWishlist/WishlistAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
    <div className="container mx-5">
      <div>
        <button onClick={() => dispatch(empty_wishlist())} className="btn ml-5">
          Empty Wishlist
        </button>
      </div>

      <div className="flex justify-center items-center h-lvh text-center">
        {dataWh.length > 0 ? (
          <table className="table-fixed w-[500px]">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {dataWh.map((item) => (
                <tr className="border" key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt="wishlistimage"
                      className="h-auto w-16"
                    />
                  </td>
                  <td>
                    <h2 className="text-wrap w-28 mx-auto">{item.title}</h2>
                  </td>
                  <td className="line-clamp-2">
                    <p>{item.description}</p>
                  </td>
                  <td>
                    <button
                      onClick={() => handleRemoveClick(item.id)}
                      className=""
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className={`text-[#000] hover:text-[#ff0000] text-2xl ${
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
          <div className="container m-2 empty-cart-message">
            <h2 className="text-wrap">Your Wishlist is Empty</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
