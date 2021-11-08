import * as types from '../types'

const initialState = {
    products: [],
    loading: false,
    error:null
}
// interface ActionIn{
//     payload: any,
//     type: any,
//     products: any,
//     message:string
// }


export default function products(state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS_REQUESTED:
            return {
                ...state,
                loading:true,
            }
        case types.GET_PRODUCTS_SUCCESSFUL:
            return {
                ...state,
                products:action.products,
                loading:false,
            }
        case types.GET_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error:action.message,
            }
        default:
            return state
    }
}
// export type RootState = ReturnType<typeof products>
