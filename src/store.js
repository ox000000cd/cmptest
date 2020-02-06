import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducer} from "./reducers/index"

export const store = createStore(combineReducer, compose(
    applyMiddleware(...[thunk]) //需要使用的中间件
));

