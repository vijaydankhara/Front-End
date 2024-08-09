const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buy_cake(){
    return{
        type:BUY_CAKE,
        info:'First redux Action'
    }
}

const initialState = {
    numOfCake:10
}

const reducer = (state = initialState , action) => {
        switch(action.type){
            case BUY_CAKE:return{
                numOfCake:state.numOfCake - 1
            }
            default:return state
        }
}

const store = createStore(reducer)

console.log('InitialState' , store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated State' , store.getState())
)

store.dispatch(buy_cake())
// store.dispatch(buy_cake())
// store.dispatch(buy_cake())

unsubscribe()


// COFFEE
const BUY_COFFEE = 'BUY_COFFEE'

function buy_coffee(){
    return{
        type:BUY_COFFEE,
        info:'second redux Action'
    }
}

const initialState2 = {
    numOfCoffee:10
}

const reducer2 = (state = initialState2 , action) => {
        switch(action.type){
            case BUY_COFFEE:return{
                numOfCoffee:state.numOfCoffee - 1
            }
            default:return state
        }
}

const store2 = createStore(reducer2)

console.log('InitialState2' , store2.getState())

const unsubscribe2 = store2.subscribe(() => console.log('Updated State' , store2.getState())
)

// store2.dispatch(buy_coffee())
store2.dispatch(buy_coffee())
store2.dispatch(buy_coffee())

unsubscribe2()