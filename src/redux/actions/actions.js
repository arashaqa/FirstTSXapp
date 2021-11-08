import * as type from '../types'
export function getProduct(products) {
    return {
        type: type.GET_PRODUCTS_REQUESTED,
        payload:products
    }
}