import React, { Component } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import cx from "classnames";

import Hoc from "../Hoc/Hoc";

import directorImg from "../assets/img/director.png";
import campus1 from "../assets/img/building-bg.jpg";
import campus2 from "../assets/img/acadeics.jpg";
import campus3 from "../assets/img/cultural.jpg";
import campus4 from "../assets/img/sports.jpg";

import event1 from "../assets/img/building-bg.jpg";
import event2 from "../assets/img/acadeics.jpg";

import img6 from "../assets/img/homecarousalmobile/1.png";
import img7 from "../assets/img/homecarousalmobile/2.png";
import img8 from "../assets/img/homecarousalmobile/3.png";
import img9 from "../assets/img/homecarousalmobile/4.png";
import img10 from "../assets/img/homecarousalmobile/5.png";
import Menutab from "../components/common/menutab";

import carousal1 from "../assets/img/sarhad-home/c1.png";
import carousal2 from "../assets/img/sarhad-home/c2.png";
import carousal3 from "../assets/img/sarhad-home/c3.png";
import carousal4 from "../assets/img/sarhad-home/c4.png";
import carousal5 from "../assets/img/sarhad-home/c5.png";
import carousal6 from "../assets/img/sarhad-home/c6.png";
import carousal7 from "../assets/img/sarhad-home/c7.png";
import carousal8 from "../assets/img/sarhad-home/c8.png";
import carousal9 from "../assets/img/sarhad-home/c9.png";
import carousal10 from "../assets/img/sarhad-home/c10.png";
import carousal11 from "../assets/img/sarhad-home/c11.png";
import carousal12 from "../assets/img/sarhad-home/c12.png";
import carousal13 from "../assets/img/sarhad-home/c13.png";
import carousal14 from "../assets/img/sarhad-home/c14.png";
import carousal15 from "../assets/img/sarhad-home/c15.png";
import carousal16 from "../assets/img/sarhad-home/c16.png";
import carousal17 from "../assets/img/sarhad-home/c17.png";
import carousal18 from "../assets/img/sarhad-home/c18.png";
import carousal19 from "../assets/img/sarhad-home/c19.png";
import carousal20 from "../assets/img/sarhad-home/c20.png";
import carousal21 from "../assets/img/sarhad-home/c21.png";
import carousal22 from "../assets/img/sarhad-home/c22.png";
import carousal23 from "../assets/img/sarhad-home/c23.png";
import carousal24 from "../assets/img/sarhad-home/c24.png";
import carousal25 from "../assets/img/sarhad-home/c25.png";
import carousal26 from "../assets/img/sarhad-home/c26.png";
import carousal27 from "../assets/img/sarhad-home/c27.png";

