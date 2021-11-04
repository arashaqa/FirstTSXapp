import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import * as b from 'react-bootstrap';

//actions
import {productsActions} from '../StateManagement/Actions/productActions'

//import components
import Product from '../Components/Product/Product';



interface propsHome{
    product?: any[],
    name?: string,
    image?: string,
    price?:number,
}
const Home = (props: propsHome) => {
//redux
    const dispatch = useDispatch();

    const productList = useSelector((state:any) => state?.productList)
    
   const {loading,products} = productList

   
    useEffect(() => {
        dispatch(productsActions())
    },[dispatch])
    return (
        <div>
                <b.Row><h2>محصولات برترـــ</h2></b.Row>
            <b.Row>
                {products && products.map((item:any) => {
                    return (<b.Col xs={4} sm={6} lg={4} md={4} key={item._id}>
											<Product product={item}/>
                    </b.Col>)
                })}
            </b.Row>
      
        </div>
    )
}

export default Home
