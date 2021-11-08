import { combineReducers } from "redux";
import products from './product.js'
export const rootReducer = combineReducers({
    productList: products
})
export default rootReducer;