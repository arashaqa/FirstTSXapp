import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as b from 'react-bootstrap';

//actions 
import {getProduct} from '../redux/actions/actions'
//import components
import Product from '../Components/Product/Product';



interface propsHome {
    product?: any[],
    name?: string,
    image?: string,
    price?: number,
}
const Home = (props: propsHome) => {
//redux
    const dispatch = useDispatch()
    const products = useSelector((state: any) => state.productList.products)
    console.log(products)
    useEffect(() => {
        dispatch(getProduct()) 
    },[])
    return (
        <div>
            <b.Row><h2>محصولات برترـــ</h2></b.Row>
            <b.Row>
                {products && products.map((item:any) => {
                    return (<b.Col xs={6} sm={6} lg={4} md={4} key={item._id}>
											<Product product={item}/>
                    </b.Col>)
                })}
            </b.Row>

        </div>
    )
}

export default Home
