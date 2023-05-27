import React, { Component } from 'react';
import {

} from 'react-bootstrap';
import LogoBar from './LogoBar';
import Navigation from './Navigation';
import TopBar from './TopBar';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="border-bottom">
                <TopBar/>
                <LogoBar/>
                <Navigation/>
            </div>
        );
    }
}

export default Header;