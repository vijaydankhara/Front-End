import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [product, setProduct] = useState([]);

  // Fetch products from API
  useEffect(() => {
    axios.get("http://localhost:3000/ecoproduct").then((res) => {
      setProduct(res.data);
    });
  }, []);

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
