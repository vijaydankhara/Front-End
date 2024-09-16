import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_cart } from "../redux/reduxCart/CartAction";
import { add_wishlist, remove_wishlist } from "../redux/reduxWishlist/WishlistAction";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
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
              <div className="w-[300px] h-[320px] rounded-md border shadow-md flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[200px] w-full object-cover rounded-t-md"
                />
                <div className="p-4 flex-grow">
           
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold line-clamp-1">
                      {item.title}
                    </h1>
                   
                  </div>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
