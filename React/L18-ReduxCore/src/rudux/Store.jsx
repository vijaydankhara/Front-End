import { createStore } from 'redux';
import rootReducer from '../rudux/rootReducer';

const store = createStore(rootReducer);

export default store;

