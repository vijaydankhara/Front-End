import { BUY_CAKE } from './CakeConstatnt';

const initialState = {
    numOfCake: 10
};

export const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake > 0 ? state.numOfCake - 1 : 0
            };
        default:
            return state;
    }
};
