import React, { Component } from 'react'
import cx from 'classnames'
import { Container, Row, Col, Card, Nav } from 'react-bootstrap'
import Leadership from '../components/AboutUs/Leadership';
import CollegeProfile from '../components/AboutUs/CollegeProfile';
import Mission from '../components/AboutUs/Mission';
import History from '../components/AboutUs/History';
import Recognition from '../components/AboutUs/Recognition';
import CoreValues from '../components/AboutUs/CoreValues';
import Infrastructure from '../components/AboutUs/Infrastructure';
import Introduction from '../components/AboutUs/Introduction';

import codeofconduct from '../assets/docs/iqac/Code of Conduct for Website.pdf';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.handleTabUpdate = this.handleTabUpdate.bind(this)
        var tabs = props.path == null ? "introduction" : props.path;
        this.state = {
            tab: tabs
        }
    }

    handleTabUpdate(changetab) {
        this.setState({
            tab: changetab
        }, () => {
            console.log(this.state.tab)
        })
    }

    render() {

        var content;

        switch(this.state.tab) {
            case "codeofconduct":
            case "introduction":
                content= (
                    <Introduction/>
                );
                break;
            case "leadership": 
                content = (
                    <Leadership/>
                );
                break;
            case "proile":
                content = (
                    <CollegeProfile/>
                );
                break;
            case "mission":
                content = (
                    <Mission/>
                );
                break;
            case "history":
                content = (
                    <History/>
                );
                break;
            case "recognition":
                content = (
                    <Recognition/>
                );
                break;
            case "corevalues":
                content = (
                    <CoreValues/>
                );
                break;
            case "infrastructure":
                content = (
                    <Infrastructure/>
                );
                break;
            default: 
                content = (
                    <h1>404: NOT FOUND</h1>
                );
                break;
        }

        return (
            <Container fluid>
                <Row className={cx("d-none d-md-flex")}>
                    <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                        <h2 className={cx("text-white")}>About Us</h2>
                    </Col>
                    <Col md={7} className={cx("headRow2")}>
                        
                    </Col>
                </Row>
                <Row className={cx("d-md-none")}>
                    <Col md={7} className={cx("p-4 d-flex justify-content-start align-items-center headRow2")}>
                        <h2 className={cx("text-white")}>About Us</h2>
                    </Col>
                </Row>
    
                <Row className={cx("d-flex justify-content-around py-4")}>
                    <Col md={3}>
                        <Card className="rounded-0 shadow-sm">
                            <Card.Header className="bg-primary2 text-white rounded-0">About Us</Card.Header>
                            <Card.Body>
                                <Nav  defaultActiveKey="introduction" onSelect={this.handleTabUpdate} className="flex-column">
                                    <Nav.Link eventKey="introduction">Introduction</Nav.Link>
                                    <Nav.Link eventKey="leadership">Leadership</Nav.Link>
                                    <Nav.Link eventKey="mission">Vision & Mission</Nav.Link>
                                    <Nav.Link eventKey="proile">College Profile</Nav.Link>
                                    <Nav.Link eventKey="history">College History</Nav.Link>
                                    <Nav.Link eventKey="recognition">Affiliaton & Recognization</Nav.Link>
                                    <Nav.Link eventKey="corevalues">Institute Core Values</Nav.Link>
                                    <Nav.Link eventKey="codeofconduct" href={ codeofconduct } target="_blank">Code of Conduct</Nav.Link>
                                    <Nav.Link eventKey="infrastructure">Infrastructure & Facilities</Nav.Link>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
    
                    <Col md={9}>
                        <Card className="rounded-0 shadow-sm">
                            <Card.Body>
                                {content}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutUs;