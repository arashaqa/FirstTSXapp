import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {productReducers,productDetailReducers} from './Reducers/productReducers'

const reducers = combineReducers({
    productList: productReducers,
    productDetail:productDetailReducers
})
const initialState = {}
const store = createStore(reducers, initialState, applyMiddleware(thunk))

export default store