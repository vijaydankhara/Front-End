import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RenderingCategory = () => {
  const [postData, setPostData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/Product.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => setPostData(json.product))
      .catch((error) => console.error("Fetching error:", error));
  }, []);

  const filterByCategory = () => {
    const productFilter = postData.filter(
      (post) => post.category === "smartphones"
    );
    setFilteredData(
      productFilter.length > 0 ? productFilter : ["Data not found"]
    );
  };
  

  const buttonClickReset = () => {
    setFilteredData(["Data not found"]);
    setCount(0);
  };

  return (
    
    <div className="container mt-4">
    <h1 className="text-center bg-primary text-white p-2">
        This is List-Rendering in React using filter() and map()
      </h1>

      {/* BUTTONS */}
    <div className="flex flex-row text-center mt-4 gap-4">
        {/* Filter by  Category */}
        <Button
          className="bg-[#03851b] hover:bg-[#38a54c] rounded-full"
          variant="primary"
          onClick={filterByCategory}>
          filterByCategory
        </Button>

        

        {/* Reset Data Button */}
        <Button
          className="bg-[#fc0404] hover:bg-[#fc01099e] rounded-full px-5"
          variant="primary"
          onClick={buttonClickReset}
        >
          RESET
        </Button>
      </div>


      <div className="row m-10 p-5 border-2 border-red-500 justify-items-start text-pretty ">
        {filteredData.map((item, id) =>
          typeof item === "string" ? (
            <div className="col-md-12 mb-4 text-center" key={id}>
              <Card className="bg-warning border-2 border-danger">
                <Card.Body>
                  <Card.Title>{item}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div className="col-md-4 mb-4" key={id}>
              <Card className="bg-pink-200 border-2 border-blue-700 hover:bg-orange-200 hover:border-red-600">
                <Card.Body>
                  {/* ID */}
                  <div className="bg-[#fb7507] rounded-t-2xl text-center text-2xl p-2">
                    <Card.Title>{item.id}</Card.Title>
                  </div>

                  {/* TITLE */}
                  <div className="bg-[#fff] text-center p-2 text-2xl">
                    <Card.Title>{item.title}</Card.Title>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="bg-[#1a7903] text-white text-xl px-5 rounded-b-2xl text-center p-2">
                    <Card.Text>description :- {item.description}</Card.Text>
                  </div>

                  {/* PRICE */}
                  <div className="bg-purple-500 text-white mt-2 text-2xl px-5 rounded-t-2xl text-center p-2">
                    <Card.Text>Price :- ${item.price}</Card.Text>
                  </div>

                  {/* THUMBNAIL */}
                  <div className="bg-purple-800 text-white  px-5  text-2xl rounded-b-2xl text-center p-2">
                    <Card.Text>Stock is :- {item.stock}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )
        )}
      </div>
      
    </div>
  );
};

export default RenderingCategory;
