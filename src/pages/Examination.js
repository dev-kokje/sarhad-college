import React from 'react'
import cx from 'classnames'
import { Container, Row, Col, Table, ListGroup } from 'react-bootstrap'

import pdf1 from '../assets/docs/2013 P Backlog Examination April 2021  ....pdf';
import pdf2 from '../assets/docs/Backlog Exam FY 2013p Apr 2021 Time Table.pdf';
import pdf3 from '../assets/docs/FYBA - (2013 p.) Backlog Exam 2020-21.pdf';
import pdf4 from '../assets/docs/TIMETABLE FY B.COM 2013 OCT2020 -9.4.21.pdf';
import pdf5 from '../assets/docs/TimeTble for APril2021 exam start.pdf';
import pdf6 from '../assets/docs/FY BBA 2013 Pattern.pdf';


const Examination = (props) => {

    return (
        <Container fluid>
            <Row className={cx("d-none d-md-flex")}>
                <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                    <h2 className={cx("text-white")}>Examination</h2>
                </Col>
                <Col md={7} className={cx("headRow2")}>
                    
                </Col>
            </Row>
            <Row className={cx("d-md-none")}>
                <Col md={7} className={cx("p-4 d-flex justify-content-start align-items-center headRow2")}>
                    <h2 className={cx("text-white")}>Examination</h2>
                </Col>
            </Row>

            <Row className={cx("d-flex justify-content-around")}>
                <Col md={10} className={cx("p-4 d-flex flex-column justify-content-center")}>
                    <h5 className={cx("text-center pb-4")}>Examination Committee</h5>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mrs. Sayali D Patil</td>
                                <td>CEO</td>
                                <td>M.com, SET,B.Ed, GDC&A</td>
                            </tr>
                            <tr>
                                <td>Dr. Sangeeta S. Shinde</td>
                                <td>Senior Supervisor</td>
                                <td>MA,BEd,M.Phil, PhD, SET</td>
                            </tr>
                            <tr>
                                <td>Ms Komal Shinde</td>
                                <td>Internal Exam Head</td>
                                <td>MA, Bed, SET</td>
                            </tr>
                            <tr>
                                <td>Mrs Komal Wanshiv</td>
                                <td>CAP director</td>
                                <td>MCA NET</td>
                            </tr>
                        </tbody>
                        </Table>
                </Col>
                <Col md={10} className={cx("p-4 d-flex flex-column justify-content-center")}>
                    <h5 className={cx("text-center pb-4")}>Savitribai Phule Pune University Exam Time Tables </h5>
                    <ListGroup>
                        <ListGroup.Item>
                            <a href={pdf1}>B. Sc. (REGULAR) (Rev. 2013P)
 - 2013 P Backlog Examination April 2021</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href={pdf2}>Department of BBA (CA) - Backlog Exam FY 2013p Apr 2021 Time Table</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href={pdf3}>FYBA - (2013 p.) Backlog Exam 2020-21</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href={pdf4}>TIMETABLE FY B.COM 2013 OCT2020 -9.4.21</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href={pdf5}>Department of computer Science - Timetable for April 2021</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href={pdf6}>FY BBA 2013 Pattern - Backlog Exam Timetable</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={10} className={cx("p-4 d-flex flex-column justify-content-center")}>
                    <h5 className={cx("text-center pb-4")}>Important Links</h5>
                    <ListGroup>
                        <ListGroup.Item>
                            <a href="">Savitribai Phule Pune University exam timetables</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href="">Savitribai Phule Pune University exam forms</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href="">Savitribai Phule Pune University exam previous question papers</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Examination