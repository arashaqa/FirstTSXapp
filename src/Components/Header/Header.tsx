import React from 'react'
import * as b from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// import sass
import './Header.scss'
interface Props {

}
const Header = (props: Props) => {
    return (
        <b.Navbar id='nav' sticky='top' variant="light">
            <b.Container >
                <b.Nav id='nav' className="me-auto">
                    <LinkContainer to='/'>
                        <b.Navbar.Brand id='brand'>
                            تی اس ایکــس
                        </b.Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to='/'>
                        <b.Nav.Link className='text-center' id='links'>صفحه اصلی</b.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='cart'>
                        <b.Nav.Link id='links'><i className="fas fa-shopping-cart"></i></b.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='account'>
                        <b.Nav.Link id='links'><i className="fas fa-user"></i></b.Nav.Link>
                    </LinkContainer>
                </b.Nav>
            </b.Container>
        </b.Navbar>
    )
}

export default Header
