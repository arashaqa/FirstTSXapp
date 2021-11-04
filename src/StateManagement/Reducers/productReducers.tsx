
interface ActionInterface {
    payload?: any,
    type?:string
}

type state = {
    state: any,
    loading: boolean,
    products?:any
}
const initialState = {
    products: [],
    loading:false,
}
export const productReducers = (state=initialState,action:ActionInterface) => {
    switch (action.type) {
        case 'send_req':
            return { loading: true, products: [] }
        case 'req_success':
            return { loading: false, products: action.payload }
        default:
            return state
    }
}

export const productDetailReducers = (state={product:{}},action:ActionInterface) => {
    switch (action.type) {
        case 'send_req_detail':
            return { loading: true, ...state}
        case 'req_success_detail':
            return { loading: false, product: action.payload }
        default:
            return state
    }
}
export type RootState = ReturnType<typeof productReducers>