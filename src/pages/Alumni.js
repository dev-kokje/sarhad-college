import React, { Component } from 'react'
import cx from 'classnames'
import { Container, Row, Col, Table, Image} from 'react-bootstrap'

import alumni1 from '../assets/img/alumni/alumni1.JPG';
import alumni2 from '../assets/img/alumni/alumni2.JPG';
import alumni3 from '../assets/img/alumni/alumni3.JPG';
import alumni4 from '../assets/img/alumni/alumni4.JPG';
import alumni5 from '../assets/img/alumni/alumni5.JPG';

class Alumni extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container fluid>
                <Row className={cx("d-none d-md-flex")}>
                    <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                        <h2 className={cx("text-white")}>Alumni Association</h2>
                    </Col>
                    <Col md={7} className={cx("headRow2")}>
                        
                    </Col>
                </Row>

                
                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={11} className={cx("py-4")}>
                        <Row>
                            <Col md={12}>
                                <h5>Introduction</h5>
                                <h6>‘SARHAD COLLEGE-ALUMNI-ASSOCIATION’</h6>
                                <p>
                                Our college has responsibility towards its stakeholders. At the same time these stakeholders
contribute towards the development of college. The alumni are an important stakeholder. They
are valuable assets of our college. The past students of the college are successful in various fields
like teaching, government services, business, professions like Web designers, chartered
accountants, cost accountants, company secretaries, software development, IT, etc. the college
has encouraged meritorious past students to work as staff members in the college. At present 5
teaching staff members are past students. Interactions with them have always been beneficial to
college. The interaction with the past students is more of informal nature and mostly at
departmental level. Various departments have frequent interaction with the past students. They
are invited to share their experiences with the current students helping them getting exposed to
the realities of world of work. They are also invited as experts at seminars, for delivering guest
lecturers in the areas of their expertise.
                                </p>
                                <p>
                                The main purpose of this alumni association is to provide a platform to share the rich
experiences of old students of the college for the benefit and progress of the present students and
to provide guidance to the present students for Endeavour of better employment and higher
studies. Apart from this the purpose of association is to arrange teaching and training classes to
the students studying in the college and also to the members to upgrade technical and general
skills. Through this Association we maintain and update the data base of all the alumni of the
college and to interact with them. We also encourage and involve our alumni to give their
valuable advices for the overall development of the college.
                                </p>
                                <p>
                                Some of our alumni have established a social organization named as <b>“Gad Zunzar
Mavale Pratishtan”</b> through which they work for the welfare of students as well as society.
                                </p>
                                <p>
                                In order to have continuous and formal interaction with the alumni college decided to form a Past Students Association in the name of SARHAD Alumni Association. Recently i.e. FEB 2019 ‘SARHAD-ALUMNI-ASSOCIATION’ has been registered (Registration No.MH/197/2019/Pune Dated 04/02/2019/PUNE).
The process of online registration of past students as association member is available on college website. Some of the main objectives of this association are:
                                </p>
                                <p>
                                    <ol>
                                        <li>To arrange the lectures of Honorary Members and other respectable personalities in various fields and encourage the students to expand their horizon while entering in the real life.</li>
                                        <li>To provide guidance to the students of the College with reference to career choice and development.</li>
                                        <li>To assist the College in organising activities for the benefit of students.</li>
                                        <li>To help the College for strengthening its infrastructural activities.</li>
                                        <li>To organise activities for social awareness and social benefits.</li>
                                        <li>To encourage students to become entrepreneurs by undertaking training programmes in various forms.</li>
                                    </ol>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={9} className={cx("py-4")}>
                        <Row>
                            <Col md={12}>
                                <h5>Alumni Committee</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={11}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Sr No</th>
                                            <th>Name</th>
                                            <th>Designation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Asst Prof Komal Shinde</td>
                                            <td>HOD Physics (Alumni Association Conveyor)</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Mr.Vishwajeet Gaikwad</td>
                                            <td>Chairman</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Mr.Amrut Patil</td>
                                            <td>Vice Chairman</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Mr Shubham Sunil Shinde</td>
                                            <td>Secretary</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Ms Prajkta Kakasheb Deshmukh</td>
                                            <td>Trustee </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Ms Vijaya Haridas Pise</td>
                                            <td>Member</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Ramkour Dharamsingh Gaidu Ramgadia</td>
                                            <td>Member</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Megha Maruti Shinde</td>
                                            <td>Member</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Vaishnavi Baburao Lokhande</td>
                                            <td>Member</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Rutuja Manik Pise</td>
                                            <td>Member</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>Prachi Sanjay Shinde</td>
                                            <td>Member</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>Abhishekh Navneet Bokria</td>
                                            <td>Member</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={11} className={cx("py-4")}>
                        <Row>
                            <Col md={12}>
                                <h5>Alumni Association Activities</h5>
                            </Col>
                        </Row>
                        <Row className={cx("d-flex justify-content-center")}>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={alumni1} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={alumni2} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={alumni3} thumbnail></Image>
                            </Col>
                        </Row>
                        <Row className={cx("d-flex justify-content-center")}>
                        <Col md={4} className={cx("py-4")}>
                                <Image src={alumni4} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={alumni5} thumbnail></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Alumni