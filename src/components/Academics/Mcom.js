import React, { Component } from 'react';
import cx from 'classnames'
import { 
    Row, 
    Col, 
    Nav, 
    ListGroup, 
    Table,
    Image 
} from 'react-bootstrap';
import Hoc from '../../Hoc/Hoc';

import comm1 from '../../assets/img/comm1.jpg';
import comm2 from '../../assets/img/comm2.jpg';

import S1 from '../../assets/docs/MCOM-S1.pdf'
import S2 from '../../assets/docs/MCOM-S2.pdf'
import S3 from '../../assets/docs/MCOM-S3.pdf'
import S4 from '../../assets/docs/MCOM-S4.pdf'

import sken1 from '../../assets/img/softskill/commerce/Banking ppt.jpg';
import sken2 from '../../assets/img/softskill/commerce/GROUP presentation.jpg';
import sken3 from '../../assets/img/softskill/commerce/Gst 1.png';
import sken4 from '../../assets/img/softskill/commerce/model presentation.jpeg';
import sken5 from '../../assets/img/softskill/commerce/Research Paper.jpeg';
import sken61 from '../../assets/img/softskill/commerce/Resume writing1.jpg';
import sken62 from '../../assets/img/softskill/commerce/resume writing2.jpg';
import sken71 from '../../assets/img/softskill/commerce/Tally 3.jpeg';
import sken72 from '../../assets/img/softskill/commerce/Tally 4.jpeg';
import sken73 from '../../assets/img/softskill/commerce/Tally.jpeg';

class Mcom extends Component {

    constructor(props) {
        super(props)
        this.handleTabUpdate = this.handleTabUpdate.bind(this)
        this.state = {
            tab: "overview"
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
            case "overview": 
                content = (
                    <Hoc>
                        <p>
                            M.Com is a Post-graduation course of 2 years duration having Semester Pattern (CBCS system). Specialization subject available in Advanced Accounting & Taxation, Commercial Law and Practices, Advanced Cost Accounting & Cost system, Business Administration, Advanced Banking & Finance, Advanced Marketing. The course teaches the students about the  higher level concepts in the domain of Commerce.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Eligibility : </span>
                            Students who have passed any degree of this university OR any other recognized university shall be admitted to M.Com. course.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Duration : </span>
                            2 Years
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Intake : </span>
                            60 Students
                        </p>
                        <span className={cx("font-weight-bold")}>Syllabus : </span>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>First Semester</td>
                                    <td>
                                        <p>
                                            <a href={S1}>Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Semester</td>
                                    <td>
                                        <p>
                                            <a href={S2}>Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Third Semester</td>
                                    <td>
                                        <p>
                                            <a href={S3}>Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fourth Semester</td>
                                    <td>
                                        <p>
                                            <a href={S4}>Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5>Scope for Higher Studies after M.Com</h5>
                        <ul>
                            <li>
                                <p>After their Post Graduation, they may do M.Phil or Ph.D. and take teaching as their career in higher education institutions like Degree colleges and Universities. </p>
                            </li>
                            <li>
                                <p>Other Career Options: CA, CMA, CS, MPSC, UPSC, Banking Services, Insurance Sectors, Marketing,  Stock Exchange Services, Tax Consultancy, Management & Planning, Entrepreneurship, Law etc. </p>
                            </li>
                        </ul>
                    </Hoc>
                )
                break;
            case 'eligibility': 
                content = (
                    <Hoc>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Qualification</th>
                                    <th>Experience (Years)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dr.Lakde Sheetal Deobaji</td>
                                    <td>Head Of Department</td>
                                    <td>PHD, M.PHIL, M.COM, M.B.A.</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Sayali Deepak Patil</td>
                                    <td>Assistant Professor</td>
                                    <td>SET, M.COM, B.ED, GDC&A</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Sangita Vikas Ghuge</td>
                                    <td>Assistant Professor</td>
                                    <td>SET, M.COM, G.D.C.& A, CA INTER</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Hoc>
                );
                break;
            case 'facilities': 
                content = (
                    <Hoc>
                        <Row>
                            <Col md={4}>
                                <h5>Infrastructure</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Computer Lab 1 & 2</ListGroup.Item>
                                    <ListGroup.Item>Classrooms</ListGroup.Item>
                                    <ListGroup.Item>Library</ListGroup.Item>
                                    <ListGroup.Item>E-Library</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Equipments</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Computers</ListGroup.Item>
                                    <ListGroup.Item>Printers</ListGroup.Item>
                                    <ListGroup.Item>Smart Board Classroom</ListGroup.Item>
                                    <ListGroup.Item>Google Classroom</ListGroup.Item>
                                    <ListGroup.Item>Whatsapp</ListGroup.Item>
                                    <ListGroup.Item>Computer Softwares</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                        </Row>
                    </Hoc>
                );
                break;
            case 'syllabus': 
                window.location = "/achievements/commerce";
                break;
            case 'apply': 
                content = (
                    <Hoc>
                        <Row>
                            <Col md="4">
                                <p>Banking ppt</p>
                                <Image src={sken1} thumbnail/>
                            </Col>
                            <Col md="4">
                                <p>GROUP presentation</p>
                                <Image src={sken2} thumbnail/>
                            </Col>
                            <Col md="4">
                                <p>Gst Webinar</p>
                                <Image src={sken3} thumbnail/>
                            </Col>
                            <Col md="4">
                                <p>model presentation</p>
                                <Image src={sken1} thumbnail/>
                            </Col>
                        </Row>
                        <Row>
                            <p>Resume Writing</p>
                        </Row>
                        <Row>
                            <Col md="4">
                                <Image src={sken61} thumbnail/>
                            </Col>
                            <Col md="4">
                                <Image src={sken62} thumbnail/>
                            </Col>
                        </Row>
                        <Row>
                            <p>Tally Workshop</p>
                        </Row>
                        <Row>
                            <Col md="4">
                                <Image src={sken71} thumbnail/>
                            </Col>
                            <Col md="4">
                                <Image src={sken72} thumbnail/>
                            </Col>
                            <Col md="4">
                                <Image src={sken73} thumbnail/>
                            </Col>
                        </Row>
                    </Hoc>
                );
                break;    
            default: 
                content = (
                    <h5>No Content</h5>
                )
        }


        return (
            <Hoc>
                <Row className={cx("my-3")}>
                    <Col md={12}>
                        <h3>Master of Commerce (M.Com.)</h3>
                    </Col>
                </Row>
                <Row className={cx("border bg-white")}>
                    <Col md={12} className={cx("bg-primary2 text-white py-1")}>
                        <Nav justify variant="pills" defaultActiveKey="overview" onSelect={this.handleTabUpdate}>
                            <Nav.Item>
                                <Nav.Link className={cx("text-white")} eventKey="overview">Overview</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={cx("text-white")} eventKey="eligibility">Staff</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={cx("text-white")} eventKey="facilities">Facilities</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={cx("text-white")} eventKey="syllabus">Activities</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={cx("text-white")} eventKey="apply">Skill Enhancement Courses</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={12} className={cx("p-4 font-md")}>
                        {content}
                    </Col>
                </Row>
            </Hoc>
        )
    }
}

export default Mcom;