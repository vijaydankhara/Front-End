import './App.css';
// import Header from "./Components/Header"
import Card from './Components/Card';

// images 
import images1 from './images/c1.jpg'
import images2 from './images/c2.jpg'
import images3 from './images/c6.jpg'
import images4 from './images/c5.jpg'
import images5 from './images/c4.jpg'
import images6 from './images/c3.jpg'

// function App() {
//   return (
//     <div className="App">
//          <Header name="vijay" age="24" city="suart" />

//          <Card name="card1" price="100"/>
//          <Card name="card2" price="200"/>
//          <Card name="card3" price="300"/>
//          <Card name="card4" price="400"/>
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
  <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Responsive Product card
        </h1>
        <h1 className="text-3xl">Tailwind CSS And ReactJs</h1>
      </div>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 justify-center">
      <Card images={images1} delPrice="199$" curPrice="149$" product="Davidoff" />
      <Card images={images2} delPrice="178$" curPrice="120$"  product="Starbucks"/>
      <Card images={images3} delPrice="199$" curPrice="111$" product="Aroma Avenue" />
      <Card images={images4} delPrice="180$" curPrice="115$" product="Nescafe" />
      <Card images={images5} delPrice="170$" curPrice="120$" product="Blue Tokai" />
      <Card images={images6} delPrice="299$" curPrice="199$" product="Rage Coffee" />
    </div>
    </div>
  );
}


export default App;