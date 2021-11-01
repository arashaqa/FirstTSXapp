import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {productReducers} from './Reducers/productReducers'

const reducers = combineReducers({
    productList: productReducers
})
const initialState = {}
const store = createStore(reducers, initialState, applyMiddleware(thunk))

export default store