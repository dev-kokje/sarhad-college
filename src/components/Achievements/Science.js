import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Image
} from 'react-bootstrap';

import science1 from '../../assets/img/achievements/science1.png';
import science2 from '../../assets/img/achievements/science2.jpg';
import science3 from '../../assets/img/achievements/science3.png';

import cs1 from '../../assets/img/achievements/cs1.jpg';
import cs2 from '../../assets/img/achievements/cs2.jpg';
import cs3 from '../../assets/img/achievements/cs3.jpg';
import cs4 from '../../assets/img/achievements/cs4.jpg';
import cs5 from '../../assets/img/achievements/cs5.jpg';
import cs6 from '../../assets/img/achievements/cs6.jpg';
import cs7 from '../../assets/img/achievements/cs7.jpg';
import cs8 from '../../assets/img/achievements/cs8.jpg';
import cs9 from '../../assets/img/achievements/cs9.jpg';
import cs10 from '../../assets/img/achievements/cs10.jpg';
import cs11 from '../../assets/img/achievements/cs11.jpg';
import cs12 from '../../assets/img/achievements/cs12.jpg';

import Hoc from '../../Hoc/Hoc';

const Science = (props) => {

    return (
        <Hoc>
            <Row className="p-4 d-flex justify-content-center">
                <Col md={12}>
                    <h4>Students Activities & Achievements</h4>
                    <hr></hr> 
                </Col>
                <Col md={12}>
                    <p>Our students actively participate and secure prizes in project exhibitions, poster competitions, quiz competitions, programming competitions and various intercollegiate events. Some of our students' achhievements are as follows - </p> 
                </Col>
            </Row>
            <Row className="p-4 d-flex justify-content-center">
                <Col md={12}>
                    <h6>Department Of Science</h6> 
                </Col>
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>Dipti Jadhav from SYBSc(Comp Sci) secured First Rank in “Online PPT Presentation Competition of Electronics Subject” organized by Department of Computer Science and IQAC of Sarhad College of Arts,Commerce and Science, Katraj , Pune held from 28th July 2020 to 30th July 2020.</td>
                                <td>
                                    <Image src={science1} thumbnail />
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Following students received prizes in Navratri Special Elocution Competition organized by Department of Computer Science and IQAC of Sarhad College of Arts,Commerce and Science, Katraj , Pune held from 28th July 2020 to 24th Oct 2020. </p>
                                    <ul>
                                        <li>RANK 1 - Dhanashree Vahanmani And Shivani Kshirsagar (TYBSC-CS)</li>
                                        <li>RANK 2 - Sakshi Jagdale (FYBBA) And Maheshwari Shedolkar (SYMSC-CS)</li>
                                        <li>RANK 3 - Isha Mayekar (TYBCOM) And Neelakumari Prasad (SYBSC-CS)</li>
                                    </ul>
                                </td>
                                <td>
                                    <Image src={science2} thumbnail />
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Following students received prizes in “Online Poster Making Competition of Electronics Subject” organized by Department of Computer Science and IQAC of Sarhad College of Arts,Commerce and Science, Katraj , Pune held on 24th August 2020.</p>
                                    <ul>
                                        <li>RANK 1 - Vaishnavi Kohinkar of SYBSc (Comp Sci) </li>
                                        <li>RANK 2 - Sakshi Bandagale of SYBSc (Comp Sci)</li>
                                        <li>RANK 3 - Sneha Salunke of SYBSc (Comp Sci)</li>
                                    </ul>
                                </td>
                                <td>
                                    <Image src={science3} thumbnail />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Various competitions were organized by the college thoughout the year. Students actively participated in all the competitions.</p>
                                    <p>
                                        <ul>
                                            <li>1st rank in throwball competition(sports day) by FYBSC CS students</li>
                                            <li>2nd Rank in Kabbaddi Competition(Sports Day) by FYBSc CS JAN 2020</li>
                                            <li>3rd rank of SYBSC CS students in intercollegiate poster competition Dec 2019</li>
                                            <li>Appreciation of Advanced Learners of FYBSC CS 2019</li>
                                            <li>Best Reader Award by FYBSC CS student</li>
                                            <li>Guest Lecture on Web Designing April 2019</li>
                                            <li>Participation by Comp Sci students in Traditional Day DEC 2019</li>
                                            <li>Participation in AVISHKAR competition by SYBSC CS & TYBSC CS students JAN 2020</li>
                                            <li>Rank in Running Competition (SPORTS DAY) FYBSC CS and SYBSC CS students</li>
                                            <li>Research paper presentation by TYBSC CS student at DY Patil University 2019</li>
                                            <li>Seminar by SYBSc Comp Sci of Electronics 2018-19</li>
                                            <li>Winners of shortput competition(Sports Day) by FYBSC CS students</li>
                                        </ul>
                                    </p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={cs1} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs2} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs3} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs4} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs5} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs6} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs7} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs8} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs11} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs12} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs9} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={cs10} thumbnail />
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

export default Science;