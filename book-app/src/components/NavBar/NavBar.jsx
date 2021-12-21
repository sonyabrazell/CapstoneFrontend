import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css"


const Navigation = ({user}) => {


    return (
        <div>
            <Navbar className="navbar" variant="light" sticky="top" >
                <Navbar.Brand></Navbar.Brand>
                    <Nav className="nav-pills" >
                        <Nav.Item>
                            <Nav.Link eventKey="1" title="Dashboard" href="/">Dashboard</Nav.Link>
                        </Nav.Item>
                    {!user && (
                    <React.Fragment>
                        <NavDropdown title="Account" id="nav-dropdown">
                            <NavDropdown.Item eventKey="2.1" href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.2"href="/register">Register</NavDropdown.Item>
                        </NavDropdown>
                    </React.Fragment>
                    )}
                    {user && (
                        <React.Fragment>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" title="Library" href="/library">Library</Nav.Link>
                                </Nav.Item>
                            <NavDropdown title="Trackers" id="nav-dropdown">
                                <NavDropdown.Item eventKey="7.1" href="book_tracker/">Books</NavDropdown.Item>
                                <NavDropdown.Item eventKey="7.2" href="og_tracker/">Original Works</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                    <Nav.Link eventKey="6" title="Wishlist" href="wishlist/">Wishlist</Nav.Link>
                                </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="3" href="/logout">Log Out</Nav.Link>
                            </Nav.Item>
                    </React.Fragment>
                    )}
                </Nav>
            </Navbar>
        </div>
    )
}
export default Navigation;

