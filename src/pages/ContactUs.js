import React, { Component } from 'react'
import cx from 'classnames'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import * as emailjs from 'emailjs-com'

class ContactUs extends Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            showsuccess: false,
            showerr: false
        }
    }

    handleChange(evt){
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value,
            showsuccess: false,
            showerr: false
        });
    }

    handleReset() {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, subject, message } = this.state;

        let templateParams = {
            from_name: name,
            to_name: 'Rahul Kokje',
            subject: subject,
            from_mail: email,
            message_html: message,
       }

       emailjs.send(
            'service_48qbnm3',
            'template_856y9u8',
            templateParams,
            'user_djuN4cEg3QQaIusOWm6IT'
        ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });

        this.setState({
            showsuccess: true
        });
    }

    render() {
        return (
            <Container fluid>
                <Row className={cx("d-none d-md-flex")}>
                    <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                        <h2 className={cx("text-white")}>Contact Us</h2>
                    </Col>
                    <Col md={7} className={cx("headRow2")}>
                        
                    </Col>
                </Row>
                <Row className={cx("d-md-none")}>
                    <Col md={7} className={cx("p-4 d-flex justify-content-start align-items-center headRow2")}>
                        <h2 className={cx("text-white")}>Contact Us</h2>
                    </Col>
                </Row>
    
                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={11}>
                        <Row className={cx("p-4")}>
                            <Col md={6} className={cx("p-4 bg-white")}>
                                <h4>SARHAD <span className={cx("text-primary2 mr-2")}>ADDRESS</span><i class="fa fa-graduation"></i></h4>
                                <hr></hr>
                                <h5 className={cx("text-primary2 mb-4 footerHeadings")}>Contact Us</h5>
                                <div className={cx("d-flex flex-column")}>
                                    <p className={cx("text-muted pt-1 pr-4")}>
                                        <i class="fa fa-map-marker"></i>
                                        <span className={cx("px-2")}>
                                            Sr.No.79,80,81,76/4 (new),
                                            Near Rajaram Gas Agency,
                                            Pune-Kashmir Maitri Chowk,Katraj,
                                            Pune 411046.
                                        </span>
                                    </p>
                                    <p className={cx("text-muted pt-1")}>
                                        <i class="fa fa-phone"></i>
                                        <span className={cx("px-2")}>
                                            (020)24368621
                                        </span>
                                    </p>
                                    <p className={cx("text-muted pt-1")}>
                                        <i class="fa fa-envelope"></i>
                                        <span className={cx("px-2")}>
                                            sarhadcollege@gmail.com
                                        </span>
                                    </p>
                                    <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.54652239052!2d73.8545132!3d18.4548004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac653591baaaa13e!2sSarhad%20College%20of%20Arts%2CCommerce%20and%20Science!5e0!3m2!1sen!2sin!4v1604722970342!5m2!1sen!2sin" className={cx("map")} frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className={cx("p-4 bg-white")}>
                                <h4>ONLINE <span className={cx("text-primary2 mr-2")}>ENQUIRY</span><i class="fa fa-graduation"></i></h4>
                                <hr></hr>
                                <Form action="mailto:rahulkokje1097@gmail.com" method="post" enctype="text/plain">
                                    {
                                        this.state.showsuccess ?
                                        (
                                            <Alert variant="success" dismissible>
                                                <p>
                                                    Thanks for the enquiry. We will get back to you soon. For quick response, please contact our office.
                                                </p>
                                            </Alert>
                                        ) : (<div></div>) 
                                    }
                                    {
                                        this.state.showerr ?
                                        (
                                            <Alert variant="danger" dismissible>
                                                <p>
                                                    Something went wrong. Please try again later. For quick response, please contact our office.
                                                </p>
                                            </Alert>
                                        ) : (<div></div>) 
                                    }
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="name"
                                            onChange={this.handleChange}
                                            value={this.state.name} 
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                            type="email"
                                            name="email"
                                            onChange={this.handleChange}
                                            value={this.state.email}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="subject"
                                            onChange={this.handleChange}
                                            value={this.state.subject}    
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Enquiry Details</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={3} 
                                            name="message"
                                            onChange={this.handleChange}
                                            value={this.state.message}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Button variant="success" onClick={this.handleSubmit}>Submit</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

    
}

export default ContactUs