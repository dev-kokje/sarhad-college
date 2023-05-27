import React, { Component } from 'react'
import cx from 'classnames'
import { 
    Container, 
    Row, 
    Col, 
    Nav,
    Card,
    Accordion
} from 'react-bootstrap'

import Criteria1 from '../components/AQAR/Criteria1';
import Criteria2 from '../components/AQAR/Criteria2';
import Criteria3 from '../components/AQAR/Criteria3';
import Criteria4 from '../components/AQAR/Criteria4';
import Criteria5 from '../components/AQAR/Criteria5';
import Criteria6 from '../components/AQAR/Criteria6';
import Criteria7 from '../components/AQAR/Criteria7';
import IqacCell from '../components/AQAR/IqacCell';

import Criteria12021 from '../components/AQAR_20_21/Criteria1_20_21';
import Criteria22021 from '../components/AQAR_20_21/Criteria2_20_21';
import Criteria32021 from '../components/AQAR_20_21/Criteria3_20_21';
import Criteria42021 from '../components/AQAR_20_21/Criteria4_20_21';
import Criteria52021 from '../components/AQAR_20_21/Criteria5_20_21';
import Criteria62021 from '../components/AQAR_20_21/Criteria6_20_21';
import Criteria72021 from '../components/AQAR_20_21/Criteria7_20_21';

import Criteria12122 from '../components/AQAR_21_22/Criteria1_21_22';
import Criteria22122 from '../components/AQAR_21_22/Criteria2_21_22';
import Criteria32122 from '../components/AQAR_21_22/Criteria3_21_22';
import Criteria42122 from '../components/AQAR_21_22/Criteria4_21_22';
import Criteria52122 from '../components/AQAR_21_22/Criteria5_21_22';
import Criteria62122 from '../components/AQAR_21_22/Criteria6_21_22';
import Criteria72122 from '../components/AQAR_21_22/Criteria7_21_22';

import actionReport2022 from '../assets/docs/aqar2022/aq22_MinutesofMeeting.pdf';
import actionReport2021 from '../assets/docs/aqar2021/IQAC Meetings 20-21 final changed.pdf';
import actionReport from '../assets/docs/iqac/Minutes of meeting and action taken report of IQAC 2019-20.pdf';
import sssreport from '../assets/docs/iqac/SSR report of First Cycle.pdf';
import aqarreport from '../assets/docs/aqar2021/AQAR Report.pdf';


class Iqac extends Component {

