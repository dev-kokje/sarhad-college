import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col,
    Nav
} from 'react-bootstrap';
import cx from 'classnames';
import Hoc from '../../Hoc/Hoc';

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const quickLinks = {'About Sarhad Foundation': 'https://www.facebook.com/SarhadPune/', 'Savitribai Phule Pune University': 'http://www.unipune.ac.in/', 'Savitribai Phule Pune University Examination': 'http://exam.unipune.ac.in/'
        };

        const quick = Object.entries(quickLinks).map(([key,value])=>{
               return <Nav.Link href={value} target="_blank" className="font-md py-2">{key}</Nav.Link>
        });

        const exploreLinks = ['Campus Life', 'Social Initiatives', 'Institute Newsletter', 'Educational Programs', 'Sarhad Foundation']

        return(
            <Hoc>
                <Container fluid>
                    <Row className="footer d-flex justify-content-center py-4 border-top">
                        <Col md={11}>
                            <Row>
                                <Col md={4} className="p-4 border-right">
                                    <h5 className="text-primary2 mb-4 footerHeadings">Quick Links</h5>
                                    <div className="d-flex flex-column">
                                        {quick}
                                    </div>
                                </Col>
                                <Col md={4} className="p-4">
                                    <h5 className="text-primary2 mb-4 footerHeadings">Contact Us</h5>
                                    <div className="d-flex flex-column">
                                        <h5 className="pb-1">Sarhad College of Arts, Commerce and Science</h5>
                                        <p className="text-muted pt-1">
                                            <i class="fa fa-map-marker"></i>
                                            <span className="px-2">
                                                Sr.No.79,80,81,76/4 (new),
                                                Near Rajaram Gas Agency,
                                                Pune-Kashmir Maitri Chowk,Katraj,
                                                Pune 411046.
                                            </span>
                                        </p>
                                        <p className="text-muted pt-1">
                                            <i class="fa fa-phone"></i>
                                            <span className="px-2">
                                                (020)24368621
                                            </span>
                                        </p>
                                        <p className="text-muted pt-1">
                                            <i class="fa fa-envelope"></i>
                                            <span className="px-2">
                                                sarhadcollege@gmail.com
                                            </span>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4} className="p-4 border-right">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.54652239052!2d73.8545132!3d18.4548004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac653591baaaa13e!2sSarhad%20College%20of%20Arts%2CCommerce%20and%20Science!5e0!3m2!1sen!2sin!4v1604722970342!5m2!1sen!2sin" className={cx("map")} frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </Col>  
                            </Row>
                        </Col>  
                    </Row>

                    <Row className="copyrightBar d-flex justify-content-center">
                        <Col md={11} className="d-flex align-items-center text-white font-sm">
                            Copyrights © 2020-2021 Sarhad College. All rights reserved
                        </Col>
                    </Row>            

                </Container>
            </Hoc>
        );
    }
}

export default Footer;