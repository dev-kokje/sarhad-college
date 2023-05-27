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

class BscAn extends Component {

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
                        The Bachelor of Science in Animation is a graduation course of 3 years duration having first year annual pattern and 4 semesters. This course will provide a strong foundation in the fundamentals of Artistic Design, Story Development, Project Management, Digital Content Creation and Portfolio Development. This course will help to gain skills in Computer Animation viz. 3-D Modeling, Character Design, Animation and Game Content Development.
                        </p>
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
                        <h5></h5>
                        <p>
                        
                        </p>
                        <ul>
                            
                        </ul>
                        <h5>Eligibility</h5>
                        <p>
                        a) Higher Secondary School Certificate (10+2) or its equivalent Examination with English with any three science subjects such as Physics, Chemistry, Biology, Mathematics, Geography, biology, etc.

                        b) Three Years Diploma Course of Board of Technical Education conducted by Government of Maharashtra or its equivalent.or

                        c) Higher Secondary School Certificate (10+2) Examination with English and any of the following vocational subjects in technical group of + 2 level (MCVC). e.g. Subjects are. Electrical Maintenance Mechanical Maintenance General Civil Engineering . Electronics Computer Science Information Technology Electronics Technology (J1/J2/J3)

                        d) Qualifying Elementary / Intermediate School level drawing examination is desirable.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Duration : </span>
                            3 Years
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Intake : </span>
                            30 Students
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
                                {/* <tr>
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
                                </tr> */}
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
                                    {/* <ListGroup.Item>Lecture Hall 1 (60 Students)</ListGroup.Item>
                                    <ListGroup.Item>Lecture Happ 2 (60 Students)</ListGroup.Item>
                                    <ListGroup.Item>Computer Lab 1 (30 Computers)</ListGroup.Item>
                                    <ListGroup.Item>Computer Lab 2 (30 Computers)</ListGroup.Item> */}
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Equipments</h5>
                                <p>
                                <ListGroup variant="flush">
                                    {/* <ListGroup.Item>60 High Configured Computers</ListGroup.Item>
                                    <ListGroup.Item>HP Laser Jet Printers</ListGroup.Item> */}
                                </ListGroup>
                                </p>
                            </Col>
                            <Col md={4}>
                                <h5>Study Material</h5>
                                <p>
                                <ListGroup variant="flush">
                                    {/* <ListGroup.Item>500+ Technical Reference Books</ListGroup.Item>
                                    <ListGroup.Item>Research Papers</ListGroup.Item>
                                    <ListGroup.Item>Previous Question Papers</ListGroup.Item> */}
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
                            Data Not Found
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
                        <h3>B.Sc.(Animation)</h3>
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

export default BscAn;