    constructor(props) {
        super(props);
        this.handleTabUpdate = this.handleTabUpdate.bind(this)
        var tabs = props.path == null ? "iqaccell" : props.path;
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

        let content;

        switch(this.state.tab) {
            case "actionreport":
            case "aqarreport":
            case "sssreport":
            case "iqaccell":
                content= (
                    <IqacCell/>
                );
                break;
            case "criteria1": 
                content = (
                    <Criteria1/>
                );
                break;
            case "criteria2":
                content = (
                    <Criteria2/>
                );
                break;
            case "criteria3":
                content = (
                    <Criteria3/>
                );
                break;
            case "criteria4":
                content = (
                    <Criteria4/>
                );
                break;
            case "criteria5":
                content = (
                    <Criteria5/>
                );
                break;
            case "criteria6":
                content = (
                    <Criteria6/>
                );
                break;
            case "criteria7":
                content = (
                    <Criteria7/>
                );
                break;
            case "criteria1_20_21": 
                content = (
                    <Criteria12021/>
                );
                break;
            case "criteria2_20_21":
                content = (
                    <Criteria22021/>
                );
                break;
            case "criteria3_20_21":
                content = (
                    <Criteria32021/>
                );
                break;
            case "criteria4_20_21":
                content = (
                    <Criteria42021/>
                );
                break;
            case "criteria5_20_21":
                content = (
                    <Criteria52021/>
                );
                break;
            case "criteria6_20_21":
                content = (
                    <Criteria62021/>
                );
                break;
            case "criteria7_20_21":
                content = (
                    <Criteria72021/>
                );
                break;
            case "criteria1_21_22": 
                content = (
                    <Criteria12122/>
                );
                break;
            case "criteria2_21_22":
                content = (
                    <Criteria22122/>
                );
                break;
            case "criteria3_21_22":
                content = (
                    <Criteria32122/>
                );
                break;
            case "criteria4_21_22":
                content = (
                    <Criteria42122/>
                );
                break;
            case "criteria5_21_22":
                content = (
                    <Criteria52122/>
                );
                break;
            case "criteria6_21_22":
                content = (
                    <Criteria62122/>
                );
                break;
            case "criteria7_21_22":
                content = (
                    <Criteria72122/>
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
                <Row className="d-none d-md-flex">
                    <Col md={5} className="d-flex justify-content-center align-items-center headRow1">
                        <h2 className="text-white">IQAC</h2>
                    </Col>
                    <Col md={7} className="headRow2">
                        
                    </Col>
                </Row>
                <Row className="d-md-none">
                    <Col md={7} className="p-4 d-flex justify-content-start align-items-center headRow2">
                        <h2 className="text-white">IQAC</h2>
                    </Col>
                </Row>


                <Row className="p-4 d-flex justify-content-around">
                    <Col md={3}>
                        <Card className="rounded-0 shadow-sm">
                            <Card.Header className="bg-primary2 text-white rounded-0">IQAC</Card.Header>
                            <Card.Body>
                                <Nav defaultActiveKey="iqaccell" onSelect={this.handleTabUpdate} className="flex-column">
                                    <Nav.Link eventKey="iqaccell">IQAC Cell</Nav.Link>

                                    <Accordion className="mx-2 my-2 border-bottom border-none">
                                        <Card className=''>
                                            <Accordion.Toggle as={Card.Header} eventKey="0" className={cx("bg-primary2 text-white cursor-pointer")}>
                                                AQAR Year 2019-20
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className='border-0'>
                                                    <Nav defaultActiveKey="iqaccell" onSelect={this.handleTabUpdate} className="flex-column">
                                                        <Nav.Link eventKey="actionreport" href={ actionReport } target="_blank">Minutes of Meeting and Action Taken Report of IQAC 2019-20</Nav.Link>
                                                        <Nav.Link eventKey="aqarreport" href={ aqarreport } target="_blank">AQAR Report 2019-20</Nav.Link>
                                                        <Nav.Link eventKey="sssreport" href={ sssreport } target="_blank">Self Study Report</Nav.Link>
                                                        <Nav.Link eventKey="criteria1">Criteria 1 - Curricular Aspects</Nav.Link>
                                                        <Nav.Link eventKey="criteria2">Criteria 2 - Teaching- Learning and Evaluation</Nav.Link>
                                                        <Nav.Link eventKey="criteria3">Criteria 3 - Research, Innovations and Extension</Nav.Link>
                                                        <Nav.Link eventKey="criteria4">Criteria 4 - Infrastructure and Learning Resources</Nav.Link>
                                                        <Nav.Link eventKey="criteria5">Criteria 5 - Student Support and Progression</Nav.Link>
                                                        <Nav.Link eventKey="criteria6">Criteria 6 - Governance, Leadership and Management</Nav.Link>
                                                        <Nav.Link eventKey="criteria7">Criteria 7 - Institutional Values and Best Practices</Nav.Link>
                                                    </Nav>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className='my-1'>
                                            <Accordion.Toggle as={Card.Header} eventKey="1" className={cx("bg-primary2 text-white cursor-pointer")}>
                                                AQAR Year 2020-21
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <Nav defaultActiveKey="iqaccell" onSelect={this.handleTabUpdate} className="flex-column">
                                                        <Nav.Link eventKey="actionreport" href={ actionReport2021 } target="_blank">Minutes of Meeting and Action Taken Report of IQAC 2020-21</Nav.Link>
                                                        <Nav.Link eventKey="criteria1_20_21">Criteria 1 - Curricular Aspects</Nav.Link>
                                                        <Nav.Link eventKey="criteria2_20_21">Criteria 2 - Teaching, Learning and Evaluation</Nav.Link>
                                                        <Nav.Link eventKey="criteria3_20_21">Criteria 3 - Research, Innovations and Extension</Nav.Link>
                                                        <Nav.Link eventKey="criteria4_20_21">Criteria 4 - Infrastructure and Learning Resources</Nav.Link>
                                                        <Nav.Link eventKey="criteria5_20_21">Criteria 5 - Student Support and Progression</Nav.Link>
                                                        <Nav.Link eventKey="criteria6_20_21">Criteria 6 - Governance, Leadership and Management</Nav.Link>
                                                        <Nav.Link eventKey="criteria7_20_21">Criteria 7 - Institutional Values and Best Practices</Nav.Link>  
                                                    </Nav>  
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className='my-1'>
                                            <Accordion.Toggle as={Card.Header} eventKey="2" className={cx("bg-primary2 text-white cursor-pointer")}>
                                                AQAR Year 2021-22
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <Nav defaultActiveKey="iqaccell" onSelect={this.handleTabUpdate} className="flex-column">
                                                        <Nav.Link eventKey="actionreport" href={ actionReport2022 } target="_blank">Minutes of Meeting and Action Taken Report of IQAC 2021-22</Nav.Link>
                                                        <Nav.Link eventKey="criteria1_21_22">Criteria 1 - Curricular Aspects</Nav.Link>
                                                        <Nav.Link eventKey="criteria2_21_22">Criteria 2 - Teaching, Learning and Evaluation</Nav.Link>
                                                        <Nav.Link eventKey="criteria3_21_22">Criteria 3 - Research, Innovations and Extension</Nav.Link>
                                                        <Nav.Link eventKey="criteria4_21_22">Criteria 4 - Infrastructure and Learning Resources</Nav.Link>
                                                        <Nav.Link eventKey="criteria5_21_22">Criteria 5 - Student Support and Progression</Nav.Link>
                                                        <Nav.Link eventKey="criteria6_21_22">Criteria 6 - Governance, Leadership and Management</Nav.Link>
                                                        <Nav.Link eventKey="criteria7_21_22">Criteria 7 - Institutional Values and Best Practices</Nav.Link>  
                                                    </Nav>  
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
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

export default Iqac;