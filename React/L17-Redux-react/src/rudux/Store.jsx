import { createStore } from "redux";
import { CakeReducer } from "./cake/CakeReducer";
import { CoffeeReducer } from "./coffee/CoffeeReducer";


const Store = createStore(CakeReducer,CoffeeReducer)

export default Store