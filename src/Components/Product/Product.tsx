import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


type props  = {
    _id?: string,
    image: string,
    name?: string,
    price?: number,
    description?: string
} 
interface propsInterface{
 product:props
}
const Product = ({product }:propsInterface  )=> {
    return (
        <Card className='p-2 my-2 rounded'>
            <Link style={{ textDecoration: 'none', color: 'black' }} to ={`/products/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body className="text-center">‍‍‍‍
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/products/${product._id}`}>
                    <Card.Title as='div' className="text-center" >{`محصول ${product.name}`}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  {product.description} </Card.Subtitle>
                </Link>
                <Card.Text as='h3'>
                    {`قیمت ${product.price}`}
                </Card.Text >
            </Card.Body>


            <Button variant='outline-success'>خرید </Button>
        </Card>
    )
}

export default Product
