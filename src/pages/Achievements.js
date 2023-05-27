import React from 'react';
import { 
    Container,
    Row,
    Col,
    Table,
    Image,
    Nav
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Arts from '../components/Achievements/Arts';
import Bba from '../components/Achievements/Bba';
import Chemistry from '../components/Achievements/Chemistry';
import Commerce from '../components/Achievements/Commerce';
import Main from '../components/Achievements/Main';
import Science from '../components/Achievements/Science';
import Sports from '../components/Achievements/Sports';
import Teachers from '../components/Achievements/Teachers';
import Bbaca from '../components/Achievements/Bbaca';

import physics from '../assets/docs/PhysicsDepartment.pdf';
import botany from '../assets/docs/Botany.pdf';
import English from '../components/Achievements/English';

const Achievements = (props) => {

    return (
        <Container fluid>
            <Row className="d-flex justify-content-around">
                    <Col md={3} className="p-4 mb-4 shadow-sm sideMenuBar">
                        <h6 className="mt-4 py-2 border-bottom border-dark">Students Achievements</h6>
                        <Nav defaultActiveKey="/achievements" className="flex-column">
                            <Nav.Link href="/achievements/science"><i class="fa fa-trophy"></i> Department of Computer Science </Nav.Link>
                            <Nav.Link href="/achievements/chemistry"><i class="fa fa-trophy"></i> Department of Chemistry </Nav.Link>
                            <Nav.Link href={ physics } target="_blank"><i class="fa fa-trophy"></i> Department of Physics </Nav.Link>
                            <Nav.Link href={ botany } target="_blank"><i class="fa fa-trophy"></i> Department of Botany </Nav.Link>
                            <Nav.Link href="/achievements/commerce"><i class="fa fa-trophy"></i> Department of Commerce </Nav.Link>
                            <Nav.Link href="/achievements/bba"><i class="fa fa-trophy"></i> Department of BBA </Nav.Link>
                            <Nav.Link href="/achievements/bbaca"><i class="fa fa-trophy"></i> Department of BBA (CA) </Nav.Link>
                            <Nav.Link href="/achievements/arts"><i class="fa fa-trophy"></i> Department of Arts </Nav.Link>
                            <Nav.Link href="/achievements/sports"><i class="fa fa-trophy"></i> Department of Physical Education and Sports </Nav.Link>
                        </Nav>
                        <h6 className="mt-4 py-2 border-bottom border-dark">Teachers Achievements</h6>
                        <Nav defaultActiveKey="/academics" className="flex-column">
                            <Nav.Link href="/achievements/teachers"><i class="fa fa-graduation-cap"></i>Teacher Achievements</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={8} className="my-4 bg-white shadow-sm border-bottom">
                        <Router>
                            <Switch>
                                <Route path='/achievements/science'>
                                    <Science/>
                                </Route>
                                <Route path='/achievements/chemistry'>
                                    <Chemistry/>
                                </Route>
                                <Route path='/achievements/arts'>
                                    <Arts/>
                                </Route>
                                <Route path='/achievements/english'>
                                    <English/>
                                </Route>
                                <Route path='/achievements/commerce'>
                                    <Commerce/>
                                </Route>
                                <Route path='/achievements/sports'>
                                    <Sports/>
                                </Route>
                                <Route path='/achievements/teachers'>
                                    <Teachers/>
                                </Route>
                                <Route path='/achievements/bba'>
                                    <Bba/>
                                </Route>
                                <Route path='/achievements/bbaca'>
                                    <Bbaca/>
                                </Route>
                                <Route path='/achievements'>
                                    <Main/>
                                </Route>
                                {/*<Route path='/academics/bsc'>
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
                                </Route> */}
                            </Switch>
                        </Router>
                    </Col>
                </Row>
        </Container>
    );
}

export default Achievements;