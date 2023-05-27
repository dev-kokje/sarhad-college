import React, { Component } from 'react'
import cx from 'classnames'
import { Container, Row, Col, Table, Image} from 'react-bootstrap'

import seminar1 from '../assets/img/placements/seminar1.jpeg';
import seminar2 from '../assets/img/placements/seminar2.png';
import seminar3 from '../assets/img/placements/seminar3.png';
import seminar4 from '../assets/img/placements/seminar4.png';
import seminar5 from '../assets/img/placements/seminar5.jpg';
import seminar6 from '../assets/img/placements/seminar6.jpg';

class Placements extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let placements = [
            {
                "year": "2019-20",
                "name": "Dhanashri Devgirikar",
                "course": "BCOM",
                "employer": "Infosys"
            },
            {
                "year": "2019-20",
                "name": "Akash Awale",
                "course": "BCOM",
                "employer": "Infosys"
            },
            {
                "year": "2019-20",
                "name": "Amruta Rananavare",
                "course": "B. Sc. (CS)",
                "employer": "Mphasis"
            },
            {
                "year": "2019-20",
                "name": "Madhuree Kadam",
                "course": "B. Sc. (CS)",
                "employer": "Softwaregen Technology"
            },
            {
                "year": "2019-20",
                "name": "Aarti Yadav",
                "course": "S.Y MSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Shruti Borkar",
                "course": "S.Y MSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Prajakta Jagtap",
                "course": "S.Y MSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Ganesh Bhalekar",
                "course": "F.Y MSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Ashwini Tayade",
                "course": "F.Y MSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Komal Walgude",
                "course": "F.Y MSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Utkarsha Adsul ",
                "course": "F.Y MSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Suraj Salunkhe ",
                "course": "T.Y BSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Dheeraj Chavan ",
                "course": "T.Y BSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Dashrat Rakhunde ",
                "course": "S.Y MSc (CS)",
                "employer": "Dynamic infotech"
            },
            {
                "year": "2019-20",
                "name": "Komal Anandas",
                "course": "S.Y.MSC",
                "employer": "D Haridas and Co"
            },
            {
                "year": "2019-20",
                "name": "Sayali Kadam",
                "course": "T.Y BSc (CS)",
                "employer": "D Haridas and Co"
            },
            {
                "year": "2019-20",
                "name": "Yukta Ready",
                "course": "T.Y BBA",
                "employer": "D Haridas and Co"
            },
            {
                "year": "2019-20",
                "name": "Abhijit Kumbhar",
                "course": "T.Y BCom",
                "employer": "D Haridas and Co"
            },
            {
                "year": "2019-20",
                "name": "Suraj ingulakr",
                "course": "T.Y BCom",
                "employer": "D Haridas and Co"
            },
            {
                "year": "2019-20",
                "name": "Akshata Shinde",
                "course": "T.Y BSc (CS)",
                "employer": "D Haridas and Co"
            },
            {
                "year": "2019-20",
                "name": "Kiran Navghare",
                "course": "T.Y BSc (CS)",
                "employer": "Honeykloud"
            },
            {
                "year": "2019-20",
                "name": "Rutuja Agarwal",
                "course": "T.Y BSc (CS)",
                "employer": "Honeykloud"
            },
            {
                "year": "2019-20",
                "name": "Shriya Pagui",
                "course": "",
                "employer": "Honeykloud"
            },
            {
                "year": "2019-20",
                "name": "Shruti Dangi",
                "course": "BBA",
                "employer": "Honeykloud"
            },
            {
                "year": "2019-20",
                "name": "Vighnesh Sonawane",
                "course": "BBA",
                "employer": "Honeykloud"
            } 
        ];

        const listItems = placements.map((placement) =>
            <tr>
                <td>{placement.year}</td>
                <td>{placement.name}</td>
                <td>{placement.course}</td>
                <td>{placement.employer}</td>
            </tr> 
        );

        return (
            <Container fluid>
                <Row className={cx("d-none d-md-flex")}>
                    <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                        <h2 className={cx("text-white")}>Placements</h2>
                    </Col>
                    <Col md={7} className={cx("headRow2")}>
                        
                    </Col>
                </Row>
                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={9} className={cx("py-4")}>
                        <Row>
                            <Col md={12}>
                                <h5>Placement Assistance - Career Guiance Seminars (2019-20)</h5>
                            </Col>
                        </Row>
                        <Row className={cx("d-flex justify-content-center")}>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={seminar2} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={seminar3} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={seminar4} thumbnail></Image>
                            </Col>
                        </Row>
                        <Row className={cx("d-flex justify-content-center")}>
                        <Col md={4} className={cx("py-4")}>
                                <Image src={seminar5} thumbnail></Image>
                            </Col>
                            <Col md={4} className={cx("py-4")}>
                                <Image src={seminar6} thumbnail></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={9} className={cx("py-4")}>
                        <Row>
                            <Col md={12}>
                                <h5>Placement Drives (2019-20)</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name of Company</th>
                                            <th>Post</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Dynamic infotech</td>
                                            <td>Internship in PHP/Java</td>
                                        </tr>
                                        <tr>
                                            <td>Khurade's IT solution</td>
                                            <td>Interns for web development</td>
                                        </tr>
                                        <tr>
                                            <td>Rubicon for Infosys</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>cloverplacement-For Nilaya Acedamy</td>
                                            <td>Education counceller</td>
                                        </tr>
                                        <tr>
                                            <td>Mphasis</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Tech Mahindra</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>D Haridas and Co</td>
                                            <td>pre sale/sale/account</td>
                                        </tr>
                                        <tr>
                                            <td>Honeykloud</td>
                                            <td>TSE</td>
                                        </tr>
                                        <tr>
                                            <td>Softwaregen Technology</td>
                                            <td>Web developer</td>
                                        </tr>
                                        <tr>
                                            <td>Jarvees Academy </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2coms group</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>CCA softech solutions for(Globsyn 3rd life)</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={9} className={cx("py-4")}>
                        <Row>
                            <Col md={12}>
                                <h5>Placement Details (2019-20)</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Year</th>
                                        <th>Student Name</th>
                                        <th>Class</th>
                                        <th>Name of the Employer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { listItems }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Placements