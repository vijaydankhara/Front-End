import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove_cart, empty_cart } from "../redux/reduxCart/CartAction";
import { add_wishlist } from "../redux/reduxWishlist/WishlistAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className="container mx-5">
      <div>
        <button onClick={() => dispatch(empty_cart())} className="btn ml-5">
          Empty Cart
        </button>
      </div>

      <div className="flex justify-center items-center h-lvh text-center">
        {data1.length > 0 ? (
          <table className="table-fixed w-[500px]">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((item) => {
                return (
                  <tr className="border" key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt="cartimage"
                        className="h-auto w-16"
                      />
                    </td>
                    <td className="">
                      <h2 className="text-wrap w-28 mx-auto">{item.title}</h2>
                    </td>
                    <td>
                      <p>${item.price}</p>
                    </td>
                    <td className="flex justify-center items-center gap-4">
                      <button
                        onClick={() => handleRemoveClick(item.id)}
                        className="p-2  rounded"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className={`text-[#000] hover:text-[#ff0000] text-2xl ${
                            removingId === item.id ? "animate-spin" : ""
                          }`}
                        />
                      </button>

                      {/* Add to Wishlist Button */}
                      <button
                        onClick={() => handleAddToWishlist(item)}
                        className="p-2  rounded"
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-[#343eff] hover:text-[#ff0000] text-2xl"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="w-screen h-screen object-cover">
          <img src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg" alt="" />
        
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
