import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Link to="/productAdd"><Button variant="success">Add</Button></Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
    )

}

export default Header;