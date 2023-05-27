import React, { useState } from 'react';
import {
    Row,
    Col,
    Card,
    Modal,
    Button
} from 'react-bootstrap';
import Hoc from '../../Hoc/Hoc';

const LeadershipCard = (props) => {

    const [lgShow, setLgShow] = useState(false);

    return (
        <Hoc>
            <Card className="shadow-sm">
                <Card.Header className="font-weight-bold">{props.title}</Card.Header>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text className="font-sm">
                        {props.text.substring(0, 250) + "..."}
                    </Card.Text>
                    <Button variant="outline-success" className="btn-sm" onClick={() => setLgShow(true)}>Read more</Button>
                </Card.Body>
            </Card>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="d-flex justify-content-center">
                        <Col md={12} className="d-flex flex-column justify-content-center">
                            <img variant="top" className="w-50" src={props.img} alt="leader-image" />
                            <h1>{props.name}</h1>
                            <p>
                                {props.text}
                            </p>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Hoc>
    );
}

export default LeadershipCard;