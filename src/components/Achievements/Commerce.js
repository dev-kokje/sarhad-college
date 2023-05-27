import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Image
} from 'react-bootstrap';

import comm1 from '../../assets/img/achievements/comm1.jpg';
import comm2 from '../../assets/img/achievements/comm2.jpg';
import comm3 from '../../assets/img/achievements/comm3.png';
import Hoc from '../../Hoc/Hoc';

import sken1 from '../../assets/img/softskill/commerce/Banking ppt.jpg';
import sken2 from '../../assets/img/softskill/commerce/GROUP presentation.jpg';
import sken3 from '../../assets/img/softskill/commerce/Gst 1.png';
import sken61 from '../../assets/img/softskill/commerce/Resume writing1.jpg';
import sken62 from '../../assets/img/softskill/commerce/resume writing2.jpg';
import sken71 from '../../assets/img/softskill/commerce/Tally 3.jpeg';
import sken72 from '../../assets/img/softskill/commerce/Tally 4.jpeg';
import sken73 from '../../assets/img/softskill/commerce/Tally.jpeg';

const Commerce = (props) => {

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
                    <h6>Department of Commerce</h6> 
                </Col>
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Seema Shivankar Received JRF Award UGC 2020.</p>
                                    <Row>
                                        <Col md={10}>
                                            <Image src={comm3} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>   
                            <tr>
                                <td>
                                    <p>University Rank Holders</p>
                                    <Row>
                                        <Col md={10}>
                                            <Image src={comm1} thumbnail />
                                        </Col>
                                        <Col md={10} className="my-2">
                                            <Image src={comm2} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Row>
                                        <Col md="4">
                                            <p>Banking ppt</p>
                                            <Image src={sken1} thumbnail/>
                                        </Col>
                                        <Col md="4">
                                            <p>GROUP presentation</p>
                                            <Image src={sken2} thumbnail/>
                                        </Col>
                                        <Col md="4">
                                            <p>Gst Webinar</p>
                                            <Image src={sken3} thumbnail/>
                                        </Col>
                                        <Col md="4">
                                            <p>model presentation</p>
                                            <Image src={sken1} thumbnail/>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Row>
                                        <p className="mx-3">Resume Writing</p>
                                    </Row>
                                    <Row>
                                        <Col md="4">
                                            <Image src={sken61} thumbnail/>
                                        </Col>
                                        <Col md="4">
                                            <Image src={sken62} thumbnail/>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Row>
                                        <p className="mx-3">Tally Workshop</p>
                                    </Row>
                                    <Row>
                                        <Col md="4">
                                            <Image src={sken71} thumbnail/>
                                        </Col>
                                        <Col md="4">
                                            <Image src={sken72} thumbnail/>
                                        </Col>
                                        <Col md="4">
                                            <Image src={sken73} thumbnail/>
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

export default Commerce;