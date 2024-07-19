import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";

import item1 from "../assets/1.webp";
import item2 from "../assets/2.jpg";
import item3 from "../assets/3.jpg";
import item4 from "../assets/4.jpg";
import item5 from "../assets/5.webp";
import item6 from "../assets/6.jpg";
import item7 from "../assets/7.jpg";
import item8 from "../assets/8.jpeg";
import item9 from "../assets/9.jpg";
import item10 from "../assets/10.webp";
import item11 from "../assets/11.webp";
import item12 from "../assets/bg.avif";

const List_Rendering = () => {
  const [productData, setProductData] = useState([]);
  const [brandFilter, setBrandFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filterReset = () => {
    setBrandFilter("");
    setColorFilter("");
    setCategoryFilter("");
  };

  const Product = [
    {
      id: 1,
      title: "Chocolate Ice Cream",
      price: 549,
      discount: "12%",
      brand: "Havmor",
      color: "Yellow",
      category: "Ice cream",
      img: item1,
    },
    {
      id: 2,
      title: "Pishta Ice Cream",
      price: 399,
      discount: "30%",
      brand: "Havmor",
      color: "Green",
      category: "Ice cream",
      img: item2,
    },
    {
      id: 3,
      title: "Orange pista Ice Cream",
      price: 699,
      discount: "50%",
      brand: "Amul",
      color: "Orange",
      category: "Ice cream",
      img: item3,
    },
    {
      id: 4,
      title: "Chokobar Candy",
      price: 111,
      discount: "5%",
      brand: "Amul",
      color: "Coffee",
      category: "Candy",
      img: item4,
    },
    {
      id: 5,
      title: "Pista Kulfi",
      price: 150,
      discount: "20%",
      brand: "Amul",
      color: "Yellow",
      category: "Kulfi",
      img: item5,
    },
    {
      id: 6,
      title: "Almond-Pista Kulfi",
      price: 199,
      discount: "25%",
      brand: "Havmor",
      color: "Green",
      category: "Kulfi",
      img: item6,
    },
    {
      id: 7,
      title: "Chocolate Cold CoCo",
      price: 210,
      discount: "10%",
      brand: "Amul",
      color: "Coffee",
      category: "CoCo",
      img: item7,
    },
    {
      id: 8,
      title: "Chocolate Almond Cold CoCo ",
      price: 170,
      discount: "25%",
      brand: "Havmor",
      color: "Coffee",
      category: "CoCo",
      img: item8,
    },
    {
      id: 9,
      title: "Ice Cream Cone",
      price: 99,
      discount: "10%",
      brand: "Amul",
      color: "Pink-Chocolate",
      category: "Cone",
      img: item9,
    },
    {
      id: 10,
      title: "Ice Cream Cone Mix",
      price: 299,
      discount: "30%",
      brand: "Havmor",
      color: "Chocolate",
      category: "Cone",
      img: item10,
    },
    {
      id: 11,
      title: "Chocolate Cold CoCo",
      price: 210,
      discount: "10%",
      brand: "Amul",
      color: "Coffee",
      category: "CoCo",
      img: item7,
    },
    {
      id: 12,
      title: "Kesar Pista Almound ",
      price: 190,
      discount: "25%",
      brand: "Havmor",
      color: "Orange",
      category: "Ice cream",
      img: item11,
    },
  ];

  useEffect(() => {
    setProductData(Product);
  }, []);

  const filteredProducts = productData.filter((product) => {
    return (
      (!brandFilter || product.brand === brandFilter) &&
      (!colorFilter || product.color === colorFilter) &&
      (!categoryFilter || product.category === categoryFilter)
    );
  });

  return (
    <div className="bg-cover bg-fixed" style={{ backgroundImage: "url('path/to/your/background.jpg')" }}>
      <div className="flex justify-center rounded-b-full  fixed w-full top-[-0px] bg-[#f55c1f] p-2 gap-5">
      
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-brand">
            Brand
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setBrandFilter("Havmor")}
            >
              Havmor
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setBrandFilter("Amul")}
            >
              Amul
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-color">
            Color
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setColorFilter("Yellow")}
            >
              Yellow
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setColorFilter("Green")}
            >
              Green
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setColorFilter("Orange")}
            >
              Orange
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setColorFilter("Coffee")}
            >
              Coffee
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setColorFilter("Pink-Chocolate")}
            >
              Pink-Chocolate
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setColorFilter("Chocolate")}
            >
              Chocolate
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-category">
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setCategoryFilter("Ice cream")}
            >
              Ice cream
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setCategoryFilter("Candy")}
            >
              Candy
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setCategoryFilter("Kulfi")}
            >
              Kulfi
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setCategoryFilter("CoCo")}
            >
              CoCo
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:bg-[#f55c1f] text-center"
              onClick={() => setCategoryFilter("Cone")}
            >
              Cone
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button className="btn btn-danger" onClick={filterReset}>
          Reset
        </button>
      </div>

      <div className="flex flex-wrap  mx-3 my-20  gap-4">
        {filteredProducts.map((product) => (
          <div
            className="w-[280px] rounded-md border hover:bg-gray-100"
            key={product.id}
          >
            <img
              src={product.img}
              alt={product.title}
              className="h-[200px] w-full rounded-t-md object-fill"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {product.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
              </h1>
              <h1 className="items-center text-lg font-semibold">
                {product.brand}
              </h1>
              <p className="mt-3 text-xl text-gray-900">Rs. {product.price}</p>
              <p className="mt-3 text-black text-xl">
                Discount.{" "}
                <span className="text-green-800 text-xl">
                  {product.discount}
                </span>
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-[#1519ff] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ff7119] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                BUY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List_Rendering;
