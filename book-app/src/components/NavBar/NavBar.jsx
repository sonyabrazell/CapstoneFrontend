import React from 'react';
import { Nav, NavBar, NavDropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";


const NavBar = ({user}) => {

    const handleSelect = (eventKey) => alert(`selected${eventKey}`);

    return (
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <Nav.Item>
                <Nav.Link eventKey="1" title="Dashboard" href="/">
                    Dashboard
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" title="Library" href="/library">
                Library
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" title="Wishlist" href="wishlist/">
                Wishlist
                </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Trackers" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1" href="book_tracker/">Books</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2" href="og_tracker/">Original Works</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1" href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2"href="/login/register">Register</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}
export default NavBar;

