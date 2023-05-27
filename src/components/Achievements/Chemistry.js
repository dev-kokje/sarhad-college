import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Image
} from 'react-bootstrap';

import chem1 from '../../assets/img/achievements/science-model1.jpg';
import chem2 from '../../assets/img/achievements/science-model2.jpg';
import chem3 from '../../assets/img/achievements/science-model3.jpg';
import chem4 from '../../assets/img/achievements/science-model4.jpg';
import chem41 from '../../assets/img/achievements/science-model5.jpg';
import chem42 from '../../assets/img/achievements/science-model6.jpg';
import chem5 from '../../assets/img/achievements/science-rangoli.jpg';
import chem6 from '../../assets/img/achievements/science-rangoli2.png';
import chem7 from '../../assets/img/achievements/science-rangoli3.jpg';
import chem8 from '../../assets/img/achievements/science-drug-awareness1.jpg';
import chem9 from '../../assets/img/achievements/science-drug-awareness2.jpg';
import chem10 from '../../assets/img/achievements/science-drug-awareness3.jpg';
import chem11 from '../../assets/img/achievements/science-field1.jpg';
import chem12 from '../../assets/img/achievements/science-field2.jpg';
import chem13 from '../../assets/img/achievements/science-field3.jpg';
import chem14 from '../../assets/img/achievements/science-gd1.jpg';
import chem15 from '../../assets/img/achievements/science-gd2.jpg';
import chem16 from '../../assets/img/achievements/science-gd3.jpg';
import Hoc from '../../Hoc/Hoc';

const Chemistry = (props) => {

    return (
        <Hoc>
            <Row className="p-4 d-flex justify-content-center">
                <Col md={12}>
                    <h4>Students Activities & Achievements</h4>
                    <hr></hr> 
                </Col>
                <Col md={12}>
                    <p>Students participated in different activities conducted by Chemistry Department.</p> 
                </Col>
            </Row>
            <Row className="px-4 d-flex justify-content-center">
                <Col md={12}>
                    <h6>Chemistry Department</h6> 
                </Col>
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Science Fair - Model Competition</p>
                                    <p>Students created various models such as - </p>
                                    <ul>
                                        <li>Water purification model</li>
                                        <li>Periodic table and Soda water model</li>
                                        <li>Crystal structure model</li>
                                        <li>Biogas plant model</li>
                                        <li>Ammonia production plant</li>
                                        <li>Bohr’s atomic model</li>
                                        <li>Sea acidification model</li>
                                    </ul>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={chem1} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem2} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem3} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem4} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem41} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem42} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Science Day - Rangoli Competition</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={chem5} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem6} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem7} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Drug awareness program in collaboration with NSS</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={chem8} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem9} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem10} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Field Visits</p>
                                    <ul>
                                        <li>Department of Chemistry SPPU - NMR Demonstration</li>
                                        <li>Department of Chemistry SPPU - HPLC demonstration</li>
                                        <li>Department of Chemistry SPPU - UV demonstration</li>
                                    </ul>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={chem11} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem12} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem13} thumbnail />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Group Discussion</p>
                                    <Row>
                                        <Col md={4}>
                                            <Image src={chem14} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem15} thumbnail />
                                        </Col>
                                        <Col md={4}>
                                            <Image src={chem16} thumbnail />
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

export default Chemistry;