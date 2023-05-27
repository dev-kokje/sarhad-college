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

import activities from '../../assets/docs/arts.pdf'
import FYBAMarathi from '../../assets/docs/FYBA-Marathi.pdf'
import SYBAMarathi from '../../assets/docs/SYBA-Marathi.pdf'
import TYBAMarathi from '../../assets/docs/TYBA-Marathi.pdf'
import FYBAEnglish from '../../assets/docs/FYBA-English.pdf'
import SYBAEnglish from '../../assets/docs/SYBA-English.pdf'
import TYBAEnglish from '../../assets/docs/TYBA-English.pdf'
import FYBAEconomics from '../../assets/docs/FYBA-Economics.pdf'
import SYBAEconomics from '../../assets/docs/SYBA-Economics.pdf'
import TYBAEconomics from '../../assets/docs/TYBA-Economics.pdf'
import FYBAHistory from '../../assets/docs/FYBA-History.pdf'
import SYBAHistory from '../../assets/docs/SYBA-History.pdf'
import TYBAHistory from '../../assets/docs/TYBA-History.pdf'
import FYBAHindi from '../../assets/docs/FYBA-Hindi.pdf'
import SYBAHindi from '../../assets/docs/SYBA-Hindi.pdf'
import TYBAHindi from '../../assets/docs/TYBA-Hindi.pdf'

import skene1 from '../../assets/img/softskill/economics/1.JPG';
import skene2 from '../../assets/img/softskill/economics/2.JPG';
import skene3 from '../../assets/img/softskill/economics/3.JPG';
import skene4 from '../../assets/img/softskill/economics/4.JPG';
import skene5 from '../../assets/img/softskill/economics/5.JPG';

import skenm1 from '../../assets/img/softskill/marathi/Debate Comp. 25-7-2019.jpg';
import skenm2 from '../../assets/img/softskill/marathi/Essay Comp.20-8-2019.JPG';
import skenm3 from '../../assets/img/softskill/marathi/Gest Lecturer Positive Personality 31-8-2019.jpg';
import skenm4 from '../../assets/img/softskill/marathi/Hastakshar Comp.24-7-2019.jpg';
import skenm5 from '../../assets/img/softskill/marathi/Marathi Bhasha Din 28 -2-2020 - 1.jpg';
import skenm6 from '../../assets/img/softskill/marathi/Marathi Bhasha sanvardhan pandharvada -10-1-2020.jpg';
import skenm7 from '../../assets/img/softskill/marathi/Marathi Bhasha sanvardhan pandharvada -2-1-2020.jpg';
import skenm8 from '../../assets/img/softskill/marathi/Marathi Bhasha sanvardhan pandharvada -13-1-2020.jpg';
import skenm9 from '../../assets/img/softskill/marathi/Wachan Prerana Din 15-10-2019.jpg';

class Ba extends Component {

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
                            B.A is a graduation course of 3 years duration with 6 semesters. The course teaches the students about the higher level concepts in the domain of arts.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Eligibility : </span>
                            H.S.C. (10+2).
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
                                            <a href={FYBAMarathi}>Syllabus Link - Marathi</a>
                                        </p>
                                        <p>
                                            <a href={FYBAEnglish}>Syllabus Link - English</a>
                                        </p>
                                        <p>
                                            <a href={FYBAEconomics}>Syllabus Link - Economics</a>
                                        </p>
                                        <p>
                                            <a href={FYBAHistory}>Syllabus Link - History</a>
                                        </p>
                                        <p>
                                            <a href={FYBAHindi}>Syllabus Link - Hindi</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href={SYBAMarathi}>Syllabus Link - Marathi</a>
                                        </p>
                                        <p>
                                            <a href={SYBAEnglish}>Syllabus Link - English</a>
                                        </p>
                                        <p>
                                            <a href={SYBAEconomics}>Syllabus Link - Economics</a>
                                        </p>
                                        <p>
                                            <a href={SYBAHistory}>Syllabus Link - History</a>
                                        </p>
                                        <p>
                                            <a href={SYBAHindi}>Syllabus Link - Hindi</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Third Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href={TYBAMarathi}>Syllabus Link - Marathi</a>
                                        </p>
                                        <p>
                                            <a href={TYBAEnglish}>Syllabus Link - English</a>
                                        </p>
                                        <p>
                                            <a href={TYBAEconomics}>Syllabus Link - Economics</a>
                                        </p>
                                        <p>
                                            <a href={TYBAHistory}>Syllabus Link - History</a>
                                        </p>
                                        <p>
                                            <a href={TYBAHindi}>Syllabus Link - Hindi</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5>Scope after B.A.</h5>
                        <ul>
                            <li>Journalism</li>
                            <li>Press Printing</li>
                            <li>Lecturership</li>
                            <li>Content Writing</li>
                            <li>Translater</li>
                            <li>Creative writing</li>
                            <li>HR executive</li>
                        </ul>
                        <hr></hr>
                        <h5>MA English</h5>
                        <p>
                         
