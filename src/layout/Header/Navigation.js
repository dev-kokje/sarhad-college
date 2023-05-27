import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';

const Navigation = (props) => {

    const menu = {
        "Home": "/home", 
        "About Us": "/about-us", 
        "Academics": "/academics",
        "IQAC": "/iqac", 
        "Admission": "/admission", 
        "Examination": "/examination", 
        "Administration": "/committee",
        "Feedback": "/feedback",
        "Contact Us": "/contact-us"
    };

    const menus = Object.entries(menu).map(([key,value])=>{
        if(key === "Activities & Achievements") {
            return <Nav.Link href={value} className="font-md text-dark px-4 mx-2 navLink">{key} <i class="fa fa-trophy"></i></Nav.Link>
        }
        if(key === "Admission") {
           return <Nav.Link href={value} className="font-md text-dark blinkMe px-4 mx-2 navLink">{key}</Nav.Link>
        }
        return (
            <Nav.Link href={value} className="font-md text-white px-4 mx-2 navLink">{key}</Nav.Link>
        );
    });

    return (
        <Navbar expand="lg" className="bg-primary2 text-white">
        <Navbar.Brand href="#home" className="d-sm-block d-md-none">Explore Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto d-flex justify-content-around">
                    {menus}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;