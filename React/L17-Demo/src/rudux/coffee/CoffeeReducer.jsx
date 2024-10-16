import { BUY_COFFEE } from "./CoffeeConstatnt"

const initialState = {
    numOfCoffee:20
}

export const CoffeeReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_COFFEE: return{
            ...state,

            numOfCoffee: state.numOfCoffee > 0  ? state.numOfCoffee - 1 : 0
        }
        default: return state
    }
}