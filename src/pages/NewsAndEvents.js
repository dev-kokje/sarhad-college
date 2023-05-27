/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import cx from "classnames";
import { Container, Row, Col, Card } from "react-bootstrap";

import upcomingEvent1doc from "../assets/docs/Sarhad Target UPSC Scholarship Programme.pdf"

class NewsAndEvents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid>
        <Row className={cx("d-none d-md-flex")}>
          <Col
            md={5}
            className={cx(
              "d-flex justify-content-center align-items-center headRow1"
            )}
          >
            <h2 className={cx("text-white")}>News & Events</h2>
          </Col>
          <Col md={7} className={cx("headRow2")}></Col>
        </Row>

        <Row className={cx("d-flex justify-content-center my-4")}>
          <Col md={10} className={cx("pt-4")}>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      <h5>Sarhad Target UPSC Scholarship Programme</h5>
                    </Card.Text>
                    <a
                      className="btn btn-outline-success"
                      href={upcomingEvent1doc}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewsAndEvents;
