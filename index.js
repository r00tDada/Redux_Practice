const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buycake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyicecream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
}

// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCream: 20,
// };

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCream: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numberOfIceCream: state.numberOfIceCream - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial State : ", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
unsubscribe();
