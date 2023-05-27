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

import sken1 from '../../assets/img/softskill/bba/1.jpg';
import sken2 from '../../assets/img/softskill/bba/2.jpg';
import sken3 from '../../assets/img/softskill/bba/20191221_085807.jpg';

class Bba extends Component {

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
                        Bachelor of Business Administration (BBA) is a 3 years Graduation Course having 6 semesters. The course teaches the students about the higher level concepts in the domain of Business Administration in multifold specializations as Marketing Management, HRM, and Financial Management. The degree is designed such way to give a broad knowledge of the functional aspects of a company and their interconnection. Many programs incorporate training and practical experience, in the form of case projects, presentations, industrial visits, and interaction with experts from the industry.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Eligibility : </span>
                            H.S.C. (10+2) or its equivalent Examination with 40% marks from any stream. (35% for Reserved category and 40% for Open category candidate as per maharashtra state government rules) and English as one of the Subjects.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Duration : </span>
                            3 Years
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Intake : </span>
                            80 Students
                        </p>
                        <span className={cx("font-weight-bold")}>Syllabus : </span>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>First Year</td>
                                    <td>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus%202019/Forms/AllItems.aspx">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus%202019/Forms/AllItems.aspx">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Third Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus%202019/Forms/AllItems.aspx">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5>Scope for Higher Studies after B.B.A.</h5>
                        <p>
                        There are many higher studies options for those who have pursued BBA. Higher studies will help the students to get placed in better positions. Some of those options are given below.
                        </p>
                        <ul>
                            <li>M.Com in Commerce</li>
                            <li>MBA</li>
                            <li>PGDBM</li>
                            <li>Professional Courses like CA, CMA</li>
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
                                    <td>Dr. Sangeeta Shinde</td>
                                    <td>Vice Principal</td>
                                    <td>MA, BEd, SET, MPhil, PhD (Economics)</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Shreeraj Bhor</td>
                                    <td>Head Of Dept.</td>
                                    <td>M.B.A., M.Com.</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Dr. Chetan Minocha</td>
                                    <td>Assistant Professor</td>
                                    <td>(M. B. A. Marketing & HR (Dual specialization)) Ph.D.</td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Vishakha Rasal</td>
                                    <td>Assistant Professor</td>
                                    <td>M.B.A. (Finance) N.E.T. J.R.F.</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Bhagyshree Dhole</td>
                                    <td>Assistant Professor</td>
                                    <td>MBA ( finance), Ph.D. pursuing</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Dr. Sunil Ukale</td>
                                    <td>Assistant Professor</td>
                                    <td>M.A. (Economics) NET, MBA, Ph.D</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Sayali Patil</td>
                                    <td>Assistant Professor</td>
                                    <td>B.Ed., M.Com, S.E.T</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Sangeeta Ghuge</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Com, SET, CA INTER, GDC&A</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Vaishnavi Lokhande</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS)</td>
                                    <td>1</td>
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
                                    <ListGroup.Item>What's Application</ListGroup.Item>
                                    <ListGroup.Item>Computer Softwares</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Study Material</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Video’s & PPT’s</ListGroup.Item>
                                    <ListGroup.Item>Sample projects</ListGroup.Item>
                                    <ListGroup.Item>Sample algorithms, flowcharts and programs</ListGroup.Item>
                                    <ListGroup.Item>Solved Question Papers</ListGroup.Item>
                                    <ListGroup.Item>MCQ type question bank</ListGroup.Item>
                                    <ListGroup.Item>Practical workbooks & Solved practical problems</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                        </Row>
                    </Hoc>
                );
                break;
            case 'syllabus': 
                window.location = "/achievements/bba";
                break;
            case 'apply': 
                content = (
                    <Hoc>
                        <Row>
                            <Col md="4">
                                <Image src={sken1} thumbnail/>
                                <p>Stall Exhibition</p>
                            </Col>
                            <Col md="4">
                                <Image src={sken2} thumbnail/>
                                <p>Stall Exhibition</p>
                            </Col>
                            <Col md="4">
                                <Image src={sken3} thumbnail/>
                                <p>MBA CET Guidance</p>
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
                        <h3>Bachelor Of Business Administration(BBA)</h3>
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

export default Bba;