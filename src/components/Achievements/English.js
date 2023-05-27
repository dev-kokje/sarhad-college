import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Image
} from 'react-bootstrap';

import english1 from '../../assets/img/achievements/english-1.jpg';
import english2 from '../../assets/img/achievements/english-2.jpg';
import english3 from '../../assets/img/achievements/english-3.jpg';
import english4 from '../../assets/img/achievements/english-4.jpg';

import arts1 from '../../assets/img/achievements/arts-essay.jpg';
import arts2 from '../../assets/img/achievements/arts-elocution1.jpg';
import arts3 from '../../assets/img/achievements/arts-elocution2.jpg';
import arts4 from '../../assets/img/achievements/arts-poetry1.jpg';
import arts5 from '../../assets/img/achievements/arts-poetry2.jpg';
import arts6 from '../../assets/img/achievements/arts-spell.jpg';
import Hoc from '../../Hoc/Hoc';

const English = (props) => {

    return (
        <Hoc>
            <Row className="p-4 d-flex justify-content-center">
                <Col md={12}>
                    <h4>Students Activities & Achievements</h4>
                    <hr></hr> 
                </Col>
                <Col md={12}>
                    <p>Students participated in different activities conducted by English Library Club.</p> 
                </Col>
            </Row>
            <Row className="px-4 d-flex justify-content-center">
                <Col md={12}>
                    <h6>English Library Club</h6> 
                </Col>
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Essay Writing Competition</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={arts1} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>English Elocution Competition</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={arts2} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={arts3} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>English Poetry Reading Competition</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={arts4} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={arts5} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>English Spellings Test</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={arts6} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                    
                {/* <p><i class="fa fa-trophy"></i> Dipti Jadhav from SYBSc(Comp Sci) secured First Rank in “Online PPT Presentation Competition of Electronics Subject” organized by Department of Computer Science and IQAC of Sarhad College of Arts,Commerce and Science, Katraj , Pune held from 28th July 2020 to 30th July 2020. </p> */}
            </Row>

            <Row className="px-4 d-flex justify-content-center">
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>
                                    <Row>
                                        <Col md={6}>
                                            <p>Rachana  Bhosale  while  addressing  to  the  students</p>
                                            <Image src={ english1 } thumbnail />
                                        </Col>
                                        <Col md={6}>
                                            <p>Admired for speech excellence on Habits in Enhancing Personality</p>
                                            <Image src={ english2 } thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Row>
                                        <Col md={6}>
                                            <p>Felicitated by Principal Bhosale Sir, SUCOP, Kharadi-Pune (9.11.2019) </p>
                                            <Image src={ english3 } thumbnail />
                                        </Col>
                                        <Col md={6}>
                                            <p>Felicitated by Principal Shewale mam,College of Pharmacy,Hadapsar-Pune(18.11.2019)</p>
                                            <Image src={ english4 } thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                    
            </Row>
        </Hoc>
    );
}

export default English;