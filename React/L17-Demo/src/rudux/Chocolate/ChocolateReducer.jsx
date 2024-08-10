import { BUY_CHOCOLATE } from "./ChocolateConstatnt";

const initialState = {
    AvailableStock: 15
};

export const ChocolateReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCOLATE:
            return {
                ...state,
                AvailableStock: state.AvailableStock > 0 ? state.AvailableStock - 1 : 0
            };
        default:
            return state;
    }
};