import upcomingEvent1 from "../assets/img/upcoming_events/upcomingEvent.png";
import upcomingEvent1doc from "../assets/docs/Sarhad Target UPSC Scholarship Programme.pdf";
import library from "../assets/docs/BHARAT RATNA ATAL BIHARI VAJPAYEE LIBRARY.pdf";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const eventList = {};

    const events = Object.entries(eventList).map(([key, value]) => {
      return (
        <Card className={cx("flex-row my-3 shadow-sm academicUnit")}>
          <Card.Body className={cx("py-0 pt-3 px-2")}>
            <Card.Text>
              <h6 className={cx("text-primary2")}>{value.name}</h6>
              <p className={cx("text-muted")}>
                <i class="fa fa-calendar"></i>
                <span className={cx("pl-2")}>{value.date}</span>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });

    const carousalImages = [
      {
        image: carousal1,
        caption: ""
      }, 
      {
        image: carousal2,
        caption: ""
      },
      {
        image: carousal3,
        caption: ""
      },
      {
        image: carousal4,
        caption: ""
      },
      {
        image: carousal5,
        caption: ""
      },
      {
        image: carousal6,
        caption: ""
      },
      {
        image: carousal7,
        caption: ""
      },
      {
        image: carousal8,
        caption: ""
      },
      {
        image: carousal9,
        caption: ""
      },
      {
        image: carousal10,
        caption: ""
      },
      {
        image: carousal11,
        caption: ""
      },
      {
        image: carousal12,
        caption: ""
      },
      {
        image: carousal13,
        caption: ""
      },
      {
        image: carousal14,
        caption: ""
      },
      {
        image: carousal15,
        caption: ""
      },
      {
        image: carousal16,
        caption: ""
      },
      {
        image: carousal17,
        caption: ""
      },
      {
        image: carousal18,
        caption: ""
      },
      {
        image: carousal19,
        caption: ""
      },
      {
        image: carousal20,
        caption: ""
      },
      {
        image: carousal21,
        caption: ""
      },
      {
        image: carousal22,
        caption: ""
      },
      {
        image: carousal23,
        caption: ""
      },
      {
        image: carousal24,
        caption: ""
      }
      ,
      {
        image: carousal25,
        caption: ""
      }
      ,
      {
        image: carousal26,
        caption: ""
      },
      {
        image: carousal27,
        caption: ""
      }
    ]

    const carousalItems = carousalImages.map((items, index) => <Carousel.Item interval={3000} key={index}>
      <img
        className="d-block w-100 showCaseImage"
        src={items.image}
        alt={"CarousalImage" + index}
      />
      <Carousel.Caption>
        <p>{items.caption}</p>
      </Carousel.Caption>
    </Carousel.Item>)


    return (
      <Hoc>
        <Container fluid className={cx("bg-white shadow-sm")}>
          <Row className={cx("d-flex justify-content-center showCaseRow p-0")}>
            <Col md={2} className="p-0 d-none d-md-flex">
              <Card>
                {/* <Card.Header className="text-center ">Quick Links</Card.Header> */}
                <Card.Body className="p-0">
                  <Menutab title="About Us" link="/about-us"></Menutab>
                  <Menutab title="Administration" link="/committee"></Menutab>
                  <Menutab
                    title="Infrastructure & Facilities"
                    link="/about-us/infrastructure"
                  ></Menutab>
                  <Menutab title="IQAC" link="/iqac"></Menutab>
                  <Menutab title="Research" link="/research"></Menutab>
                  <Menutab title="News & Events" link="/newsevents"></Menutab>
                  <Menutab title="Alumni Association" link="/alumni"></Menutab>
                  <Menutab title="Scholarships"></Menutab>
                  <Menutab
                    title="Sarhad Android App"
                    link="http://learningsetu.com/elogin.php"
                  ></Menutab>
                </Card.Body>
              </Card>
            </Col>

            <Col md={8} className="p-0">
              <Carousel className={cx("d-none d-md-flex")}>
                { carousalItems }
              </Carousel>

              <Carousel className={cx("d-md-none")}>
                <Carousel.Item interval={2500}>
                  <Col md={12} className={cx("p-0")}>
                    <img
                      src={img6}
                      className={cx("showCaseImage")}
                      alt="Sarhad"
                    ></img>
                  </Col>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                  <Col md={12} className={cx("p-0")}>
                    <img
                      src={img7}
                      className={cx("showCaseImage")}
                      alt="Sarhad"
                    ></img>
                  </Col>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                  <Col md={12} className={cx("p-0")}>
                    <img
                      src={img8}
                      className={cx("showCaseImage")}
                      alt="Sarhad"
                    ></img>
                  </Col>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                  <Col md={12} className={cx("p-0")}>
                    <img
                      src={img9}
                      className={cx("showCaseImage")}
                      alt="Sarhad"
                    ></img>
                  </Col>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                  <Col md={12} className={cx("p-0")}>
                    <img
                      src={img10}
                      className={cx("showCaseImage")}
                      alt="Sarhad"
                    ></img>
                  </Col>
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col md={2} className="p-0 d-none d-md-flex">
              <Card>
                {/* <Card.Header className="text-center">Students Corner</Card.Header> */}
                <Card.Body className="p-0">
                  <Menutab title="Online Admission" link="/admission"></Menutab>
                  <Menutab
                    title="Examinations"
                    link="/examination"
                    new={true}
                  ></Menutab>
                  <Menutab
                    title="Activities & Achievements"
                    link="/achievements"
                  ></Menutab>
                  <Menutab title="Placements" link="/placements"></Menutab>
                  <Menutab title="Sports" link="/achievements/sports"></Menutab>
                  <Menutab
                    title="Library"
                    link={library}
                    target="_blank"
                  ></Menutab>
                  <Menutab title="NSS" link="/nss"></Menutab>
                  <Menutab title="Technofest" link="/technofest"></Menutab>
                  <Menutab
                    title="National Level Conference"
                    link="/conference"
                  ></Menutab>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row
            className={cx(
              "shadow-sm border-bottom d-flex justify-content-center align-items-center announcementsBoard my-2"
            )}
          >
            <Col
              md={3}
              className={cx(
                "bg-white d-flex justify-content-center align-items-center style.announcementsBoardCol"
              )}
            >
              <h6 className={cx("text-center")}>
                IMPORTANT{" "}
                <span className={cx("text-primary2")}>ANNOUNCEMENTS</span>
              </h6>
            </Col>
            <Col md={9}>
              <marquee>
                UG and PG admissions are open for academic year 2022-23.{" "}
                <a href="http://sarhad.org/">Click here to know more</a>
                &nbsp; &nbsp;Pune University Exam Timetable -{" "}
                <a href="/examination">Click here</a>
              </marquee>
            </Col>
          </Row>

          <Col md={5} className={cx("p-4 d-md-none")}>
            <h4>
              UPCOMING <span className={cx("text-primary2 mr-2")}>EVENTS</span>
              <i class="fa fa-calendar"></i>
            </h4>
            <hr></hr>
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src={upcomingEvent1} />
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

          <Container fluid>
            <Row className={cx("d-flex justify-content-center py-3")}>
              <Col md={8} className={cx("p-4")}>
                <h4>
                  ABOUT <span className={cx("text-primary2 mr-2")}>SARHAD</span>
                  <i class="fa fa-graduation"></i>
                </h4>
                <hr></hr>
                <Row>
                  <Col md={12} className="my-2">
                    <p>
                      Sarhad was founded in June 1984. 'breathvakya' being the
                      mission statement of the society, all the Institutes
                      follow the same. All the institutes run by the Society are
                      engaged in the task of providing equal opportunities to
                      everyone in the field of education. The college has
                      maintained its unique identity irrespective of financial
                      or academic background, with the main objective of
                      imparting quality professional education to all in
                      general. Our college is permanently affiliated to the
                      Government of Maharashtra and Pune University. Also
                      recognized by University Grants Commission i.e. U.G.C u/s.
                      2 (f) and 12 (B)
                    </p>
                    <a href="https://www.facebook.com/SarhadPune/">
                      <Button
                        variant="outline-success"
                        className={cx("btn-sm mr-2")}
                      >
                        Read more
                      </Button>
                    </a>
                    <Button variant="success" className={cx("btn-sm")}>
                      Newsletter 2020
                    </Button>
                  </Col>
                  <Col md={6}>
                    <iframe
                      className={cx("sarhadVid")}
                      src="https://www.youtube.com/embed/BCP1iYqSHes"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </Col>
                  <Col md={6}>
                    <iframe
                      title="college introduction"
                      className={cx("sarhadVid")}
                      src="https://www.youtube.com/embed/57LeweHllC4"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </Col>
                </Row>
              </Col>
              <Col md={3} className={cx("p-4 bg-gray")}>
                <h4>
                  FOUNDER'S{" "}
                  <span className={cx("text-primary2 mr-2")}>DESK</span>
                  <i class="fa fa-"></i>
                </h4>
                <hr></hr>
                <Card className={cx("shadow-sm border-0")}>
                  <Card.Img variant="top" src={directorImg} />
                  <Card.Body>
                    <Card.Title>Hon. Sanjay Nahar</Card.Title>
                    <p>
                      Education is an all-encompassing word. It’s not just
                      confined to books and degrees. The real objective of
                      education is to emancipate an individual and blossom his/
                      her personality to the fullest...
                    </p>
                    <Link to="/about-us">
                      <Button
                        variant="outline-success"
                        className={cx("btn-sm")}
                      >
                        Read more
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <Row
            className={cx(
              "bg-gray d-flex justify-content-center px-4 admissionRow"
            )}
          >
            <Col md={11}>
              <Row
                className={cx(
                  "d-flex justify-content-between shadow border-bottom"
                )}
              >
                <Col md={8} className={cx("bg-white p-4")}>
                  <h4>
                    ACADEMIC{" "}
                    <span className={cx("text-primary2 mr-2")}>UNITS</span>
                    <i class="fa fa-graduation"></i>
                  </h4>
                  <hr></hr>
                  <Row className={cx("d-flex justify-content-between")}>
                    <Col md={3}>
                      <Link to="/academics/bsccs">
                        <Card className="academicUnit my-1">
                          <Card.Body className={cx("p-4")}>
                            <Card.Title
                              className={cx("text-center academicIcon")}
                            >
                              <i class="fa fa-flask"></i>
                            </Card.Title>
                            <Card.Text
                              className={cx(
                                "text-center text-primary2 font-weight-bold"
                              )}
                            >
                              SCIENCE
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                    <Col md={3}>
                      <Link to="/academics/bcom">
                        <Card className="academicUnit my-1">
                          <Card.Body className={cx("p-4")}>
                            <Card.Title
                              className={cx("text-center academicIcon")}
                            >
                              <i class="fa fa-university"></i>
                            </Card.Title>
                            <Card.Text
                              className={cx(
                                "text-center text-primary2 font-weight-bold"
                              )}
                            >
                              COMMERCE
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                    <Col md={3}>
                      <Link to="/academics/ba">
                        <Card className="academicUnit my-1">
                          <Card.Body className={cx("p-4")}>
                            <Card.Title
                              className={cx("text-center academicIcon")}
                            >
                              <i class="fa fa-university"></i>
                            </Card.Title>
                            <Card.Text
                              className={cx(
                                "text-center text-primary2 font-weight-bold"
                              )}
                            >
                              ARTS
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} className={cx("bg-white p-4")}>
                  <h4>
                    ADMISSION{" "}
                    <span className={cx("text-primary2 mr-2")}>ZONE</span>
                    <i class="fa fa-graduation"></i>
                  </h4>
                  <hr></hr>
                  <Row>
                    <Col md={12}>
                      <Card>
                        <Card.Header className={cx(" bg-white")}>
                          Admissions Open for Academic Year 2022-23
                        </Card.Header>
                        <Card.Body className={cx("text-center p-3")}>
                          <Card.Text className={cx("d-flex flex-column")}>
                            <a href="http://sarhad.org/">
                              <Button
                                variant="success"
                                className={cx("mb-2 btn-md")}
                              >
                                Click Here for UG Admissions
                              </Button>
                            </a>
                            <a href="http://sarhad.org/">
                              <Button
                                variant="success"
                                className={cx("btn-md")}
                              >
                                Click Here for PG Admissions
                              </Button>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className={cx("d-flex justify-content-center py-3")}>
            <Col md={11}>
              <Row>
                <Col md={7} className={cx("p-4 border-right")}>
                  <h4>
                    LATEST{" "}
                    <span className={cx("text-primary2 mr-2")}>NEWS</span>
                    <i class="fa fa-calendar"></i>
                  </h4>
                  <h6 className={cx("text-muted")}>
                    CAMPUS BULLETIN
                    <span className={cx("pl-2")}>
                      <Button variant="success" className={cx("btn-sm pl-2")}>
                        view all
                      </Button>
                    </span>
                  </h6>
                  <hr></hr>
                  <Carousel className={cx("")}>
                    <Carousel.Item interval={3000}>
                      <Row>
                        <Col md={6}>
                          <Card>
                            <Card.Img variant="top" src={event1} />
                            <Card.Body>
                              <Card.Text>
                                Admissions Open For Academic Year 2022-23
                              </Card.Text>
                              <Button variant="outline-success">
                                Read More
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={6}>
                          <Card>
                            <Card.Img variant="top" src={event2} />
                            <Card.Body>
                              <Card.Text>
                                Sarhad college received B+ grade in 1st cycle of
                                NAAC
                              </Card.Text>
                              <Button variant="outline-success">
                                Read More
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col md={5} className={cx("p-4 d-none d-md-block")}>
                  <h4>
                    
                    <span className={cx("text-primary2 mr-2")}>EVENTS</span>
                    <i class="fa fa-calendar"></i>
                  </h4>
                  <h6 className={cx("text-muted")}>
                    PROGRAMS AND EVENTS
                    <span className={cx("pl-2")}>
                      <Button variant="success" className={cx("btn-sm pl-2")}>
                        view all
                      </Button>
                    </span>
                  </h6>
                  <hr></hr>
                  <Row>
                    <Col md={6}>
                      <Card>
                        <Card.Img variant="top" src={upcomingEvent1} />
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
            </Col>
          </Row>

          <Row className={cx("d-flex justify-content-around NoticeBoard")}>
            <Col md={11} xs={12} className={cx("py-4 bg-white")}>
              <h4 className={cx("text-center mb-4")}>
                CAMPUS <span className={cx("text-primary2 mr-2")}>LIFE</span>
              </h4>

              <Row className={cx("d-none d-md-flex justify-content-around")}>
                <Col md={3}>
                  <Link to="/about-us/infrastructure">
                    <Card>
                      <Card.Img variant="top" src={campus1} />
                      <Card.Body>
                        <Card.Text className={cx("font-weight-bold")}>
                          Infrastructure
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={3}>
                  <Link to="/academics">
                    <Card>
                      <Card.Img variant="top" src={campus2} />
                      <Card.Body>
                        <Card.Text className={cx("font-weight-bold")}>
                          Academics
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Img variant="top" src={campus3} />
                    <Card.Body>
                      <Card.Text className={cx("font-weight-bold")}>
                        Cultural Activities
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Link to="/achievements/sports">
                    <Card>
                      <Card.Img variant="top" src={campus4} />
                      <Card.Body>
                        <Card.Text className={cx("font-weight-bold")}>
                          Sports
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>

              <Row className={cx("d-flex justify-content-around d-md-none")}>
                <Carousel className={cx("")}>
                  <Carousel.Item interval={2000}>
                    <Col md={3}>
                      <Card>
                        <Card.Img variant="top" src={campus1} />
                        <Card.Body>
                          <Card.Text className={cx("font-weight-bold")}>
                            Infrastructure
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <Col md={3}>
                      <Card>
                        <Card.Img variant="top" src={campus2} />
                        <Card.Body>
                          <Card.Text className={cx("font-weight-bold")}>
                            Academics
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <Col md={3}>
                      <Card>
                        <Card.Img variant="top" src={campus3} />
                        <Card.Body>
                          <Card.Text className={cx("font-weight-bold")}>
                            Cultural Activities
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <Col md={3}>
                      <Card>
                        <Card.Img variant="top" src={campus4} />
                        <Card.Body>
                          <Card.Text className={cx("font-weight-bold")}>
                            Sports
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Carousel.Item>
                </Carousel>
              </Row>
            </Col>
          </Row>

          <Row
            className={cx(
              "bg-gray d-flex justify-content-center px-4 admissionRow"
            )}
          >
            <Col md={11}>
              <h4 className={cx("text-center mb-4")}>
                WHAT STUDENTS ARE SAYING{" "}
                <span className={cx("text-primary2 mr-2")}>ABOUT SARHAD</span>
              </h4>
              <Carousel className={cx("d-none d-md-flex flex-row")}>
                <Carousel.Item interval={5000}>
                  <Row className={cx("d-flex justify-content-center shadow")}>
                    <Col md={3} className={cx("")}>
                      <Card className={cx("shadow-sm testimonialCard")}>
                        <Card.Body className={cx("text-center")}>
                          <Card.Text className={cx("my-3")}>
                            Education is most important for taking all
                            teachers.responsiblity is tai very well all teachers
                            in sarhad college.
                          </Card.Text>
                          <Card.Text className={cx("my-3")}>
                            <h6> - Renuka Parshuram Gaikwad</h6>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3} className={cx("")}>
                      <Card className={cx("shadow-sm testimonialCard")}>
                        <Card.Body className={cx("text-center")}>
                          <Card.Text className={cx("my-3")}>
                            Sarhad envisages to establish itself as one of the
                            best centers in south Asia.
                          </Card.Text>
                          <Card.Text className={cx("my-3")}>
                            <h6> - Amruta Shivaji Rananavare </h6>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3} className={cx("")}>
                      <Card className={cx("shadow-sm testimonialCard")}>
                        <Card.Body className={cx("text-center")}>
                          <Card.Text className={cx("my-3")}>
                            All staff of all courses are too good..they are very
                            helpful.. Our college is the best college
                          </Card.Text>
                          <Card.Text className={cx("my-3")}>
                            <h6> - Prachi Navneet Kapse</h6>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3} className={cx("")}>
                      <Card className={cx("shadow-sm testimonialCard")}>
                        <Card.Body className={cx("text-center")}>
                          <Card.Text className={cx("my-3")}>
                            Very nice teaching and extra curriculum activities.
                          </Card.Text>
                          <Card.Text className={cx("my-3")}>
                            <h6> - Ashwini Hemraj Solanki</h6>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>

              <Carousel className={cx("d-flex d-md-none flex-row")}>
                <Carousel.Item interval={2000}>
                  <Row className={cx("d-flex justify-content-center shadow")}>
                    <Col md={3} className={cx("")}>
                      <Card className={cx("shadow-sm testimonialCard")}>
                        <Card.Body className={cx("text-center")}>
                          <Card.Text className={cx("my-3")}>
                            Education is most important for taking all
                            teachers.responsiblity is tai very well all teachers
                            in sarhad college.
                          </Card.Text>
                          <Card.Text className={cx("my-3")}>
                            <h6> - Renuka Parshuram Gaikwad</h6>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                  <Row className={cx("d-flex justify-content-center shadow")}>
                    <Col md={3} className={cx("")}>
                      <Card className={cx("shadow-sm testimonialCard")}>
                        <Card.Body className={cx("text-center")}>
                          <Card.Text className={cx("my-3")}>
                            Sarhad envisages to establish itself as one of the
                            best centers in south Asia.
                          </Card.Text>
                          <Card.Text className={cx("my-3")}>
                            <h6> - Amruta Shivaji Rananavare </h6>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                  <Row className={cx("d-flex justify-content-center shadow")}>
                    <Col md={3} className={cx("")}>
                      <Card className={cx("shadow-sm testimonialCard")}>
                        <Card.Body className={cx("text-center")}>
                          <Card.Text className={cx("my-3")}>
                            All staff of all courses are too good..they are very
                            helpful.. Our college is the best college
                          </Card.Text>
                          <Card.Text className={cx("my-3")}>
                            <h6> - Prachi Navneet Kapse</h6>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                  <Row className={cx("d-flex justify-content-center shadow")}>
                    <Col md={3} className={cx("")}>
                      <Card className={cx("shadow-sm testimonialCard")}>
                        <Card.Body className={cx("text-center")}>
                          <Card.Text className={cx("my-3")}>
                            Very nice teaching and extra curriculum activities.
                          </Card.Text>
                          <Card.Text className={cx("my-3")}>
                            <h6> - Ashwini Hemraj Solanki</h6>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                  <Row className={cx("d-flex justify-content-center shadow")}>
                    <Col md={3} className={cx("")}>
                      <Card className={cx("shadow-sm testimonialCard")}>
                        <Card.Body className={cx("text-center")}>
                          <Card.Text className={cx("my-3")}>
                            Nice college.providing education as well as makes
                            student creative.
                          </Card.Text>
                          <Card.Text className={cx("my-3")}>
                            <h6> - Pallavi Suresh Liman</h6>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Hoc>
    );
  }
}

export default Home;
