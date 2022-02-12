import React from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav , Container} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './MainPage.css';

function MainPage(){
    return(
        <div className="container">
            
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Dorobantu Andrei</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/ships">Nave</Nav.Link>
                            <Nav.Link href="/crew">Echipaj</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        </div>
    )
}

export default MainPage;