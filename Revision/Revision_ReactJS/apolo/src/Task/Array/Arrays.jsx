import React, { useState } from "react";

const Arrays = () => {
  const [data, setData] = useState([
    {
      tital: "Wooden Chair",
      price: 1200,
      discription: "Lorem ipsum dolor sit amet",
      image: "https://ii1.pepperfry.com/media/catalog/product/m/i/764x840/milton-solid-wood-armchair-in-rustic-teak-finish-with-green-colour-upholstery-milton-solid-wood-armc-qe7xrt.jpg",
    },
    {
      tital: "Modern Sofa",
      price: 3555,
      discription: "Lorem ipsum dolor sit amet",
      image: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/b9ad04a1-66fd-4bb8-b82c-7521d140a2ad/e6a259e677860331e4474bd616f1fccf.webp",
    },
    {
      tital: "Modern bed",
      price: 45999,
      discription: "Lorem ipsum dolor sit amet",
      image: "https://indiannest.in/cdn/shop/files/Ab76020a6884b49a28e1d6462aaaef9df0.jpg?v=1683434339&width=1100",
    },
  ]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-bold text-3xl text-center mb-6 bg-yellow-200">
      State with Arrays
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            style={{ height: '400px' }} 
          >
            <img
              src={product.image}
              alt={product.tital}
              className="w-full h-48 object-cover mb-4 rounded-md" 
            />
            <p className="text-lg font-semibold">
              <strong>Product Name:</strong> {product.tital}
            </p>
            <p className="text-lg">
              <strong>Price:</strong> ${product.price}
            </p>
            <p className="text-lg">
              <strong>Description:</strong> {product.discription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrays;
