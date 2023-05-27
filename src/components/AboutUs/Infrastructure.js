import React from 'react';
import {
    Row,
    Col,
    Image
} from 'react-bootstrap';
import Hoc from '../../Hoc/Hoc';

import premises0 from '../../assets/img/homecarousalmobile/2.png';
import premises1 from '../../assets/img/building-bg.jpg';
import premises2 from '../../assets/img/acadeics.jpg';
import premises3 from '../../assets/img/sports.jpg';
import premises4 from '../../assets/img/homecarousalmobile/3.png';

import building1 from '../../assets/img/infra/building-A.png';
import building2 from '../../assets/img/infra/building-BC.png';
import building3 from '../../assets/img/infra/building-C.png';

import cslab1 from '../../assets/img/infra/cslab1.png';
import cslab2 from '../../assets/img/infra/cslab2.png';
import plab from '../../assets/img/infra/physics-lab.png';
import blab from '../../assets/img/infra/biology-lab.png';
import clab from '../../assets/img/infra/chemistry-lab.png';

import ground1 from '../../assets/img/infra/ground1.png';
import ground2 from '../../assets/img/infra/ground-2.png';

import garden1 from '../../assets/img/infra/botanical3.png';
import garden2 from '../../assets/img/infra/botanical-garden1.png';
import garden3 from '../../assets/img/infra/botanical-garden2.png';

import vid1 from '../../assets/vid/Untitled 70_1080p_1.mp4';
import vid2 from '../../assets/vid/Untitled 72_1080p.mp4';

const Infrastructure = (props) => {

    return (
        <Hoc>
            <h4 className="text-center mb-4">COLLEGE <span className="font-primary mr-2">PREMISES</span></h4>
            <hr/>
            <p>
                College has an area of 2 acres of land including 3652.59  sq.m. built two buildings for academic and administration purpose. Indoor and outdoor sports facilities are available. Science lab is setup as per the requirement of experimental programme.
            </p>
            <p>
                To improve quality of teaching, there is provision of ICT enabled classes along with 1 smart board classroom. For effective learning, the faculties conduct various activities with computer aids technology. It has a research laboratory to sponsor research projects. The E-resources are provided to facilitate research.
            </p>
            <p>
                The library has a stock room with more than 8588 Books, textbooks, gifted books, specimen copies, journals, magazines, digital resources and print journals.3 Reading rooms with seating capacity of 130 students is available. It has 4 desktops, 2 printers. The digital library is equipped with 5 computers. The Auto-Lib NG Library management system is an automated package of library services that has several functions including OPAC service.
            </p>
            <p>
                All computers are connected by internet via broadband with 93 LAN terminals with the speed of 90 Mbps.All computers are protected with firewall system. Licence copies of software programmes like Tally, Plagiarism X Checker software are available.
            </p>
            <p>
                The College has adequate facilities for sports, open gym, yoga and different cultural activities. Common facilities like NSS unit, SWO, Botanical garden, canteen, water filter, fire extinguisher and lift for Divyangs. It is eco-friendly and attempts to reduce energy consumption.
            </p>
            <p>
                To maintain discipline and safety, the campus has CCTV cameras which cover approximately each and every corner including entrance, classrooms, lobbies, laboratories, ground office and staffroom To avoid inconvenience of electricity problems, back-up facility is available. All these facilities are maintained by technicians. The team is governing and updating the system as per the requirements through monitoring all facilities and ensures that they are used in best possible way.
            </p>
            <h5 className="mt-4">Facilities for E-content Developmentg</h5>
            <Row className="mt-4">
                <Col md={6}>
                    <video controls className="width-100">
                        <source src={vid1} type="video/mp4"/>
                    </video>
                </Col>
                <Col md={6}>
                    <video controls className="width-100">
                        <source src={vid2} type="video/mp4"/>
                    </video>
                </Col>
            </Row>
            <hr></hr>
            <Row className="mt-4">
                <Col md={6}>
                    <h5>College Building</h5>
                    <Image src={premises0} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>College Building</h5>
                    <Image src={premises1} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>College Building A</h5>
                    <Image src={building1} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>College Building B</h5>
                    <Image src={building2} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>College Building C</h5>
                    <Image src={building3} thumbnail />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <h5>Lecture Hall</h5>
                    <Image src={premises4} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Computer Lab</h5>
                    <Image src={premises2} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Computer Lab</h5>
                    <Image src={cslab1} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Computer Lab</h5>
                    <Image src={cslab2} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Physics Lab</h5>
                    <Image src={plab} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Biology Lab</h5>
                    <Image src={blab} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Chemistry Lab</h5>
                    <Image src={clab} thumbnail />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <h5>Sports Ground</h5>
                    <Image src={premises3} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Sports Ground</h5>
                    <Image src={ground1} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Sports Ground</h5>
                    <Image src={ground2} thumbnail />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <h5>Botanical Garden</h5>
                    <Image src={garden1} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Botanical Garden</h5>
                    <Image src={garden2} thumbnail />
                </Col>
                <Col md={6}>
                    <h5>Botanical Garden</h5>
                    <Image src={garden3} thumbnail />
                </Col>
            </Row>
        </Hoc>
    );
}

export default Infrastructure;