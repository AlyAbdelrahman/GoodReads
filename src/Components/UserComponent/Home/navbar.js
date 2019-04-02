import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'


export default class Header extends React.Component {

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ">
                            <Link to="/category" className="p-2" >category</Link>
                            <Link to="/author" className="p-2">author</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

