import React, { Component } from 'react'
import { 
    Container, 
    Row, 
    Col, 
    Nav 
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Course from '../components/Academics/Course';
import BscCs from '../components/Academics/BscCs';
import MscCs from '../components/Academics/MscCs';
import Bsc from '../components/Academics/Bsc';
import BscAn from '../components/Academics/BscAn';
import Bba from '../components/Academics/Bba';
import Mcom from '../components/Academics/Mcom';
import Ba from '../components/Academics/Ba';
import Bcom from '../components/Academics/Bcom';
import Bbaca from '../components/Academics/Bbaca';
import Main from '../components/Academics/Main';

class Academics extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return(
            <Container fluid>
                <Row className="d-none d-md-flex">
                    <Col md={5} className="d-flex justify-content-center align-items-center headRow1">
                        <h2 className="text-white">Academics</h2>
                    </Col>
                    <Col md={7} className="headRow2">
                        
                    </Col>
                </Row>
                <Row className="d-md-none">
                    <Col md={7} className="p-4 d-flex justify-content-start align-items-center headRow2">
                        <h2 className="text-white">Academics</h2>
                    </Col>
                </Row>
                <Row className="p-4 d-flex justify-content-around">
                    <Col md={3} className="p-4 mb-4 shadow-sm sideMenuBar">
                        <h5>Find courses</h5>
                        <h6 className="mt-4 py-2 border-bottom border-dark">Science Faculty</h6>
                        <Nav defaultActiveKey="/academics" className="flex-column">
                            <Nav.Link href="/academics/bsccs"><i class="fa fa-graduation-cap"></i> Computer Science</Nav.Link>
                            <Nav.Link href="/academics/bsc"><i class="fa fa-graduation-cap"></i> B.Sc. (Regular)</Nav.Link>
                        </Nav>
                        <h6 className="mt-4 py-2 border-bottom border-dark">Commerce Faculty</h6>
                        <Nav defaultActiveKey="/academics" className="flex-column">
                            <Nav.Link href="/academics/bcom"><i class="fa fa-graduation-cap"></i> B.Com.</Nav.Link>
                            <Nav.Link href="/academics/mcom"><i class="fa fa-graduation-cap"></i> M.Com.</Nav.Link>
                            <Nav.Link href="/academics/bba"><i class="fa fa-graduation-cap"></i> B.B.A.</Nav.Link>
                            <Nav.Link href="/academics/bbaca"><i class="fa fa-graduation-cap"></i> B.B.A.(CA)</Nav.Link>
                        </Nav>
                        <h6 className="mt-4 py-2 border-bottom border-dark">Arts Faculty</h6>
                        <Nav defaultActiveKey="/academics" className="flex-column">
                            <Nav.Link href="/academics/ba"><i class="fa fa-graduation-cap"></i>B.A.</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={8} className="mb-4 bg-white shadow-sm border-bottom">
                        <Router>
                            <Switch>
                                <Route path='/academics/bsccs'>
                                    <BscCs/>
                                </Route>
                                <Route path='/academics/msccs'>
                                    <MscCs/>
                                </Route>
                                <Route path='/academics/bsc'>
                                    <Bsc/>
                                </Route>
                                <Route path='/academics/bscan'>
                                    <BscAn/>
                                </Route>
                                <Route path='/academics/bcom'>
                                    <Bcom/>
                                </Route>
                                <Route path='/academics/bba'>
                                    <Bba/>
                                </Route>
                                <Route path='/academics/bbaca'>
                                    <Bbaca/>
                                </Route>
                                <Route path='/academics/mcom'>
                                    <Mcom/>
                                </Route>
                                <Route path='/academics/ba'>
                                    <Ba/>
                                </Route>
                                <Route path='/academics'>
                                    <Main/>
                                </Route>
                            </Switch>
                        </Router>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Academics;