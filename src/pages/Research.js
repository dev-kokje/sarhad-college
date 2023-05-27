import React, { Component } from 'react'
import cx from 'classnames'
import { Container, Row, Col, Table, Image} from 'react-bootstrap'

import research1 from '../assets/docs/research/1.pdf';
import research2 from '../assets/docs/research/2.pdf';
import research3 from '../assets/docs/research/3.pdf';

class Research extends Component { 

    render() {


        return (
            <Container fluid>
                <Row className={cx("d-none d-md-flex")}>
                    <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                        <h2 className={cx("text-white")}>Research</h2>
                    </Col>
                    <Col md={7} className={cx("headRow2")}>
                        
                    </Col>
                </Row>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={9} className={cx("py-4")}>
                        <Row>
                            <Col md={12} className={cx("py-4")}>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>Books and book chapters in edited volumes/books published by teachers during year 2021-22</b>
                                            </td>
                                            <td>
                                                <a href={ research1 } target="_blank" rel="noreferrer">Click Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Book chapters published in edited volumes/books published by students during year 2021-22</b>
                                            </td>
                                            <td>
                                                <a href={ research2 } target="_blank" rel="noreferrer">Click Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Research papers published by teachers in the Journals notified on UGC website during year 2021-22</b>
                                            </td>
                                            <td>
                                                <a href={ research3 } target="_blank" rel="noreferrer">Click Here</a>
                                            </td>
                                        </tr>
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

export default Research;