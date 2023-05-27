import React from "react";
import Hoc from "../../Hoc/Hoc";
import {
    Row,
    Col,
    Nav
} from 'react-bootstrap';

const Main = (props) => {

    return (
        <Hoc>
            <Row className="d-flex justify-content-center mt-4 pt-4">
                <Col md={8}>
                    Select the course of your choice from the menu to explore more.
                </Col>
            </Row>
        </Hoc>
    );
}

export default Main;