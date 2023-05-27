import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Image
} from 'react-bootstrap';

import sportsmain from '../../assets/img/achievements/sports-main.jpeg';
import sports1 from '../../assets/img/achievements/sports1.jpg';
import sports2 from '../../assets/img/achievements/sports2.jpg';
import sports3 from '../../assets/img/achievements/sports3.jpg';
import sports4 from '../../assets/img/achievements/sports-gym1.jpg';
import sports5 from '../../assets/img/achievements/sports-gym2.jpg';
import sports6 from '../../assets/img/achievements/sports-gym3.jpg';

import sportsday1 from '../../assets/img/sports-day/sports-day1.jpg';
import sportsday2 from '../../assets/img/sports-day/sports-day2.jpg';
import sportsday3 from '../../assets/img/sports-day/sports-day3.jpg';
import sportsday4 from '../../assets/img/sports-day/sports-day4.jpg';
import sportsday5 from '../../assets/img/sports-day/sports-day5.jpg';
import sportsday6 from '../../assets/img/sports-day/sports-day6.jpg';
import sportsday7 from '../../assets/img/sports-day/sports-day7.jpg';
import sportsday8 from '../../assets/img/sports-day/sports-day8.jpg';
import sportsday9 from '../../assets/img/sports-day/sports-day9.jpg';

import yoga1 from '../../assets/img/sports-day/yoga-day1.JPG';
import yoga2 from '../../assets/img/sports-day/yoga-day2.JPG';
import yoga3 from '../../assets/img/sports-day/yoga-day3.JPG';

import f1 from '../../assets/img/achievements/f1.jpg';
import f2 from '../../assets/img/achievements/f2.jpg';
import f3 from '../../assets/img/achievements/f3.jpg';
import f4 from '../../assets/img/achievements/f4.jpg';
import f5 from '../../assets/img/achievements/f5.jpg';
import f6 from '../../assets/img/achievements/f6.jpg';
import f7 from '../../assets/img/achievements/f7.jpg';
import f8 from '../../assets/img/achievements/f8.jpg';
import f9 from '../../assets/img/achievements/f9.jpg';

import s1 from '../../assets/docs/sports-achievements-1.pdf';
import s2 from '../../assets/docs/sports-achievements-2.pdf';

import Hoc from '../../Hoc/Hoc';

const Sports = (props) => {

    return (
        <Hoc>
            <Row className="px-4 d-flex justify-content-center">
                <Col md={12}>
                    <h4>Sports Staff</h4>
                    <hr></hr> 
                </Col>
                <Col md={12}>
                    <p></p> 
                </Col>
            </Row>
            <Row>
                <Col md={11} className="px-4">
                    <Table striped bordered hover className="mx-3">
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
                                <td>Dr. Pritam V. Misale</td>
                                <td>Physical Director</td>
                                <td>M.P.Ed, SET, Ph.D</td>
                                <td>6</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="p-4 d-flex justify-content-center">
                <Col md={12}>
                    <h4>Students Activities & Achievements</h4>
                    <hr></hr> 
                </Col>
                <Col md={12}>
                    <p></p> 
                </Col>
            </Row>
            <Row className="px-4 d-flex justify-content-center">
                <Col md={12}>
                    <h6>Sports Achievements</h6> 
                </Col>
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>
                                    <a href={ s2 } target="_blank">Click here for Sports Achievement 2019-2020</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href={ s1 } target="_blank">Click here for Inter Collegiate Participation 2019-20</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>2019-20 Sports Champions</p>
                                    <Row>
                                        <Col md={10}>
                                            <Image src={sportsmain} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sports1} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sports2} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sports3} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>International Yoga Day</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={yoga1} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={yoga2} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={yoga3} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Annual Sports Day</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={sportsday1} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sportsday2} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sportsday3} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sportsday4} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sportsday5} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sportsday6} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sportsday7} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sportsday8} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sportsday9} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>FIT INDIA MOVEMENT 29 August 2019</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={f1} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={f2} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={f3} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={f4} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={f5} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={f6} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={f7} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={f8} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={f9} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Gym Inauguration</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={sports4} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sports5} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={sports6} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                    
                {/* <p><i class="fa fa-trophy"></i> Dipti Jadhav from SYBSc(Comp Sci) secured First Rank in “Online PPT Presentation Competition of Electronics Subject” organized by Department of Computer Science and IQAC of Sarhad College of Arts,Commerce and Science, Katraj , Pune held from 28th July 2020 to 30th July 2020. </p> */}
            </Row>
        </Hoc>
    );
}

export default Sports;