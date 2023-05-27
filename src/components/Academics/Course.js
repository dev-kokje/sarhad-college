import React, { Component } from 'react';
import cx from 'classnames'
import { 
    Row, 
    Col, 
    Nav, 
    ListGroup, 
    Table 
} from 'react-bootstrap';
import Hoc from '../../Hoc/Hoc';

class Course extends Component {

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
                            B.Sc in Computer Science is a graduation course of 3 years duration having first year annual pattern and 4 semesters. The course teaches the students about the basic and intermediate level concepts in the domain of Computer Science theory.
                        </p>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>First Year</td>
                                    <td>
                                        <p>
                                            B.Sc in Computer Science is a graduation course of 3 years duration having first year annual pattern and 4 semesters.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            B.Sc in Computer Science is a graduation course of 3 years duration having first year annual pattern and 4 semesters.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Third Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            B.Sc in Computer Science is a graduation course of 3 years duration having first year annual pattern and 4 semesters.
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5>Scope for Higher Studies after B.Sc(CS)</h5>
                        <p>
                            There are many higher studies options for those who have pursued B.Sc in Computer Science. Higher studies will help the students to get placed in better positions and will improve their remuneration. Some of those options are given below.               
                        </p>
                        <ul>
                            <li>M.Sc. Computer Science</li>
                            <li>M.C.A.(Management)</li>
                            <li>M.C.A.(Science)</li>
                        </ul>
                        <h5>Eligibility</h5>
                        <p>
                            H.S.C.(10+2) Science Stream with Mathematics or its equivalent Examination.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Duration : </span>
                            3 Years
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Intake : </span>
                            80 Students
                        </p>
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
                                    <td>Prof. Anil Kamble</td>
                                    <td>Head Of Dept. (Computer Science)</td>
                                    <td>PHD, MSC(CS)</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>Prof. Anil Kamble</td>
                                    <td>Head Of Dept. (Computer Science)</td>
                                    <td>PHD, MSC(CS)</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>Prof. Anil Kamble</td>
                                    <td>Head Of Dept. (Computer Science)</td>
                                    <td>PHD, MSC(CS)</td>
                                    <td>16</td>
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
                                    <ListGroup.Item>Lecture Hall 1 (60 Students)</ListGroup.Item>
                                    <ListGroup.Item>Lecture Happ 2 (60 Students)</ListGroup.Item>
                                    <ListGroup.Item>Computer Lab 1 (30 Computers)</ListGroup.Item>
                                    <ListGroup.Item>Computer Lab 2 (30 Computers)</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Equipments</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>60 High Configured Computers</ListGroup.Item>
                                    <ListGroup.Item>HP Laser Jet Printers</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Study Material</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>500+ Technical Reference Books</ListGroup.Item>
                                    <ListGroup.Item>Research Papers</ListGroup.Item>
                                    <ListGroup.Item>Previous Question Papers</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                        </Row>
                    </Hoc>
                );
                break;
            case 'syllabus': 
                content = (
                    <Hoc>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Academic Year</th>
                                    <th>Activities</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>First Year</td>
                                    <td>
                                        <ul>
                                            <li>Python Workshop</li>
                                            <li>Career Guidance Workshop</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <ul>
                                            <li>Python Workshop</li>
                                            <li>Career Guidance Workshop</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Third Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <ul>
                                            <li>Python Workshop</li>
                                            <li>Career Guidance Workshop</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Hoc>
                );
                break;
            case 'apply': 
                content = (
                    <Hoc>
                        <p>
                            <span className={cx("font-weight-bold")}>Manual : </span>
                            please contact to office
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Email : </span>
                            sarhadcollege@gmail.com
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Website : </span>
                            <a href="http://sarhad.org/" target="_blank">Apply Now</a>
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Documents Required For Admission : </span>
                            <ul>
                                <li>12TH ORIGNAL MARKSHEET & 5 XEROX</li>
                                <li>12TH ORIGNAL L.C & 5 XEROX</li>
                                <li>5 PHOTOGRAPHS</li>
                                <li>FOR OTHER STATE STUDENT DOMACILE CERTIFICATE IS COMPULSARY</li>
                                <li>CAST CERTIFICATE IS COMPULSORY</li>
                                <li>GAP CERTIFICATE(AS REQUIREMENT)</li>
                            </ul>
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Documents Required For Re-Admission (2nd & 3rd Year) : </span>
                            <ul>
                                <li>1ST YEAR/2ND YEAR MARKSHEET XEROX</li>
                                <li>2 PHOTOGRAPHS</li>
                            </ul>
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Documents Required For Scholarship Students : </span>
                            <ul>
                                <li>CASTE CERTIFICATE</li>
                                <li>AADHAR CARD XEROX</li>
                                <li>NON-CREAMYLAIR CERTIFICATE( OBC,VJNT SBC)</li>
                                <li>BANK PASS BOOK(NATIONALISE BANK)</li>
                                <li>RATION CARD</li>
                                <li>BONAFIDE CERTIFICATE</li>
                                <li>GAP CERTIFICATE( IF REQUIRED)</li>
                            </ul>
                        </p>
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
                        <h3>B.Sc.(Computer Science)</h3>
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
                                <Nav.Link className={cx("text-white")} eventKey="apply">Useful Links</Nav.Link>
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

export default Course;