import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css"
import { Image } from 'react-bootstrap';


const Navigation = ({user}) => {

    return (
        <div>
            <Navbar className="navbar" variant="light" fixed="top" style={{width: "100%"}} >
                <Navbar.Brand href="/">
                    <Image 
                        src={require("./static/reposistorylogo.png")}
                        width="200px"
                        style={{paddingLeft: "5px"}}/>
                </Navbar.Brand>
                    <Nav className="nav-pills" variant="danger">
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
                                <NavDropdown title = "Library" id= "nav-dropdown">
                                    <NavDropdown.Item eventKey="3.1" href="/library/">Library</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="3.2" href ="/library/add_new_book/">Add Book</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="3.3" href ="/library/series_view/">Series View</NavDropdown.Item>
                                </NavDropdown>
                            <NavDropdown title="Trackers" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1" href="/library/book_tracker/">Books</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2" href="/library/og_tracker/">Original Works</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link eventKey="5" href="/library/book_search/">Search</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                    <Nav.Link eventKey="7" title="Wishlist" href="wishlist/">Wishlist</Nav.Link>
                                </Nav.Item> */}
                            <Nav.Item>
                            <Nav.Link eventKey="6" href="/logout/">Log Out</Nav.Link>
                            </Nav.Item>
                    </React.Fragment>
                    )}
                </Nav>
            </Navbar>
        </div>
    )
}
export default Navigation;

