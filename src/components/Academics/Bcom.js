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

import FYBCS1 from '../../assets/docs/FYBCOM-S1.pdf'
import FYBCS2 from '../../assets/docs/FYBCOM-S2.pdf'
import SYBCS3 from '../../assets/docs/SYBCOM-S3.pdf'
import SYBCS4 from '../../assets/docs/SYBCOM-S4.pdf'
import TYBCS from '../../assets/docs/TYBCOM.pdf'

import sken1 from '../../assets/img/softskill/commerce/Banking ppt.jpg';
import sken2 from '../../assets/img/softskill/commerce/GROUP presentation.jpg';

import ssCom1 from '../../assets/img/softskill/commerce/ss_com_1.png';
import ssCom2 from '../../assets/img/softskill/commerce/ss_com_2.png';
import ssCom3 from '../../assets/img/softskill/commerce/ss_com_3.jpg';
import ssCom4 from '../../assets/img/softskill/commerce/ss_com_4.jpg';
import ssCom5 from '../../assets/img/softskill/commerce/ss_com_5.png';
import ssCom6 from '../../assets/img/softskill/commerce/ss_com_6.png';
import ssCom7 from '../../assets/img/softskill/commerce/ss_com_7.jpg';
import ssCom8 from '../../assets/img/softskill/commerce/ss_com_8.png';
import ssCom9 from '../../assets/img/softskill/commerce/ss_com_9.png';
import ssCom10 from '../../assets/img/softskill/commerce/ss_com_10.jpg';
import ssCom11 from '../../assets/img/softskill/commerce/ss_com_11.jpg';
import ssCom12 from '../../assets/img/softskill/commerce/ss_com_12.png';
import ssCom13 from '../../assets/img/softskill/commerce/ss_com_13.jpg';
import ssCom14 from '../../assets/img/softskill/commerce/ss_com_14.png';
import ssCom15 from '../../assets/img/softskill/commerce/ss_com_15.png';
import ssCom16 from '../../assets/img/softskill/commerce/ss_com_16.jpg';
import ssCom17 from '../../assets/img/softskill/commerce/ss_com_17.jpg';
import ssCom18 from '../../assets/img/softskill/commerce/ss_com_18.jpg';
import ssCom19 from '../../assets/img/softskill/commerce/ss_com_19.png';
import ssCom20 from '../../assets/img/softskill/commerce/ss_com_20.png';
import ssCom21 from '../../assets/img/softskill/commerce/ss_com_21.jpg';
import ssCom22 from '../../assets/img/softskill/commerce/ss_com_22.jpg';
import ssCom23 from '../../assets/img/softskill/commerce/ss_com_23.png';
import ssCom24 from '../../assets/img/softskill/commerce/ss_com_24.png';
import ssCom25 from '../../assets/img/softskill/commerce/ss_com_25.png';

