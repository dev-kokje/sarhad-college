import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Image
} from 'react-bootstrap';

import ts1 from '../../assets/img/achievements/ts1.jpg';
import ts2 from '../../assets/img/achievements/ts2.jpg';
import ts3 from '../../assets/img/achievements/ts3.jpg';
import Hoc from '../../Hoc/Hoc';

const Teachers = (props) => {

    return (
        <Hoc>
            <Row className="p-4 d-flex justify-content-center">
                <Col md={12}>
                    <h4>Teachers Achievements</h4>
                    <hr></hr> 
                </Col>
            </Row>
            <Row className="px-4 d-flex justify-content-center">
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Appreciation of Asst Prof Sonali Gholve for clearing SET Exam 2015-16</p>
                                    <Row>
                                        <Col md={10}>
                                            <Image src={ts1} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Himakshara Best Teacher Award (2018-19) Asst Prof Swati Divatankar</p>
                                    <Row>
                                        <Col md={10}>
                                            <Image src={ts2} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Research Paper presentation by Asst Prof Swati Divatankar 2018-19</p>
                                    <Row>
                                        <Col md={10}>
                                            <Image src={ts3} thumbnail />
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

export default Teachers;