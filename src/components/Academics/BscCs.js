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

import sci1 from '../../assets/img/sci1.jpg';
import sci2 from '../../assets/img/sci2.jpg';
import sci3 from '../../assets/img/sci3.jpg';
import sci4 from '../../assets/img/sci4.jpg';

import sken1 from '../../assets/img/softskill/compsci/Blind C Programming_TYBSC CS_27th Aug 2019.jpg';
import sken2 from '../../assets/img/softskill/compsci/Dry run C Programming activity_TYBSC CS_31st July 2019.jpg';
import sken3 from '../../assets/img/softskill/compsci/Guest lecture on Interview Skills_23th Aug 2019.jpg';
import sken4 from '../../assets/img/softskill/compsci/Guest lecture on Project developement_14th Dec 2019.jpg';
import sken5 from '../../assets/img/softskill/compsci/Guidance lecture_SYBSC CS_9th July 2019.jpg';
import sken6 from '../../assets/img/softskill/compsci/Information Browsing activity_TYBSC CS.jpg';
import sken7 from '../../assets/img/softskill/compsci/Logical Reasoning Session_FYBSc CS_28th Aug 2019.jpg';
import sken8 from '../../assets/img/softskill/compsci/Model Competition_FYBSC CS_28th Aug 2019.jpg';
import sken9 from '../../assets/img/softskill/compsci/Participation in Robotics workshop_SYBSC CS_12th Feb 2020.jpg';
import sken10 from '../../assets/img/softskill/compsci/PPT Presentation by students_SYBSC CS_30thSept2019.jpg';
import sken11 from '../../assets/img/softskill/compsci/Winner of intercollegiate poster competition_SYBSC CS_10th Dec 2019.jpg';

class BscCs extends Component {

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
                        <h5>B.Sc.(Computer Science)</h5>
                        <p>
                            B.Sc in Computer Science is a graduation course of 3 years duration having 6 semesters. The course teaches the students about the basic and intermediate level concepts in the domain of Computer Science theory.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Eligibility : </span>
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
                        <span className={cx("font-weight-bold")}>Syllabus : </span>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>First Year</td>
                                    <td>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus%202019/F.Y.B.Sc%20Computer-Science_11.072019.pdf ">Syllabus Link - Computer Science</a>
                                        </p>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus%202019/F.Y.B.Sc.%20(Mathematics)%20(Computer_Science)_10.072019.pdf">Syllabus Link - Mathematics</a>
                                        </p>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus%202019/F.Y.B.Sc.%20Computer%20Science%20(Statistics)_14.082019.pdf">Syllabus Link - Statistics</a>
                                        </p>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus%202019/F.Y.B.Sc.%20Computer%20Science(Electronic%20Science)_12.072019.pdf">Syllabus Link - Electronics</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2020/S.Y.B.Sc.%20(Computer%20Science)_18.062020.pdf">Syllabus Link - Computer Science</a>
                                        </p>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2020/S.%20Y.%20B.%20Sc.%20(Computer%20Science)%20%20Mathematics_18.062020.pdf ">Syllabus Link - Mathematics</a>
                                        </p>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2020/S.Y.B.Sc.%20(Computer%20Science)%20Electronics.pdf">Syllabus Link - Electronics</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Third Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href="http://www.unipune.ac.in/Syllabi_PDF/revised-2015/science/TY-BSc-Computer-Science_25-06-15.pdf">Syllabus Link</a>
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
                        <hr></hr>
                        <h5>M.Sc.(Computer Science)</h5>
                        <p>
                        M.Sc in Computer Science is a post-graduation course of 2 years duration having 4 semesters. The course teaches the students about the higher level concepts in the domain of Computer Science theory.
                        </p>
                        <p>
                        <span className={cx("font-weight-bold")}>Eligibility : </span>
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
                        <span className={cx("font-weight-bold")}>Syllabus : </span>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>Part One</td>
                                    <td>
                                        <p>
                                            <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus%202019/M.Sc.%20Computer%20Science%20%20(Part-I)%20%20%20(For%20Colleges)_19.092019.pdf">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Part Two</td>
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
                                    <td>Asst. Prof. Sonali Sagar Gholve</td>
                                    <td>HOD, Assistant Professor</td>
                                    <td>M.Sc.(CS), SET, M.Com</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Fatima Tamboli</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS), SET, NET</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Sheetal Shinde</td>
                                    <td>Assistant Professor</td>
                                    <td>MCA</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Vaishnavi Lokhande</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS)</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Shwetangee Khaire</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS)</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Lekhana Ningappa Sawkar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(CS)</td>
                                    <td>5 Months</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Swati Divatankar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Electronics), SET, NET(JRF)</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Dr. Shilpa A. Mirikar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Physics), M.Sc.(Mathematics), B.Ed., Ph.D.</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Kalyani Deshmukh</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Mathematics), B.Ed.</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Netra Patil</td>
                                    <td>Assistant Professor</td>
                                    <td>M.Sc.(Statistics)</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Dr. Anupama Watkar</td>
                                    <td>Assistant Professor</td>
                                    <td>B.Ed., Ph.D(English)</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Asst. Prof. Trupti Taru</td>
                                    <td>Assistant Professor</td>
                                    <td>Msc(CS)</td>
                                    <td>1.5</td>
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
                                    <ListGroup.Item>WhatsApp</ListGroup.Item>
                                    <ListGroup.Item>Computer Softwares</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Study Material</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Videos & PPTs</ListGroup.Item>
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
                        <Row>
                            <Col md="4">
                                <p>Blind C Programming_TYBSC CS_27th Aug 2019</p>
                                <Image src={sken1} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>Dry run C Programming activity_TYBSC CS_31st July 2019</p>
                                <Image src={sken2} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>Guest lecture on Interview Skills_23th Aug 2019</p>
                                <Image src={sken3} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>Guest lecture on Project developement_14th Dec 2019</p>
                                <Image src={sken4} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>Guidance lecture_SYBSC CS_9th July 2019</p>
                                <Image src={sken5} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>Information Browsing activity_TYBSC CS</p>
                                <Image src={sken6} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>Logical Reasoning Session_FYBSc CS_28th Aug 2019</p>
                                <Image src={sken7} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>Model Competition_FYBSC CS_28th Aug 2019</p>
                                <Image src={sken8} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>Participation in Robotics workshop_SYBSC CS_12th Feb 2020</p>
                                <Image src={sken9} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>PPT Presentation by students_SYBSC CS_30thSept2019</p>
                                <Image src={sken10} thumbnail />
                            </Col>
                            <Col md="4">
                                <p>Winner of intercollegiate poster competition_SYBSC CS_10th Dec 2019</p>
                                <Image src={sken11} thumbnail />
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
                        <h3>Department of Computer Science</h3>
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

export default BscCs;