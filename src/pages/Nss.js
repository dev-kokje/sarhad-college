import React, { Component } from 'react'
import cx from 'classnames'
import { Container, Row, Col, Table, Image} from 'react-bootstrap'

import nss1 from '../assets/img/NSS/nss-1.jpg';
import nss2 from '../assets/img/NSS/nss-2.jpg';
import nss3 from '../assets/img/NSS/nss-3.jfif';
import nss4 from '../assets/img/NSS/nss-4.jpg';
import nss5 from '../assets/img/NSS/nss-5.jpg';
import nss6 from '../assets/img/NSS/nss-6.jpg';
import nss7 from '../assets/img/NSS/nss-7.jpg';
import nss8 from '../assets/img/NSS/nss-8.jpg';
import nss9 from '../assets/img/NSS/nss-9.jpg';
import nss10 from '../assets/img/NSS/nss-10.jpg';
import nss11 from '../assets/img/NSS/nss-11.jpg';
import nss12 from '../assets/img/NSS/nss-12.jpg';
import nss13 from '../assets/img/NSS/nss-13.jpg';
import nss14 from '../assets/img/NSS/nss-14.jpg';
import nss15 from '../assets/img/NSS/nss-15.jpg';
import nss16 from '../assets/img/NSS/nss-16.jpeg';
import nss17 from '../assets/img/NSS/nss-17.jpg';
import nss18 from '../assets/img/NSS/nss-18.png';
import nss19 from '../assets/img/NSS/nss-19.jpg';
import nss20 from '../assets/img/NSS/nss-20.jpg';
import nss21 from '../assets/img/NSS/nss-21.jpg';
import nss22 from '../assets/img/NSS/nss-22.jpg';
import nss23 from '../assets/img/NSS/nss-23.jpg';

class Nss extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container fluid>
                <Row className={cx("d-none d-md-flex")}>
                    <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                        <h2 className={cx("text-white")}>National Service Scheme</h2>
                    </Col>
                    <Col md={7} className={cx("headRow2")}>
                        
                    </Col>
                </Row>

                <h3 className="text-success text-center mt-4">
                    NSS - National Service Scheme
                </h3>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={11} className={cx("pb-4")}>
                        <Row className={cx("d-flex justify-content-center")}>
                            
                            <Col md={3} className={cx("py-4")}>
                                <p>Fit India Workshop</p>
                                <Image src={nss6} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                                <p>Online Fit India Movement by doing Yoga</p>
                                <Image src={nss7} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                                <p>Tree Plantation</p>
                                <Image src={nss10} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                                <p>Tree Plantation</p>
                                <Image src={nss11} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                                <p>Celebration of National Students Day by reading books of Dr. A.P.J Abdul Kalam</p>
                                <Image src={nss2} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                                <p>Celebration of National Unity Day by creating E-Poster</p>
                                <Image src={nss3} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                                <p>E-Poster created by Students for Nacha mukt bharat</p>
                                <Image src={nss4} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                                <p>E-Poster created by Students for Saying No To Tobacco</p>
                                <Image src={nss5} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Online Health Awerness Program by Students</p>
                                <Image src={nss12} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Online Social Awerness message by students to wear Mask</p>
                                <Image src={nss13} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Social Awerness Program on Covid-19 by Drawing</p>
                                <Image src={nss14} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Swachh Bharat</p>
                                <Image src={nss15} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Online Organ Donation Awerness Program</p>
                                <Image src={nss16} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Road Safety Awerness Program by Students by creating Rangoli</p>
                                <Image src={nss22} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Polio Vaccination Awerness Program in Society</p>
                                <Image src={nss17} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Online celebration of NSS Day</p>
                                <Image src={nss18} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Online Constitution Day Celebration</p>
                                <Image src={nss19} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Online Program on Poshan Pakhwada</p>
                                <Image src={nss20} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Online session on world Aids Day</p>
                                <Image src={nss21} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Celebration of National Education Day</p>
                                <Image src={nss23} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Blood Donation Program</p>
                                <Image src={nss1} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Online Health Awerness Programe in Lockdown by Students</p>
                                <Image src={nss8} thumbnail></Image>
                            </Col>
                            <Col md={3} className={cx("py-4")}>
                            <p>Online Yoga Day Celebration</p>
                                <Image src={nss9} thumbnail></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Nss;