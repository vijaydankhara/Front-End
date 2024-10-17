import React from 'react'
import { BUY_CAKE } from './Constant'
import { BUY_CHOCO } from './Constant'

const initialState = {
    numOfCake:10,
    numOfChoco:5
}

const Reducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCake:state.numOfCake - 1
        }
        case BUY_CHOCO : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        default:return state
    }
}

export default Reducer