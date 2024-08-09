// rootReducer.js
import { combineReducers } from 'redux';
import { CakeReducer } from './rudux/cake/CakeReducer';
import { CoffeeReducer } from './rudux/coffee/CoffeeReducer';

const rootReducer = combineReducers({
    cake: CakeReducer,
    coffee: CoffeeReducer,
});

export default rootReducer;
