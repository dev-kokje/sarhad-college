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

import sken1 from '../../assets/img/softskill/bbaca/Blind Programming 2472019.jpg';
import sken2 from '../../assets/img/softskill/bbaca/Computer Literacy Day  3 Dec 2019.jpg';
import sken3 from '../../assets/img/softskill/bbaca/Guest lecture 3-8-2019.jpg';
import sken4 from '../../assets/img/softskill/bbaca/Guest lecture on preparation on research paper 8-8-2019.jpg';
import sken5 from '../../assets/img/softskill/bbaca/Model competition 20-9-2019.jpg';
import sken6 from '../../assets/img/softskill/bbaca/PPT presentation competition on Database Models 17-7-2019.jpg';
import sken7 from '../../assets/img/softskill/bbaca/Sarhad Technofest 21-12-2019.jpg';
import sken8 from '../../assets/img/softskill/bbaca/Inter collegiate ELearning poster competitions 23 May 2020.pdf';

class Bbaca extends Component {

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
                        BBA(CA) previously known as B.C.A Bachelor of Computer Application is an under- graduate course of 3 years duration having 6 semesters. The course teaches the students about the basic concepts of programming languages and its applications with complementary knowledge related to management and accounting. This degree course is best option which encompasses the entry point for all streams students to make a career in computers.
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
                        <h5>Scope for Higher Studies after B.B.A.(CA)</h5>
                        <p>
                        There are many higher studies options for those who have pursued BBA-(CA). Higher studies will help the students to get placed in better positions and will improve their remuneration. Some of those options are given below.
                        </p>
                        <ul>
                            <li>MCA in Computer Management</li>
                            <li>MCA in Computer Science</li>
                            <li>Master in Business Administration</li>
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
                                    <td>Asst. Prof. Rupali Pawar</td>
                                    <td>Head of Department</td>
                                    <td>MCA, Pursuing Ph.D.</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Komal Wanshiv</td>
                                    <td>Assistant Professor</td>
                                    <td>MCA NET</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Ramkaur Ramgadia</td>
                                    <td>Assistant Professor</td>
                                    <td>MCA</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Sayali Patil</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Com B. Ed, SET</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Netra Patill</td>
                                    <td>Assistant Professor</td>
                                    <td>MBA (Finance) NET. JRF</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Bhagyshree Dhole</td>
                                    <td>Assistant Professor</td>
                                    <td>MBA (Finance) Pursuing Ph.D.</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Netra Patil</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Statistics)</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Devyani Waghmare</td>
                                    <td>Assistant Professor</td>
                                    <td>Msc Mathematics</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Dr.Rajashree Shedge</td>
                                    <td>Assistant Professor</td>
                                    <td>M.A. (American English), B.Ed.(English), LLM, Diploma In Spanish </td>
                                    <td>22</td>
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
                window.location = "/achievements/bbaca"; 
                content = (
                    <Hoc>
                        <p>In academic year 2019-20, Asst. Prof. Rupali Pawar and Asst. Prof. Komal Wanshiv faculties from BBA (CA) deoartment has awarded as “Aadarsh Shikshak Samman” from Himmakshara Award on the occasion of Children’s Day on 14th November 2019. The student of TY BBA (CA) Rutuja Khopade has attended 23rd Youth Festival 2020 from 12th to 16th January 2020 at Lucknow.</p>
                        <p>Prasad Ranjane and Aamir Mir students of SYBBA (CA) participated in IT quiz of Garvare College, Pune conducted on 14th August 2019. Aamir Mir student of SYBBA (CA) participated in P.C. Alexzander Speech Competition conducted by Savitribai Phule Pune University, Pune.</p>
                        
                    </Hoc>
                );
                break;
            case 'apply': 
                content = (
                    <Hoc>
                        <Row className="my-4 px-3">
                            <a href={sken8}>Cilck here for Inter collegiate ELearning poster competitions 23 May 2020.pdf</a>
                        </Row>
                        <Row>
                            <Col md="4" className="mt-4">
                                <p>Blind Programming (24-Jul-2019)</p>
                                <Image src={sken1} thumbnail/>
                            </Col>
                            <Col md="4" className="mt-4">
                                <p>Computer Literacy Day (3-Dec-2019)</p>
                                <Image src={sken2} thumbnail/>
                            </Col>
                            <Col md="4" className="mt-4">
                                <p>Guest lecture (3-Aug-2019)</p>
                                <Image src={sken3} thumbnail/>
                            </Col>
                            <Col md="4" className="mt-4">
                                <p>Guest lecture on preparation on research paper (8-Aug-2019)</p>
                                <Image src={sken4} thumbnail/>
                            </Col>
                            <Col md="4" className="mt-4">
                                <p>Model competition (20-Sep-2019)</p>
                                <Image src={sken5} thumbnail/>
                            </Col>
                            
                            <Col md="4" className="mt-4">
                                <p>Sarhad Technofest (21-Dec-2019)</p>
                                <Image src={sken7} thumbnail/>
                            </Col>
                            <Col md="4" className="mt-4">
                                <p>PPT presentation competition on Database Models (17-Jul-2019)</p>
                                <Image src={sken6} thumbnail/>
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
                        <h3>B.B.A. (Computer Application) (old BCA)</h3>
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

export default Bbaca;