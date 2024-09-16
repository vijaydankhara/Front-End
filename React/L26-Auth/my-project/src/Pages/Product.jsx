import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_cart } from "../redux/reduxCart/CartAction";
import { add_wishlist, remove_wishlist } from "../redux/reduxWishlist/WishlistAction";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Product = () => {
  const [product, setProduct] = useState([]);

  // Fetch products from API
  useEffect(() => {
    axios.get("http://localhost:3000/ecoproduct").then((res) => {
      setProduct(res.data);
    });
  }, []);

  const dispatch = useDispatch();
  
  // Access the wishlist from Redux store
  const wishlist = useSelector((state) => state.wishlist);

  // Check if the item is in the wishlist
  const isInWishlist = (item) => wishlist.some((wishlistItem) => wishlistItem.id === item.id);

  const handleWishlistToggle = (item) => {
    if (isInWishlist(item)) {
      dispatch(remove_wishlist(item)); // Remove from wishlist
    } else {
      dispatch(add_wishlist(item)); // Add to wishlist
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center mt-5 gap-2">
        {product.map((item) => {
          return (
            <div key={item.id}>
              <div className="w-[300px] h-[400px] rounded-md border shadow-md flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[200px] w-full object-cover rounded-t-md"
                />
                <div className="p-4 flex-grow">
                  {/* Title and Wishlist Icon in One Line */}
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold line-clamp-1">
                      {item.title}
                    </h1>
                    <button
                      onClick={() => handleWishlistToggle(item)}
                      className="p-2 rounded-full transition duration-300"
                    >
                      <FontAwesomeIcon
                        className="text-2xl"
                        icon={isInWishlist(item) ? faHeartSolid : faHeartRegular}
                        style={{ color: isInWishlist(item) ? "red" : "black" }}
                      />
                    </button>
                  </div>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between p-4">
                  <button
                    onClick={() => dispatch(add_cart(item))}
                    type="button"
                    className="px-4 py-2 rounded-full bg-[#1e3cff] hover:bg-[#ff0000] duration-700 text-white"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Product