                        </p>
                        <p>
                        <span className={cx("font-weight-bold")}>Eligibility : </span>
                            
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Duration : </span>
                            2 years
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Intake : </span>
                            60 Students
                        </p>
                        <span className={cx("font-weight-bold")}>Syllabus : </span>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>First Year</td>
                                    <td>
                                        <p>
                                            <a href="#">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href="#">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5>Scope for Higher Studies after MA English</h5>
                        <p>
                        </p>
                        <ul>
                        </ul>
                        <hr></hr>
                        <h5>MA Economics</h5>
                        <p>
                        
                        </p>
                        <p>
                        <span className={cx("font-weight-bold")}>Eligibility : </span>
                            
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Duration : </span>
                            2 years
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Intake : </span>
                            60 Students
                        </p>
                        <span className={cx("font-weight-bold")}>Syllabus : </span>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>First Year</td>
                                    <td>
                                        <p>
                                            <a href="#">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href="#">Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5>Scope for Higher Studies after MA Economics</h5>
                        <p>
                            
                        </p>
                        <ul>
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
                                    <td>Dr. Sangeeta Shashikant Shinde</td>
                                    <td>Associate Professor, Vice - Principal</td>
                                    <td>M.A(Economics)BEd,SET, MPhil,PhD</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Dr. Vandana Chavan</td>
                                    <td>Assistant Professor, HOD</td>
                                    <td>M.A.Ph.D (Marathi)</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Dr. Sunil Dnyaneshwar Ukale</td>
                                    <td>Assistant Professor</td>
                                    <td>M.A.(Economics), NET, MBA, Ph D. </td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Dr. Anupama Watkar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.A.(English) BEd, Ph. D</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Regude Someshwar Anilkumar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.A. (English), SET, B.Ed.</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Ghongate Dipali Gopalrao </td>
                                    <td>Assistant Professor</td>
                                    <td>M.A (Hindi) B.Ed</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Khare Rima Sudhakar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.A. (History), B.Ed, SET.</td>
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
                                <h5>Facilities</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Free Library </ListGroup.Item>
                                    <ListGroup.Item>Open Gym</ListGroup.Item>
                                    <ListGroup.Item>Playground</ListGroup.Item>
                                    <ListGroup.Item>ICT Enabled Classroom</ListGroup.Item>
                                    <ListGroup.Item>Canteen</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Infrastructure</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Well Equipped Classrooms</ListGroup.Item>
                                    <ListGroup.Item>High speed internet lab and wifi facility</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Study Material</h5>
                                <p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Free e-learning Facilities</ListGroup.Item>
                                    <ListGroup.Item>Competitive Exam Center</ListGroup.Item>
                                    <ListGroup.Item>Career Counselling Cell</ListGroup.Item>
                                    <ListGroup.Item>Sports Facilities</ListGroup.Item>
                                    <ListGroup.Item>PPT Presentation</ListGroup.Item>
                                    <ListGroup.Item>Videos</ListGroup.Item>
                                    <ListGroup.Item>Google Classroom</ListGroup.Item>
                                    <ListGroup.Item>Notes on syllabus</ListGroup.Item>
                                    <ListGroup.Item>E books</ListGroup.Item>
                                    <ListGroup.Item>Text Books</ListGroup.Item>
                                </ListGroup>
                                </p>
                            </Col>
                        </Row>
                    </Hoc>
                );
                break;
            case 'syllabus': 
                window.location = "/achievements/arts";
                break;
            case 'apply': 
                content = (
                    <Hoc>
                        <Row>
                            <p className="text-center font-weight-bold">Department of Economics</p>
                        </Row>
                        <Row>
                            <Col md="4">
                                <Image src={skene1} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <Image src={skene2} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <Image src={skene3} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <Image src={skene4} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <Image src={skene5} thumbnail></Image>
                            </Col>
                        </Row>
                        <Row>
                            <p className="text-center font-weight-bold">Department of Marathi</p>
                        </Row>
                        <Row>
                            <Col md="4">
                                <p>Debate Comp. 25-7-2019</p>
                                <Image src={skenm1} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <p>Essay Comp.20-8-2019</p>
                                <Image src={skenm2} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <p>Gest Lecturer Positive Personality 31-8-2019</p>
                                <Image src={skenm3} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <p>Hastakshar Comp.24-7-2019</p>
                                <Image src={skenm4} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <p>Marathi Bhasha Din 28 -2-2020 - 1</p>
                                <Image src={skenm5} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <p>Marathi Bhasha sanvardhan pandharvada - अभिवाचन 10-1-2020</p>
                                <Image src={skenm6} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <p>Marathi Bhasha sanvardhan pandharvada - घोषवाक्यलेखन स्पर्धा 2-1-2020</p>
                                <Image src={skenm7} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <p>Marathi Bhasha sanvardhan pandharvada - वक्तृत्व स्पर्धा 13-1-2020</p>
                                <Image src={skenm8} thumbnail></Image>
                            </Col>
                            <Col md="4">
                                <p>Wachan Prerana Din 15-10-2019</p>
                                <Image src={skenm9} thumbnail></Image>
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
                        <h3>Bachelor of Arts (B.A.)</h3>
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

export default Ba;