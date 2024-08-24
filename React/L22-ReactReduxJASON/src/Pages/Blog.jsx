import React, { useState, useEffect } from "react";

const Blog = () => {
  const [Vijay, dankhara] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/JummyIceCreem");
      const data = await response.json();
      dankhara(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-5xl text-center mt-5 font-serif">Viewed Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {Vijay.length > 0 ? (
          Vijay.map((item, index) => (
            <div
              className="border-2 border-black rounded-lg overflow-hidden shadow-lg"
              key={index}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl bg-black text-white text-center p-2 rounded-full font-serif font-semibold">
                  {item.title}
                </h2>
                <h3 className="text-lg mt-2 font-semibold">Price:- ${item.price}</h3>
                <p className="mt-2 text-gray-950">Description:- {item.description}</p>
                <p className="mt-2 text-gray-950">Category:- {item.category}</p>
                <p className="mt-2 text-gray-950">Rate:- {item.rating.rate}</p>
                <p className="mt-2 text-gray-950">Count:- {item.rating.count}</p>
                
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4 mr-2"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
                
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded mt-4 mr-2"
                  onClick={() => addToWishlist(item)}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full">
            <p className="text-red-600 text-xl text-center">Page Not Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