class Bcom extends Component {

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
                            B.Com is a graduation course of 3 years duration having Semester Pattern (CBCS system) for First year & Second year and Annual Pattern for Third year. Specialization subject available in Cost Accounting and  Banking & Finance . The course teaches the students about the  higher level concepts in the domain of Commerce.
                        </p>
                        <p>
                            <span className={cx("font-weight-bold")}>Eligibility : </span>
                            H.S.C. (10+2) commerce or its equivalent Examination.
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
                                            <a href={FYBCS1}>Syllabus Link - Sem 1</a>
                                        </p>
                                        <p>
                                            <a href={FYBCS2}>Syllabus Link - Sem 2</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Second Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href={SYBCS3}>Syllabus Link - Sem 3</a>
                                        </p>
                                        <p>
                                            <a href={SYBCS4}>Syllabus Link - Sem 4</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Third Year</td>
                                    <td className={cx("d-flex flex-column")}>
                                        <p>
                                            <a href={TYBCS}>Syllabus Link</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5>Scope for Higher Studies after B.Com.</h5>
                        <ul>
                            <li>
                                <p>
                                    The B.Com. graduates can pursue Post Graduate Studies like M.Com., MBA, MCA.
                                </p>
                            </li>
                            <li>
                                <p>
                                    After their Post Graduation, they may do M.Phil or Ph.D. and take teaching as their career in higher education institutions like Degree colleges and Universities.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Other Career Options: CA, CMA, CS, MPSC, UPSC, Banking Services, Insurance Sectors, Marketing, Company Secretary ship, Stock Exchange Services, Tax Consultancy, Management & Planning, Entrepreneurship, Law etc.
                                </p>
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
                                    <td>Dr. Sheetal Deobaji Lakde</td>
                                    <td>Assistant Professor (Head Of Department)</td>
                                    <td>M.com , M.Phil M.B.A, Ph.D.</td>
                                    <td>11</td>
                                </tr>
                                <tr>
                                    <td>Sayali Deepak Patil</td>
                                    <td>Assistant Professor</td>
                                    <td>M.com, SET , B.Ed  ,GDC&A</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Sangita Vikas Ghuge</td>
                                    <td>Assistant Professor</td>
                                    <td>M.com, SET, G.D.C.& A, CA INTER</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Dr. Pallavi Chetan Patil</td>
                                    <td>Assistant Professor</td>
                                    <td>M.com, B. Ed Ph.D.</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Dr. Sunil  Dnyaneshwar Ukale </td>
                                    <td>Assistant Professor</td>
                                    <td>M.A.(Eco), NET(Eco), MBA (Mkt), Ph.D</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Dr. Anupama  Sagar Watkar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.A(English),Ph.D</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Dr Vandana  Madhav  Chavan</td>
                                    <td>Assistant Professor</td>
                                    <td>MA(Marathi),Ph.D</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Regude Someshwar</td>
                                    <td>Assistant Professor</td>
                                    <td>M.A B.Ed, SET</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Vaishnavi B. Lokhande</td>
                                    <td>Assistant Professor</td>
                                    <td>Msc(cs)</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Devayani Waghmare</td>
                                    <td>Assistant Professor</td>
                                    <td>MSC(Mathematics)</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Sarika Ghadge</td>
                                    <td>Assistant Professor</td>
                                    <td>M.A(Marathi), G.D.C & A, SET,NET,Ph.D(Persuing)</td>
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
                            <Col md="12" style={{textAlign: "center", marginBottom: "5px"}}>
                                <h4>
                                    Activities -ADDs
                                </h4>
                            </Col>
                            <Col md="6">
                                <p>Guest lecture on career in commerce – By Gouri Kulkarni Date- 22-08-19</p>
                                <Image src={ssCom1} thumbnail/>
                            </Col>
                            <Col md="6">
                                <p>Guest Lecture on capital Market --- Bombay Stock Exchange By CA CN Kishore Date-18-12-19</p>
                                <Image src={ssCom2} thumbnail/>
                            </Col>
                            <Col md="6">
                                <p>GGuest lecture Artificial Intelligence Date- 30th August, 2019</p>
                                <Image src={ssCom3} thumbnail/>
                            </Col>
                            <Col md="6">
                                <p>CASE   STUDY –Participative learning- Accounts</p>
                                <Image src={ssCom4} thumbnail/>
                            </Col>
                            <Col md="6">
                                <p>Guest Lecture on capital Market --- Bombay Stock Exchange By CA CN Kishore Date-18-12-19</p>
                                <Image src={ssCom5} thumbnail/>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" style={{textAlign: "center", marginBottom: "5px"}}>
                                <h4>
                                    Professional Courses Offered by Department
                                </h4>
                            </Col>
                            <Col md="6">
                                <p>Tally Certificate Course</p>
                                <Image src={ssCom6} thumbnail/>
                            </Col>
                            <Col md="6">
                                <p>GST Certificate Course</p>
                                <Image src={ssCom7} thumbnail/>
                            </Col>
                            <Col md="6">
                                <p>Online GST and Tally ERP9 Certificate course</p>
                                <Image src={ssCom8} thumbnail/>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" style={{textAlign: "center", marginBottom: "5px", marginTop: "15px"}}>
                                <h4>
                                    Competitions
                                </h4>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <p>Online Debate Competition <br></br>Topic Name- Violent Games should be Banned. <br></br> Date- 24/09/2020 </p>
                                <Image src={ssCom9} thumbnail/>
                                <Image src={ssCom10} thumbnail/>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <p>Advertisement Making Competition<br></br>Topic Name- Chawanprash Of Sanjeevani Company. <br></br>Date: -12/10/2020</p>
                                <Image src={ssCom11} thumbnail/>
                                <Image src={ssCom12} thumbnail/>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <p>Online Drawing Competition<br></br>Topic Name- Impact of Covid-19 on Environment -before and after<br></br>Date: -15/10/2020</p>
                                <Image src={ssCom13} thumbnail/>
                                <Image src={ssCom14} thumbnail/>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <p>Online Intercollegiate Marketing Quiz Competition <br></br>Date: -14/05/2020<br></br><br></br></p>
                                
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <p>Essay Competition <br></br>Topic-- Advantages and Disadvantages of Social Media<br></br>Date: -31/10/2019</p>
                                <Image src={ssCom15} thumbnail/>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <p>Group Presentation Competition <br></br>Topic Name:-Banking and Functions of Banking <br></br>Date: - 29/06/2019</p>
                                <Image src={ssCom16} thumbnail/>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" style={{textAlign: "center", marginBottom: "5px", marginTop: "15px"}}>
                                <h4>
                                    Article / Reaserch Paper Writing
                                </h4>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <Image src={ssCom17} thumbnail/>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <Image src={ssCom18} thumbnail/>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" style={{textAlign: "center", marginBottom: "5px", marginTop: "15px"}}>
                                <h4>
                                    Workshop
                                </h4>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <Image src={ssCom19} thumbnail/>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <Image src={ssCom20} thumbnail/>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" style={{textAlign: "center", marginBottom: "5px", marginTop: "15px"}}>
                                <h4>
                                    CHHATRAPATI SHIVAJI MAHARAJ JAYANTI
                                </h4>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <Image src={ssCom21} thumbnail/>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <Image src={ssCom22} thumbnail/>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" style={{textAlign: "center", marginBottom: "5px", marginTop: "15px"}}>
                                <h4>
                                    Celebration of Maharashtra Din
                                </h4>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <Image src={ssCom23} thumbnail/>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <Image src={ssCom24} thumbnail/>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" style={{textAlign: "center", marginBottom: "5px", marginTop: "15px"}}>
                                <h4>
                                    Personality development Program
                                </h4>
                            </Col>
                            <Col md="6" style={{marginBottom:"20px"}}>
                                <Image src={ssCom25} thumbnail/>
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
                        <h3>Bachelor of Commerce (B.Com.)</h3>
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

export default Bcom;