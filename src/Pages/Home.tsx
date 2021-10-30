import React from 'react';
import * as b from 'react-bootstrap';


//import JSON file ;
import product from '../products';

//import components
import Product from '../Components/Product/Product';



interface propsHome{
    product?: any[],
    item?: string[],
    name?: string,
    image?: string,
    price?:number,
}
const Home = (props: propsHome) => {

    return (
        <div>
                <b.Row><h2>محصولات برترـــ</h2></b.Row>
            <b.Row>
                {product.map(item => {
                    return (<b.Col xs={6} sm={1} lg={3} md={2} key={item._id}>
											<Product product={item}/>
                    </b.Col>)
                })}
            </b.Row>
      
        </div>
    )
}

export default Home
