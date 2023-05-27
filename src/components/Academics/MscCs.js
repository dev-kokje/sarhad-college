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

class MscCs extends Component {

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
                        M.Sc in Computer Science is a post-graduation course of 2 years duration having 4 semesters. The course teaches the students about the higher level concepts in the domain of Computer Science theory.
                        </p>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>First Year</td>
                                    <td>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus%202019/M.Sc.%20Computer%20Science%20%20(Part-I)%20%20%20(For%20Colleges)_19.092019.pdf">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2020/M.Sc.%20(Part-II)%20(Computer%20Science)%20(for%20Colleges)_18.062020.pdf">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5>Scope for Higher Studies after M.Sc(CS)</h5>
                        <p>
                        There are many higher studies options for those who have pursued M.Sc in Computer Science. Higher studies will help the students to get placed in better positions and will improve their remuneration. Some of those options are given below.
                        </p>
                        <ul>
                            <li>M.S. in foreign universities</li>
                            <li>M.Phil in Computer Science</li>
                            <li>M.Phil in Computer Application</li>
                            <li>M.Phil in Computer Management</li>
                            <li>Ph.D in Computer Science</li>
                            <li>Ph.D in Computer Management</li>
                            <li>Ph.D in Computer Science and Applications</li>
                            <li>Ph.D in Computer and Information Science</li>
                            <li>M.Tech in Computer Science (various streams)</li>
                        </ul>
                        <h5>Eligibility</h5>
                        <p>
                        Bachelor of Computer Science (BCS) with 50% marks College and 45% marks for Reserved category.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Duration : </span>
                            2 year
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Intake : </span>
                            60 Students
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
                                    <td>Dr. Shilpa A. Mirikar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Phy), M.Sc.(Math), B.Ed., Ph.D(Material Science)</td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Swati Divatankar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Electronics), SET, NET(JRF)</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Dr. Anupama Watkar</td>
                                    <td>Assistant Professor</td>
                                    <td>B.Ed., Ph.D(English)</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Fatima Tamboli</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS), SET, NET</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Sonali Sagar Gholve</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS), SET, M.Com</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Sheetal Shinde</td>
                                    <td>Assistant Professor</td>
                                    <td>MCA</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Kalyani Deshmukh</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Maths), B.Ed.</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Shwetangee Khaire</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS)</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Neha Patil</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Statistics)</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Vaishnavi Lokhande</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS)</td>
                                    <td>7 Months</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Lekhana Ningappa Sawkar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS)</td>
                                    <td>5 Months</td>
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
                window.location = "/achievements/science";
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
                        <h3>M.Sc.(Computer Science)</h3>
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

export default MscCs;