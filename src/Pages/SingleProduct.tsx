import React,{useEffect} from 'react';
import * as b from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { productsActions } from '../StateManagement/Actions/productActions';

// import Products from '../products'

type Props = {
    match?: any;
    params: any;
    pro: any
}
interface PropsInterface {
    match: Props;
}

const SingleProduct = ({ match }: PropsInterface) => {
const dispatch = useDispatch()

    const Products = useSelector((state:any)=>{state?.productList.products})
    useEffect(() => {
        dispatch(productsActions())
    })
    const product = Products.find((item:any) => {
        return item._id === match.params.id
    })

    const history = useHistory()


    return (
        <div>
            <b.Row className='my-2 '>
                <b.Col>
                    <b.Button className='btn-danger' onClick={() => history.goBack()}>بازگشت</b.Button>
                </b.Col>
            </b.Row>
            <b.Row>
                <b.Col md={5}>
                    <b.Card className="shadow-sm p-3 mb-5 bg-white">
                        <b.Card.Body className=''>
                            <b.Image src={product?.image} fluid />
                            <b.Card.Text className="text-center">{product?.description}</b.Card.Text>
                        </b.Card.Body>
                        <b.Card.Body className="text-muted">
                            <h3 style={{ textAlign: 'center' }}>{product?.name}</h3>
                        </b.Card.Body>
                    </b.Card>
                </b.Col>
                <b.Col xs={5} md>
                    <b.Card className='shadow-sm p-3 mb-5 bg-white'>
                        <b.Card.Header>
                            <h5 style={{ textAlign: 'center' }}>{product?.name}</h5>
                        </b.Card.Header>
                        <b.Card.Body>
                            <b.ListGroup variant='flush'>
                                <b.ListGroup.Item>
                                    {product?.description}
                                </b.ListGroup.Item>
                                <b.ListGroup.Item>
                                    {product?.name}
                                </b.ListGroup.Item>
                            </b.ListGroup>
                        </b.Card.Body>
                        <b.Card.Footer>
                            <b.Button type='button' className='btn btn-block' >خرید محصول</b.Button>
                        </b.Card.Footer>
                    </b.Card>
                </b.Col>
            </b.Row>
        </div>
    )

}

export default SingleProduct
