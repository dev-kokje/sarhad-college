/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import cx from 'classnames'
import { Container, Row, Col, Table, Image} from 'react-bootstrap'

import technofest1 from '../assets/img/technofest1.jpg';
import technofest2 from '../assets/img/technofest2.jpg';
import technofest from '../assets/docs/technofest.pdf';

import q1 from '../assets/img/technofest/quiz1.jpg';
import q2 from '../assets/img/technofest/quiz2.jpg';
import q3 from '../assets/img/technofest/quiz3.jpg';
import p1 from '../assets/img/technofest/poster1.jpg';
import p2 from '../assets/img/technofest/poster2.jpg';
import p3 from '../assets/img/technofest/poster3.jpg';
import m1 from '../assets/img/technofest/model1.jpg';
import m2 from '../assets/img/technofest/model2.jpg';
import m3 from '../assets/img/technofest/model3.jpg';
import b1 from '../assets/img/technofest/blindprogramming1.jpg';
import b2 from '../assets/img/technofest/blindprogramming2.jpg';
import b3 from '../assets/img/technofest/blindprogramming3.jpg';
import i1 from '../assets/img/technofest/inauguration1.jpg';
import i2 from '../assets/img/technofest/inauguration2.jpg';
import i3 from '../assets/img/technofest/inauguration3.jpg';

class Technofest extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container fluid>
                <Row className={cx("d-none d-md-flex")}>
                    <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                        <h2 className={cx("text-white")}>Sarhad - Technofest</h2>
                    </Col>
                    <Col md={7} className={cx("headRow2")}>
                        
                    </Col>
                </Row>

                
                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={10} className={cx("pt-4")}>
                        <Row>
                            <Col md={12}>
                                <h5>Introduction</h5>
                                <h6>‘SARHAD TECHNOFEST’</h6>
                                <p>
                                'Sarhad Technofest' is an intercollegiate event started in year 2019-20 by the Department of Computer Science and Computer Application. This event was organized on 21st December 2019. Objective of this competition was not only to give the platform to the students to show their programming skills, ideas and practice but also to increase the interest of coding and programming among them.
                                </p>
                                <p>
                                    The inauguration programme of this event commenced with the lighting of lamp and then opening of handmade cardboard laptop (prepared by SYBSC CS students) by the guest, Dr. Deepa Ramane (Head, Electronic Science Dept, Sinhagad College of Science, Ambegaon, Pune).
                                </p>
                                <p>
                                    In this event, 4 different competitions - Model Competition, Poster Competition, Blind Programing & Quiz Competition were conducted by the Department of Computer Science and Computer Application.
                                </p>
                                <p>
                                    <a className="btn btn-outline-secondary" href={ technofest } target="_blank">Click here for more details on 'SARHAD TECHNOFEST'</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={10} className={cx("pb-4")}>
                        <Row className={cx("d-flex justify-content-center")}>
                            <Col md={6} className={cx("py-4")}>
                                <Image src={technofest1} thumbnail></Image>
                            </Col>
                            <Col md={6} className={cx("py-4")}>
                                <Image src={technofest2} thumbnail></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={11} className={cx("pb-4")}>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td>
                                        <h5 class="text-center my-2">INAUGRATION PROGRAM</h5>
                                        <Row>
                                            <Col md={4}>
                                                <Image src={ i1 } thumbnail />
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ i2 } thumbnail />
                                                <p>
                                                The inauguration programme commenced with opening of handmade cardboard  laptop  (prepared by SYBSC CS students) by the Guest, Dr.Deepa Ramane (Head,Electronic Science dept, Sinhagad college of science,Ambegaon Pune).
                                                </p>
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ i3 } thumbnail />
                                                <p>
                                                    Informative speech about computer science and Electronics given by Guest Dr.Deepa Ramane.
                                                </p>
                                            </Col>
                                        </Row>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 className="text-center my-2">Blind Programming Competition</h5>
                                        <p className="text-center">
                                            Certificate and medals given by Management team of Sarhad college to the winners of Blind Programming Competition
                                        </p>
                                        <Row>
                                            <Col md={4}>
                                                <Image src={ b1 } thumbnail />
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ b2 } thumbnail />
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ b3 } thumbnail />
                                            </Col>
                                        </Row>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="text-center my-2">Model Competition</h5>
                                        <p className="text-center">
                                            Certificate, medals and trophy given by Judge Asst. Prof. Komal Shinde to the winners of Model Competition
                                        </p>
                                        <Row>
                                            <Col md={4}>
                                                <Image src={ m1 } thumbnail />
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ m2 } thumbnail />
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ m3 } thumbnail />
                                            </Col>
                                        </Row>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="text-center my-2">Poster Competition</h5>
                                        <p className="text-center">
                                            Certificate and medals given by Principal Sir and Vice-Principal Mam to the winners of Poster Competition.
                                        </p>
                                        <Row>
                                            <Col md={4}>
                                                <Image src={ p1 } thumbnail />
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ p2 } thumbnail />
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ p3 } thumbnail />
                                            </Col>
                                        </Row>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="text-center my-2">Quiz Competition</h5>
                                        <Row>
                                            <Col md={4}>
                                                <Image src={ q1 } thumbnail />
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ q2 } thumbnail />
                                            </Col>
                                            <Col md={4}>
                                                <Image src={ q3 } thumbnail />
                                            </Col>
                                        </Row>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Technofest;