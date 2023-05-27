import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Image
} from 'react-bootstrap';

import bbaca1 from '../../assets/img/achievements/bbaca-1.jpg';
import bbaca2 from '../../assets/img/achievements/bbaca-2.jpg';
import bbaca3 from '../../assets/img/achievements/bbaca-3.jpg';
import bbaca4 from '../../assets/img/achievements/bbaca-4.jpg';
import bbaca5 from '../../assets/img/achievements/bbaca-5.png';
import Hoc from '../../Hoc/Hoc';

const Bbaca = (props) => {

    return (
        <Hoc>
            <Row className="p-4 d-flex justify-content-center">
                <Col md={12}>
                    <h4>Students Activities & Achievements</h4>
                    <hr></hr> 
                </Col>
            </Row>
            <Row className="px-4 d-flex justify-content-center">
                <Col md={12}>
                    <h6>BBA (CA) Department</h6> 
                </Col>
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>In academic year 2019-20, Asst. Prof. Rupali Pawar and Asst. Prof. Komal Wanshiv faculties from BBA (CA) department has awarded as “Aadarsh Shikshak Samman” from Himmakshara Award on the occasion of Children’s Day on 14th November 2019.</td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>The student of TY BBA (CA) Rutuja Khopade has attended 23rd Youth Festival 2020 from 12th to 16th January 2020 at Lucknow.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Prasad Ranjane and Aamir Mir students of SYBBA (CA) participated in IT quiz of Garvare College, Pune conducted on 14th August 2019.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Aamir Mir student of SYBBA (CA) participated in P.C. Alexzander Speech Competition conducted by Savitribai Phule Pune University, Pune.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={bbaca1} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={bbaca2} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={bbaca3} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={bbaca4} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={bbaca5} thumbnail />
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

export default Bbaca;