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

import activities from '../../assets/docs/bsc-activities.pdf';
import physics from '../../assets/docs/PhysicsDepartment.pdf';
import chemistry from '../../assets/docs/Chemistry.pdf';
import botany from '../../assets/docs/Botany.pdf';

import softskill from '../../assets/img/softskill/bscreg/Softskill development BSC Regular.pdf';

class Bsc extends Component {

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
                            B.Sc. is a graduation course of 3 years duration having 6 semesters. The course teaches the students about the basic and intermediate level concepts in the domain of Science theory. 
                        </p>
                        <h6>Departments</h6>
                        <ul>
                            <li>
                                <a href={physics} target="_blank">Department of Physics</a>
                            </li>
                            <li>
                                <a href={chemistry} target="_blank">Department of Chemistry</a>
                            </li>
                            <li>
                                <a href={botany} target="_blank">Department of Botany</a>
                            </li>
                        </ul>
                        <p>
                            <span className={cx("font-weight-bold")}>Eligibility : </span>
                            H.S.C. (10+2) or its equivalent Examination with English with any three science subjects such as Physics, Chemistry, Biology, Mathematics, Geography, Geology, etc.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Duration : </span>
                            3 Years
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Intake : </span>
                            120 Students
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
                        <h5>Scope for Higher Studies after B.Sc</h5>
                        <p>
                        There are many higher studies options for those who have pursued B.Sc. Higher studies will help the students to get placed in better positions and will improve their remuneration. Some of those options are given below.
                        </p>
                        <ul>
                            <li>M.Sc.</li>
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
                                    <th className="align-top">Name</th>
                                    <th className="align-top">Designation</th>
                                    <th className="align-top">Qualification</th>
                                    <th className="align-top">Department</th>
                                    <th className="align-top">Experience (Years)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Aparna V. Kedari </td>
                                    <td>Assistant Professor [HOD Sci. Dept.] </td>
                                    <td>M.Sc.(Organic Chemistry), SET</td>
                                    <td>Chemistry</td>
                                    <td>9.5</td>
                                </tr>
                                <tr>
                                    <td>Dr. Shilpa A. Mirikar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Physics), M.Sc.(Mathematics), B.Ed., Ph.D.</td>
                                    <td>Physics</td>
                                    <td>16.5</td>
                                </tr>
                                <tr>
                                    <td>Amruta S. Mahangare</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Physics)</td>
                                    <td>Physics</td>
                                    <td>4.5 Sr .College & 4  Years Jr.College & 3 years Engineering College</td>
                                </tr>
                                <tr>
                                    <td>Jayashri B. Joshi</td>
                                    <td>Assistant Professor </td>
                                    <td>M.Sc.(Mathematics), B.Ed.</td>
                                    <td>Mathematics</td>
                                    <td>8.5</td>
                                </tr>
                                <tr>
                                    <td>Netra N. Patil</td>
                                    <td>Assistant Professor </td>
                                    <td>M.Sc.(Statistics)</td>
                                    <td>Statistics</td>
                                    <td>4.5 Teaching &(3.5 Industrial  Experience</td>
                                </tr>
                                <tr>
                                    <td>Anjali H. Aranke</td>
                                    <td>Assistant Professor </td>
                                    <td>M.Sc.(Analytical Chemistry).B.Ed</td>
                                    <td>Chemistry</td>
                                    <td>2.5 Years Teaching &(3  Years Industrial</td>
                                </tr>
                                <tr>
                                    <td>Devayani D. Waghmare</td>
                                    <td>Assistant Professor </td>
                                    <td>M.Sc.(Mathematics)</td>
                                    <td>Mathematics</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Netra N. Patil</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Statistics) </td>
                                    <td>Statistics</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Tejashree S. Sonawane</td>
                                    <td>Assistant Professor </td>
                                    <td>M.Sc.(Zoology)</td>
                                    <td>Zoology</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Dr. Varsha S. Nimbalkar</td>
                                    <td>Assistant Professor </td>
                                    <td>M.Sc. (Botany) Ph. D. </td>
                                    <td>Botany  </td>
                                    <td>6 Months (Teaching)& 7(Research)</td>
                                </tr>
                                <tr>
                                    <td>Regude S.A</td>
                                    <td>Assistant Professor </td>
                                    <td>M.A English, SET</td>
                                    <td>English</td>
                                    <td>4.5</td>
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
                                    <ListGroup.Item>ICT Enabled Classroom</ListGroup.Item>
                                    <ListGroup.Item>Google Classroom</ListGroup.Item>
                                    <ListGroup.Item>What's Application</ListGroup.Item>
                                    <ListGroup.Item>Computer Softwares</ListGroup.Item>
                                    <ListGroup.Item>GM counter</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Study Material</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Videos & PPTs</ListGroup.Item>
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
                window.locationb = "/achievements/chemistry";
                break;
            case 'apply': 
                content = (
                    <Hoc>
                        <p>
                            <a href={softskill}>Click here for Softskill development BSC Regular.pdf</a>
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
                        <h3>Bachelor of Science (B.Sc.) - Regular</h3>
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

export default Bsc;