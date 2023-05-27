import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Image
} from 'react-bootstrap';

import bba2 from '../../assets/img/achievements/bba-2.png';
import bba3 from '../../assets/img/achievements/bba-3.png';
import bba4 from '../../assets/img/achievements/bba-yoga.jpg';
import bba5 from '../../assets/img/achievements/bba-quiz.jpg';
import bba6 from '../../assets/img/achievements/bba-guest.jpg';
import bba7 from '../../assets/img/achievements/bba-poster.jpg';
import bba8 from '../../assets/img/achievements/bba-model.jpg';
import bba9 from '../../assets/img/achievements/bba1.jpg';
import Hoc from '../../Hoc/Hoc';

const Bba = (props) => {

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
                    <h6>BBA Department</h6> 
                </Col>
                <Col md={12}>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>Vighnesh Sonawane got Special recognition award in Zeal Covid -19 Hackathon 07.06.2020.</td>
                                <td>
                                    <Image src={bba2} thumbnail />
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Poster made by Vighnesh Sonawane  and Saurabh Chavan for Avishkar Competition of SPPU won Certificate at District Level.</p>
                                </td>
                                <td>
                                    <Image src={bba3} thumbnail />
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Add on Course Yoga and Meditation 14/08/2019</p>
                                </td>
                                <td>
                                    <Image src={bba4} thumbnail />
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Business Quiz Competition 09/08/2019</p>
                                </td>
                                <td>
                                    <Image src={bba5} thumbnail />
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Guest Lecture 10/08/2019</p>
                                </td>
                                <td>
                                    <Image src={bba6} thumbnail />
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Poster Presentation Competition 26/08/2019</p>
                                </td>
                                <td>
                                    <Image src={bba7} thumbnail />
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Model Competition 13/12/2019</p>
                                </td>
                                <td>
                                    <Image src={bba8} thumbnail />
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-trophy"></i></td>
                                <td>
                                    <p>Industrial Visit 03/01/2020</p>
                                </td>
                                <td>
                                    <Image src={bba9} thumbnail />
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

export default Bba;