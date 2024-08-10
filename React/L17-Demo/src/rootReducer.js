// rootReducer.js
import { combineReducers } from 'redux';
import { CakeReducer } from './rudux/cake/CakeReducer';
import { CoffeeReducer } from './rudux/coffee/CoffeeReducer';
import { ChocolateReducer } from './rudux/Chocolate/ChocolateReducer';

const rootReducer = combineReducers({
    cake: CakeReducer,
    coffee: CoffeeReducer,
    chocolate: ChocolateReducer, 
});

export default rootReducer;
