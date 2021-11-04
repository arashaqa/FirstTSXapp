import axios from 'axios'

export const productsActions = () => async (dispatch: any) => {
    
    try {
        dispatch({ type: 'send_req' })
        const response = await axios.get('http://localhost:8001/api/products')
        dispatch({ type: 'req_success', payload: response.data})
    }catch (err) {
        console.log(err)
    }
   
}
export const productsDetailActions = (id:any) => async (dispatch: any) => {
    
    try {
        dispatch({ type: 'send_req_detail' })
        const response = await axios.get(`http://localhost:8001/api/products/${id}`)
        dispatch({ type: 'req_success_detail', payload: response.data })
        console.log(response.data)
    }catch (err) {
        console.log(err)
    }
   
}