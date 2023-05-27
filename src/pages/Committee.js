import React from 'react'
import cx from 'classnames'
import { Container, Row, Col, Accordion, Card, Table, Image } from 'react-bootstrap';

import com1 from '../assets/img/director.png'
import com2 from '../assets/img/secretary.png'
import com3 from '../assets/img/principal-sir.png'

const Committee = (props) => {

    return(
        <Container fluid>
            <Row className={cx("d-none d-md-flex")}>
                <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                    <h2 className={cx("text-white")}>Administration</h2>
                </Col>
                <Col md={7} className={cx("headRow2")}>
                    
                </Col>
            </Row>
            <Row className={cx("d-md-none")}>
                <Col md={7} className={cx("p-4 d-flex justify-content-start align-items-center headRow2")}>
                    <h2 className={cx("text-white")}>Administration</h2>
                </Col>
            </Row>

            <Row className={cx("py-4 d-flex justify-content-center")}>
                <Col md={11}>
                    <p className={cx("text-center my-2 font-sm")}>Click on each tab to know more</p>
                    <Accordion defaultActiveKey="0">

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className={cx("bg-primary2 text-white cursor-pointer")}>
                                College Development Committee          
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row className={cx("d-flex justify-content-around mb-4")}>
                                    <Col md={3} className={cx("d-flex flex-column justify-content-center")}>
                                        <Image src={com1} thumbnail />
                                        <h5 className={cx("py-1 text-center")}>Mr. Sanjay Nahar</h5>
                                        <h6 className={cx("text-center")}>Chairperson</h6>
                                    </Col>
                                    <Col md={3} className={cx("d-flex flex-column justify-content-center")}>
                                        <Image src={com2} thumbnail />
                                        <h5 className={cx("py-1 text-center")}>Mrs. Sushma Nahar</h5>
                                        <h6 className={cx("text-center")}>General Secretary, Sarhad</h6>
                                    </Col>
                                    <Col md={3} className={cx("d-flex flex-column justify-content-center")}>
                                        <Image src={com3} thumbnail />
                                        <h5 className={cx("py-1 text-center")}>Dr.Hanumant Jadhavar</h5>
                                        <h6 className={cx("text-center")}>Principal</h6>
                                    </Col>
                                </Row>
                                <Row className={cx("d-flex justify-content-center")}>
                                    <Col md={8}>
                                        <Table striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Dr. Sangeeta Shinde</td>
                                                    <td>IQAC Coordinator</td>
                                                </tr>
                                                <tr>
                                                    <td>Shri. Rohan Tambade</td>
                                                    <td>Local Member</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr.Vilina Inamdar</td>
                                                    <td>Local Member</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr. Sheetal Lakde</td>
                                                    <td>Head of Department of Commerce</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr. Vandana Chavan</td>
                                                    <td>Head of Department of BA</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Sonali Gholve</td>
                                                    <td>Head of Department of Computer Science</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Rupali Pawar</td>
                                                    <td>Head of Department of BBA(CA)</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Shreeraj  Bhor</td>
                                                    <td>Head of Department of BBA</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Aparna Kedari</td>
                                                    <td>Head of Department of Science</td>
                                                </tr>
                                                <tr>
                                                    <td>Suraj Salvi</td>
                                                    <td>Member of Student Council</td>
                                                </tr>
                                                <tr>
                                                    <td>Gauri Kakade</td>
                                                    <td>Member of Student Council</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1" className={cx("bg-primary2 text-white cursor-pointer")}>
                                Anti-Ragging Committee
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col md={5}>
                                        <h6 className={cx("text-danger text-center")}>"SAY NO TO RAGGING"</h6>
                                        <h5 className={cx("text-center")}>Anti-Ragging Policy</h5>
                                        <p className={cx("text-center font-sm")}>UGC Regulations on curbing the menace of Ragging. "SAY NO TO RAGGING"</p>
                                        <ul>
                                            <li>
                                                Ragging in any from is totally prohibited in the institute
                                            </li>
                                            <li>
                                                Ragging is a serious crime and is punishable by law. Anyone found indulging in ragging will face immediate expulsion from the University and will also be debarred from pursuing course from any other institution.
                                            </li>
                                            <li>
                                                If you come across any instance of Ragging in the Institute, Please contact any of the following numbers
                                            </li>
                                        </ul>
                                        <p className={cx("text-center")}>
                                            <a href="https://www.antiragging.in/" target="_blank">Click here for online Anti-Ragging Affidavit</a>
                                        </p>
                                    </Col>
                                    <Col md={7} className={cx("border-left px-4")}>
                                        <Table striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                <th>Position in the Committee</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Dr. Hanumant R. Jadhavar</td>
                                                    <td>Principal and Controller</td>
                                                    <td>Chairman</td>
                                                </tr>
                                                <tr>
                                                    <td>Mr. Shailesh Wadekar</td>
                                                    <td>Administrator</td>
                                                    <td>Assistant controller officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr. Sangeeta Shinde</td>
                                                    <td>Vice-Principal</td>
                                                    <td>Appeal officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst.Prof.Shilpa Mirikar</td>
                                                    <td>Assistant Professor</td>
                                                    <td>Assistant Appeal Officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst.Prof.Sayali Patil</td>
                                                    <td>Assistant Professor</td>
                                                    <td>Assistant Appeal Officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Someshwar Regude</td>
                                                    <td>Assistant Professor</td>
                                                    <td>Assistant Appeal Officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Adv. Prashant Saluke</td>
                                                    <td>Advocate</td>
                                                    <td>Local Member</td>
                                                </tr>
                                                <tr>
                                                    <td>Mr. Mayur Masurkar</td>
                                                    <td>Transport Unit Head</td>
                                                    <td>Local Member</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Aparna Kedari</td>
                                                    <td>Assistant Professor</td>
                                                    <td>Member</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Fatima Tamboli</td>
                                                    <td>Assistant Professor</td>
                                                    <td>Member</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr. Sunil Ukale</td>
                                                    <td>Assistant Professor</td>
                                                    <td>Member</td>
                                                </tr>
                                                <tr>
                                                    <td>Anay Kumar</td>
                                                    <td>Student</td>
                                                    <td>Student Representative</td>
                                                </tr>
                                                <tr>
                                                    <td>Damle Swapnali Santosh</td>
                                                    <td>Student</td>
                                                    <td>Student Representative</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2" className={cx("bg-primary2 text-white cursor-pointer")}>
                                National Service Scheme(NSS)
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Row>
                                    <Col md={5}>
                                        <h5 className={cx("text-center")}>National Service Scheme(NSS)</h5>
                                        <p className={cx("text-center")}>
                                            College promotes various community engagement activities through NSS. College students and faculty members participate in activities such as blood donation camp, tree plantation, and Police Mitra Training. These activities lead to the creation of students’ awareness on social problems, to improve communication skills, teamwork and to grow students as socially sensitive human beings.
                                        </p>
                                    </Col>
                                    <Col md={7} className={cx("border-left px-4")}>
                                        <Table striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Asst. Prof. Ramkaur DharamSingh Ramgadia</td>
                                                    <td>NSS Officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Sangita Vikas Ghuge</td>
                                                    <td>Assistant to NSS Officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Lekhana Ningappa Sawkar</td>
                                                    <td>Assistant to NSS Officer</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3" className={cx("bg-primary2 text-white cursor-pointer")}>
                                Student Development Cell (Vidhyarthi Vikas Mandal)
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <Row>
                                    <Col md={5}>
                                        <p>
                                            Sarhad College promotes various student development activities through BSD. College students and faculty members participate in student development activities such as International Yoga day, Birth anniversary of Mahatma Gandhi, Teachers day, International Physically Handicapped Day, Marathi Language Day etc.
                                        </p>
                                        <h6>
                                            Schemes Under BSD:
                                        </h6>
                                        <ol type="1" >
                                            <li>
                                                Earn and Learn Scheme
                                            </li>
                                            <li>
                                                Nirbhaya Kanya Abhiyan
                                            </li>
                                            <li>
                                                Disaster Management Scheme
                                            </li>
                                            <li>
                                                Special Guidance Scheme
                                            </li>
                                        </ol>
                                    </Col>
                                    <Col md={7} className={cx("border-left px-4")}>
                                        <Table striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Asst. Prof. Fatima Tamboli</td>
                                                    <td>Student Development Officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Asst. Prof. Rupali Pawar</td>
                                                    <td>Assistant of Student Development Officer</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4" className={cx("bg-primary2 text-white cursor-pointer")}>
                                Right to Information Act
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <Row>
                                    <Col md={5}>
                                        <p>
                                            The Right to Information Act, 2005 (22 of 2005) has been enacted by the Parliament and has come into force from 15 June, 2005. This Act provides for right to information for citizens to secure access to information under the control of public authorities in order to promote transparency and accountability in the working of every public authority. According to UGC guidelines all Universities and Colleges established by law made by Parliament or by State Legislature or by notification by the appropriate Government or owned, controlled or substantially financed directly or indirectly by funds provided by the Government shall come within the meaning of a Public Authority under this Act.
                                        </p>
                                        <p>
                                        The full text of the Act and frequently asked questions for implementation of the act are available on the website <a href="https://rtionline.maharashtra.gov.in/index-e.php" target="_blank">www.rti.gov.in</a>
                                        </p>
                                        <p>
                                            <a href="https://sarhadcollege.education/images/RTI%20form.pdf" target="_blank">Click here for sample format for RTI application</a>
                                        </p>
                                    </Col>
                                    <Col md={7} className={cx("border-left px-4")}>
                                        <Table striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Dr. Hanumant R. Jadhavar</td>
                                                    <td>Appellate Officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Dr.Sangeeta Shinde, Vice Principal</td>
                                                    <td>Public Information Officer</td>
                                                </tr>
                                                <tr>
                                                    <td>Mrs.Geeta Khot Head Of Account Dept.</td>
                                                    <td>Assistant Public Information Officer</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default Committee;