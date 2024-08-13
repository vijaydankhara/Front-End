import { combineReducers } from 'redux';
import CakeReducer from './CakeReducer';
import ChocoReducer from './ChocoReducer';

const rootReducer = combineReducers({
  cake: CakeReducer,
  choco: ChocoReducer,
});

export default rootReducer;
