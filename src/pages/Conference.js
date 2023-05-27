import React, { Component } from 'react'
import cx from 'classnames'
import { Container, Row, Col, Table, Image} from 'react-bootstrap'

import poster1 from '../assets/img/conference/conferenceposter1.jpg';
import poster2 from '../assets/img/conference/conferenceposter2.jpg';

import conference1 from '../assets/img/conference/nationalconference1.jpg';
import conference2 from '../assets/img/conference/nationalconference2.jpg';
import conference3 from '../assets/img/conference/nationalconference3.png';
import conference4 from '../assets/img/conference/nationalconference4.jpeg';
import conference5 from '../assets/img/conference/nationalconference5.jpeg';
import conference6 from '../assets/img/conference/nationalconference6.jpeg';
import conference7 from '../assets/img/conference/nationalconference7.jpeg';
import conference8 from '../assets/img/conference/nationalconference8.JPG';
import conference9 from '../assets/img/conference/nationalconference9.JPG';
import conference10 from '../assets/img/conference/nationalconference10.JPG';
import conference11 from '../assets/img/conference/nationalconference11.JPG';
import conference12 from '../assets/img/conference/nationalconference12.JPG';
import conference13 from '../assets/img/conference/nationalconference13.JPG';
import conference14 from '../assets/img/conference/nationalconference14.JPG';
import conference15 from '../assets/img/conference/nationalconference15.JPG';
import conference16 from '../assets/img/conference/nationalconference16.jpg';

class Conference extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container fluid>
                <Row className={cx("d-none d-md-flex")}>
                    <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                        <h2 className={cx("text-white")}>National Level Conference</h2>
                    </Col>
                    <Col md={7} className={cx("headRow2")}>
                        
                    </Col>
                </Row>

                <h5 className="mt-4 text-secondary text-center">
                    Naional Level Conference on 
                </h5>
                <h3 className="text-success text-center">
                    Opportunities and Challenges after 370 in Jammu and Kashmir
                </h3>
                <h5 className="mt-4 text-secondary text-center">
                    10th & 11th January 2020 
                </h5>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={8} className={cx("pb-4")}>
                        <Row className={cx("d-flex justify-content-center")}>
                            <Col md={12} className={cx("py-4")}>
                                <Image src={poster1} thumbnail></Image>
                            </Col>
                            <Col md={12} className={cx("py-4")}>
                                <Image src={poster2} thumbnail></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={11} className={cx("pb-4")}>
                        <Row className={cx("d-flex justify-content-center")}>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference3} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference1} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference2} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference4} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference5} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference6} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference7} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference8} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference10} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference11} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference12} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference13} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference15} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference16} thumbnail></Image>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference9} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={conference14} thumbnail></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Conference;