import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';

const TopBar = (props) => {

    return (
        <Navbar expand="lg" variant="dark" className="background-primary2 font-sm top-bar d-flex flex-row zindex-1000">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="background-primary2">
                <Nav className="">
                    {/* <Nav.Link href="#home" className="font-white">Faculty</Nav.Link>
                    <Nav.Link href="#link" className="font-white">Placements</Nav.Link>
                    <Nav.Link href="#link" className="font-white">Scholarships</Nav.Link>
                    <Nav.Link href="#link" className="font-white">Contact Us</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            <Nav className="ml-auto d-felx flex-row">
                {/* <Nav.Link href="#home" className="font-white mx-2">
                    <i class="fa fa-phone-square"></i>
                    <span className="ml-1">(020)24368621</span>
                </Nav.Link>
                <Nav.Link href="#link" className="font-white mx-2">
                    <i class="fa fa-envelope"></i>
                    <span className="ml-1">sarhadcollege@gmail.com</span>
                </Nav.Link> */}
                {/* <Nav.Link href="#link" className="font-white mx-2 d-sm-none d-md-flex">
                    <i class="fa fa-facebook"></i>
                </Nav.Link>
                <Nav.Link href="#link" className="font-white mx-2 d-sm-none d-md-flex">
                    <i class="fa fa-google"></i>
                </Nav.Link> */}
            </Nav>
        </Navbar>
    );
}

export default TopBar;