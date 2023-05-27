import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';

import logo from '../../assets/img/sarhad-logo.jpg';
import naac from '../../assets/img/naac.jpg';

const LogoBar = (props) => {

    return (
        <Container fluid>
            <Row className="d-none d-md-flex justify-content-center">
                <Col md="11" className="d-flex justify-content-center py-3 border-bottom">
                    <img src={logo} alt="sarhad logo" className="sarhad-logo"/>
                    <span className="d-flex flex-column justify-content-center align-items-center mx-4">
                        <h3 className="font-weight-bold font-primary">Sarhad College of Arts, Commerce and Science, Katraj, Pune</h3>
                        <p className="font-weight-bold">[Affiliated to Savitribai Phule Pune University (ID No. PU/PN/ACS/300/2008) & Recognised By Govt. Of Maharashtra]</p>
                        <marquee className="marquee">
                            <span className="font-sm ml-2"><i class="fa fa-star"></i></span> Sarhad provides a multicultural, multi ethnic, multilingual and multi religious environment
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Sarhad provides special facilities to girl students
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Number of girl students is on the rise which credits to the safe and protected atmosphere in the campus
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Utmost care is taken to support the physically challenged students
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> We consistently have a university topper from our college, for M.Com.
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Government Scholarships for students
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Scholarships and fee concession by management for needy and deserving candidates
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> “Sanjay Nahar scholarship” by teaching staff for needy and deserving last year student
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Free library facility
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> No admission form fee
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Book Publication (CHINAR Publication)
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Organization of Kashmir Festival ,Vishwa Punjabi Sahitya Sammelan & Akhil Bhartiya Marathi Sahitya Sammelan
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Organization of Kargil Marathon (Run for Peace)
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Conferring Sant Namdev National Award , Bhupen Hazarika Award
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> GAASH Music Band (mission for peace) by Sarhad students
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> AASH Women Empowerment Organization
                            <span className="font-sm ml-4"><i class="fa fa-star"></i></span> Sarhad teaching and nonteaching staff’s wards take concession in fees by studying in Sarhad.
                        </marquee>
                    </span>
                    <img src={naac} alt="naac logo" className="sarhad-logo"/>
                </Col>
            </Row>
            <Row className="d-md-none justify-content-center zindex-900">
                <Col md="11" className="d-flex justify-content-center py-3 border-bottom">
                    <img src={logo} alt="sarhad logo" className="sarhad-logo"/>
                    <span className="d-flex flex-column justify-content-start align-items-center mx-4">
                        <h3 className="font-weight-bold font-primary">Sarhad College</h3>
                        <h6 className="pl-2 font-weight-bold font-primary">of Arts, Commerce and Science, Katraj, Pune</h6>
                    </span>
                </Col>
            </Row>
        </Container>
    );
}

export default LogoBar;