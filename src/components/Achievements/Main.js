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
import Hoc from '../../Hoc/Hoc';

const Main = (props) => {

    return (
        <Hoc>
            <Row className="p-4 d-flex justify-content-center">
                <Col md={12}>
                    <h4>Students Activities & Achievements</h4>
                    <hr></hr> 
                </Col>
                <Col md={12}>
                    <p>Our students take lead in organizing various activities like Science Fair, Project Exhibitions, Poster Presentations, Group Discussions, Sports Events, etc. They also participate in various intercollegiate as well as state level competitions and secure prizes. Select the department to see students achievements.</p> 
                </Col>
            </Row>
        </Hoc>
    );
}

export default Main;