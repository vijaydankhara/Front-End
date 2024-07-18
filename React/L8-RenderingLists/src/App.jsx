import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List_Rendering from "./Components/RenderingLists";
// import Rendering from './Components/Rendering';
import RenderingVijay from "./Components/RenderinVijay";
import RenderingCategory from "./Components/RendringByCategory ";

function App() {
  return (
    <>
      {/* <List_Rendering/> */}
      {/* <Rendering /> */}
      {/* <RenderingVijay/> */}
      <RenderingCategory/>
    </>
  );
}

export default App;
