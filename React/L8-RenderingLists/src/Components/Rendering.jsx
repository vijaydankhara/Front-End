import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Rendering = () => {
  const [postData, setPostData] = useState([]);
  const [productFilter, setFilteredData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPostData(json));
  }, []);

  const buttonClickInk = () => {
    const productFilter = postData.filter((post) => post.id === count + 1);
    setFilteredData(productFilter);
    setCount(count + 1);
  };

  const buttonClickDes = () => {
    const productFilter = postData.filter((post) => post.id === count - 1);
    setFilteredData(productFilter);
    setCount(count - 1);
  };

  const buttonClickReset = () => {
    const productFilter = postData.filter((post) => post.id === count - 1);
    // setFilteredData([]);
    setFilteredData(['data not found']);
    setCount(0);
  };

  //   const productFilter = postData.filter((post) => post.id === 1);

  return (
    <div className="container mt-4">
      <h1 className="text-center bg-primary text-white p-2">
        This is List-Rendering in React use filter() and map() 
      </h1>
      <div className="row mt-4">
        {productFilter.map((item, id) => (
          <div className="col-md-4 mb-4" key={id}>
            <Card className="bg-pink-200 border-2 border-blue-700 hover:bg-orange-200 hover:border-red-600">
              <Card.Body>
                {/* ID */}
                <div className="bg-[#fb7507] rounded-t-2xl text-center p-2">
                  <Card.Title>{item.id}</Card.Title>
                </div>

                {/* TITLE */}
                <div className="bg-[#fff] text-center p-2">
                  <Card.Title>{item.title}</Card.Title>
                </div>

                {/* BODY */}
                <div className="bg-[#1a7903] text-white px-5 rounded-b-2xl text-center p-2">
                  <Card.Text>{item.body}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className=" flex flex-row text-center mt-4 gap-4">
        {/* <Button variant="primary" onClick={() => setCount(count + 1)}>
          Click For Data
        </Button> */}

        {/* Incriment Data */}
        <Button
          className="bg-[#03851b] hover:bg-[#38a54c] rounded-full"
          variant="primary"
          onClick={buttonClickInk}
        >
         INCREMENT
        </Button>

        {/* Decriment Data */}
        <Button
          className="bg-[#0147fa] hover:bg-[#0116fa98] rounded-full"
          variant="primary"
          onClick={buttonClickDes}
        >
          DECREMENT
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
    </div>
  );
};

export default Rendering;
