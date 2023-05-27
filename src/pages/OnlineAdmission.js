import React from 'react'
import cx from 'classnames'
import { Container, Row, Col, Image } from 'react-bootstrap'

import admission2022 from '../assets/img/admission-2022.jpg';
import payment_conditions from '../assets/docs/payment_conditions.pdf';

const OnlineAdmission = (props) => {

    return (
        <Container fluid>
            <Row className={cx("d-none d-md-flex")}>
                <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                    <h2 className={cx("text-white")}>Admission Procedure</h2>
                </Col>
                <Col md={7} className={cx("headRow2")}>
                    
                </Col>
            </Row>
            <Row className={cx("d-md-none")}>
                <Col md={7} className={cx("p-4 d-flex justify-content-start align-items-center headRow2")}>
                    <h2 className={cx("text-white")}>Admission Procedure</h2>
                </Col>
            </Row>

            <Row className={cx("d-flex justify-content-around p-4")}>
                <Col md="5">
                    <p>
                        <span className={cx("font-weight-bold")}>Manual : </span>
                        please contact to office
                    </p>
                    <p>
                        <span className={cx("font-weight-bold")}>Email : </span>
                        sarhadcollege@gmail.com
                    </p>
                    <p>
                        <span className={cx("font-weight-bold")}>Online Admission : </span>
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
                    <p>
                        <span className={cx("font-weight-bold")}>Online Payment Terms & Conditions : </span>
                        <a href={payment_conditions} rel="noreferrer" target="_blank">
                            Click Here
                        </a>
                    </p>
                </Col>
                <Col md="6">
                    <Image src={admission2022} thumbnail />
                </Col>
            </Row>
        </Container>
    );
}

export default OnlineAdmission