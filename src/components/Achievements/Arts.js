import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Image
} from 'react-bootstrap';

import activity1 from '../../assets/img/achievements/arts-activity-1.jpg';
import activity2 from '../../assets/img/achievements/arts-activity-2.jpg';
import activity3 from '../../assets/img/achievements/arts-activity-3.jpg';
import activity4 from '../../assets/img/achievements/arts-activity-4.jpg';
import activity5 from '../../assets/img/achievements/arts-activity-5.jpg';

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

import skene1 from '../../assets/img/softskill/economics/1.JPG';
import skene2 from '../../assets/img/softskill/economics/2.JPG';
import skene3 from '../../assets/img/softskill/economics/3.JPG';
import skene4 from '../../assets/img/softskill/economics/4.JPG';
import skene5 from '../../assets/img/softskill/economics/5.JPG';

import skenm1 from '../../assets/img/softskill/marathi/Debate Comp. 25-7-2019.jpg';
import skenm2 from '../../assets/img/softskill/marathi/Essay Comp.20-8-2019.JPG';
import skenm3 from '../../assets/img/softskill/marathi/Gest Lecturer Positive Personality 31-8-2019.jpg';
import skenm4 from '../../assets/img/softskill/marathi/Hastakshar Comp.24-7-2019.jpg';
import skenm5 from '../../assets/img/softskill/marathi/Marathi Bhasha Din 28 -2-2020 - 1.jpg';
import skenm6 from '../../assets/img/softskill/marathi/Marathi Bhasha sanvardhan pandharvada -10-1-2020.jpg';
import skenm7 from '../../assets/img/softskill/marathi/Marathi Bhasha sanvardhan pandharvada -2-1-2020.jpg';
import skenm8 from '../../assets/img/softskill/marathi/Marathi Bhasha sanvardhan pandharvada -13-1-2020.jpg';
import skenm9 from '../../assets/img/softskill/marathi/Wachan Prerana Din 15-10-2019.jpg';

const Arts = (props) => {

    return (
        <Hoc>
            <Row className="p-4 d-flex justify-content-center">
                <Col md={12}>
                    <h4>Students Activities & Achievements</h4>
                    <hr></hr> 
                </Col>
            </Row>

            <Row className="px-4">
                <Col md={6} className="">
                    <p>Gest Lecturer Positive Personality 31-8-2019</p>
                    <Image src={activity1} thumbnail />
                </Col>
                <Col md={6} className="">
                    <p>Guest Lecture on Personal Counseling 10-12-2019</p>
                    <Image src={activity3} thumbnail />
                </Col>
                <Col md={6} className="mt-4">
                    <p>Guest Lecture on Competitive Examination Preparation 3-12-2019</p>
                    <Image src={activity2} thumbnail />
                </Col>
                <Col md={6} className="mt-4">
                    <p>Mahaparinirvan Din-Death Anniversary of Dr. Babasaheb Ambedkar 6-12-2019</p>
                    <Image src={activity4} thumbnail />
                </Col>
                <Col md={6} className="mt-4">
                    <p>Marathi Bhasha Din 28 -2-2020</p>
                    <Image src={activity5} thumbnail />
                </Col>
            </Row>

            <Row className="px-4 d-flex justify-content-center">
                <Col md={12}>
                    <h6>English Library Club</h6> 
                </Col>
                <Col md={12}>
                    <p>Students participated in different activities conducted by English Library Club.</p> 
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

                    <Table striped bordered hover>
                        <tr>
                            <td>
                                <Row>
                                    <p className="text-center font-weight-bold mx-4">Department of Economics</p>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <Image src={skene1} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <Image src={skene2} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <Image src={skene3} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <Image src={skene4} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <Image src={skene5} thumbnail></Image>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Row>
                                    <p className="text-center font-weight-bold mx-4">Department of Marathi</p>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <p>Debate Comp. 25-7-2019</p>
                                        <Image src={skenm1} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <p>Essay Comp.20-8-2019</p>
                                        <Image src={skenm2} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <p>Gest Lecturer Positive Personality 31-8-2019</p>
                                        <Image src={skenm3} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <p>Hastakshar Comp.24-7-2019</p>
                                        <Image src={skenm4} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <p>Marathi Bhasha Din 28 -2-2020 - 1</p>
                                        <Image src={skenm5} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <p>Marathi Bhasha sanvardhan pandharvada - अभिवाचन 10-1-2020</p>
                                        <Image src={skenm6} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <p>Marathi Bhasha sanvardhan pandharvada - घोषवाक्यलेखन स्पर्धा 2-1-2020</p>
                                        <Image src={skenm7} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <p>Marathi Bhasha sanvardhan pandharvada - वक्तृत्व स्पर्धा 13-1-2020</p>
                                        <Image src={skenm8} thumbnail></Image>
                                    </Col>
                                    <Col md="4">
                                        <p>Wachan Prerana Din 15-10-2019</p>
                                        <Image src={skenm9} thumbnail></Image>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    </Table>
                </Col>
                    
                {/* <p><i class="fa fa-trophy"></i> Dipti Jadhav from SYBSc(Comp Sci) secured First Rank in “Online PPT Presentation Competition of Electronics Subject” organized by Department of Computer Science and IQAC of Sarhad College of Arts,Commerce and Science, Katraj , Pune held from 28th July 2020 to 30th July 2020. </p> */}
            </Row>
        </Hoc>
    );
}

export default Arts;