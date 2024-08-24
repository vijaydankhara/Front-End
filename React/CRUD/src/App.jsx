import { useState } from "react";
import CustomTable from "./Components/CustomTable";
import Cricket from "./Components/Cricket";
import "./App.css";
import { Navbar } from "./Components/Navbar";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
      {/* <CustomTable/> */}
      <Cricket />
      
    </>
  );
}

export default App;
