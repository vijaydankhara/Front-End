const redux =  require ('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_COCO = 'BUY_COCO'
const BUY_BURGER = 'BUY_BURGER'

function buy_cake(){
    return{
        type:BUY_CAKE
    }
}

function buy_coco (){
    return {
        type:BUY_COCO
    }
}

function buy_burger (){
    return {
        type:BUY_BURGER
    }
}

const initialState = {
    numOfCake:10,
    numOfCoco:20,
    numOfBurger:15
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case BUY_CAKE:return{
            ...state,
            numOfCake:state.numOfCake - 1
        }

        case BUY_COCO:return{
            ...state,
            numOfCoco:state.numOfCoco - 1
        }

        case BUY_BURGER:return{
            ...state,
            numOfBurger:state.numOfBurger - 1
        }

        default:return state  
    }
}

const store = createStore(reducer)

console.log("InitialState",store.getState());

const unsubscribe = store.subscribe(() => console.log("This Is A Update State",store.getState()))

store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_coco())
store.dispatch(buy_coco()) 
store.dispatch(buy_burger())

unsubscribe();