import React from 'react'
import * as b from 'react-bootstrap'
interface Props {

}
const Header = (props: Props) => {
    return (
        <b.Navbar>
            <b.Container>
                <b.Navbar.Brand>
                    پت شاپ
                </b.Navbar.Brand>
                <b.Nav className="me-auto">
                    <b.Nav.Link href="#home">صفحه اصلی</b.Nav.Link>
                    <b.Nav.Link href="#features">محصولات</b.Nav.Link>
                    <b.Nav.Link href="#pricing">درباره ما</b.Nav.Link>
                </b.Nav>
            </b.Container>
        </b.Navbar>
    )
}

export default Header
