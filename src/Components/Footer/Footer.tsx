import React from 'react'
import * as b from 'react-bootstrap'

import logo from '../../static/img/logo.png'
const Footer = () => {
    return (
        <b.Container >
            <b.Row>
                <b.Col>
                    <b.Col xs={6} md={4}>
                  
                            <b.Image thumbnail id='logo' src={logo} roundedCircle />
        
                    </b.Col>
                </b.Col>
                <b.Col>
                    Menu
                </b.Col>
                <b.Col>
                    trusted Logo
                </b.Col>
            </b.Row>
        </b.Container>
    )
}

export default Footer
