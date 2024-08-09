const redux = require('redux');
const readline = require('readline');

const createStore = redux.createStore;

// Action Types
const BUY_CAKE = 'BUY_CAKE';
const BUY_COFFEE = 'BUY_COFFEE';

// Action Creators
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux Action'
    };
}

function buyCoffee() {
    return {
        type: BUY_COFFEE,
        info: 'Second redux Action'
    };
}

// Initial States
const initialCakeState = {
    numOfCake: 10
};

const initialCoffeeState = {
    numOfCoffee: 10
};

// Reducers
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCake: state.numOfCake - 1
            };
        default:
            return state;
    }
};

const coffeeReducer = (state = initialCoffeeState, action) => {
    switch (action.type) {
        case BUY_COFFEE:
            return {
                numOfCoffee: state.numOfCoffee - 1
            };
        default:
            return state;
    }
};

// Create Stores
const store = createStore(cakeReducer);
const store2 = createStore(coffeeReducer);

console.log('Initial State of Cake Store:', store.getState());
console.log('Initial State of Coffee Store:', store2.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State of Cake Store:', store.getState()));
const unsubscribe2 = store2.subscribe(() => console.log('Updated State of Coffee Store:', store2.getState()));

// Readline Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askUser() {
    rl.question('Enter "cake" to buy a cake or "coffee" to buy a coffee: ', (answer) => {
        if (answer.toLowerCase() === 'cake') {
            store.dispatch(buyCake());
        } else if (answer.toLowerCase() === 'coffee') {
            store2.dispatch(buyCoffee());
        } else {
            console.log('Invalid input. Please enter either "cake" or "coffee".');
        }

        rl.question('Do you want to buy another item? (yes/no): ', (response) => {
            if (response.toLowerCase() === 'yes') {
                askUser();
            } else {
                unsubscribe();
                unsubscribe2();
                rl.close();
            }
        });
    });
}

askUser();
