import './App.css';

// single import
// import Header from "./Components/header"

// Multipal Import
import { Header,Header1 } from './Components/header';

function App() {
  return (
    <div className="App">
    <Header/>
    {/* <Header></Header> */}
    <Header1></Header1>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
