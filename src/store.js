const { compose, createStore, combineReducers, applyMiddleware } = require("redux");
const { productReducer } = require("./reducers/productReducers");
const { default: thunk } = require("redux-thunk");


const initialState = {};
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        products: productReducer,
    }),
    initialState,
    composeEnchancer(applyMiddleware(thunk))
);
export default store;