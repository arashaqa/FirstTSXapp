import axios,{AxiosResponse} from 'axios'

export const productsActions = () => async (dispatch: any) => {
    
    try {
        dispatch({ type: 'send_req' })
        const response = await axios.get('http://localhost:8001/api/products')
        console.log(response)
        dispatch({ type: 'req_success', payload: response.data})
    }catch (err) {
        console.log(err)
    }
   
}