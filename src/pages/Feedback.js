import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const Feedback = (props) => {

    return (
        <Row className={cx("bg-gray d-flex justify-content-center px-4 admissionRow")}>
            <Col md={11}>
                <Row className={cx("d-flex justify-content-between")}>
                    <Col md={3}>
                        <a href="https://forms.gle/GhRTWKNVs4igTqoCA" target="blank" rel="noreferrer">
                            <Card className="academicUnit my-1">
                                <Card.Body className={cx("p-4")}>
                                    <Card.Title className={cx("text-center academicIcon")}>
                                        <i class="fa fa-user"></i>
                                    </Card.Title>
                                    <Card.Text className={cx("text-center text-primary2 font-weight-bold")}>
                                        Student Feeback 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a href="https://forms.gle/mq938eQxHujDjgzE9" target="blank" rel="noreferrer">
                            <Card  className="academicUnit my-1">
                                <Card.Body className={cx("p-4")}>
                                    <Card.Title className={cx("text-center academicIcon")}>
                                        <i class="fa fa-user"></i>
                                    </Card.Title>
                                    <Card.Text className={cx("text-center text-primary2 font-weight-bold")}>
                                        Parent Feedback
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a href="https://forms.gle/4r38tMhbcVGmhDCu5" target="blank" rel="noreferrer">
                            <Card  className="academicUnit my-1">
                                <Card.Body className={cx("p-4")}>
                                    <Card.Title className={cx("text-center academicIcon")}>
                                        <i class="fa fa-user"></i>
                                    </Card.Title>
                                    <Card.Text className={cx("text-center text-primary2 font-weight-bold")}>
                                        Alumni Feedback
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a href="https://forms.gle/PsCQCJUAMJd4bBbM9" target="blank" rel="noreferrer">
                            <Card  className="academicUnit my-1">
                                <Card.Body className={cx("p-4")}>
                                    <Card.Title className={cx("text-center academicIcon")}>
                                        <i class="fa fa-user"></i>
                                    </Card.Title>
                                    <Card.Text className={cx("text-center text-primary2 font-weight-bold")}>
                                        Teacher Feedback
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>  
            </Col> 
        </Row>
    );
}

export default Feedback;