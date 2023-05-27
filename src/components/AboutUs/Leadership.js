import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import Hoc from '../../Hoc/Hoc';
import LeadershipCard from './LeadershipCard';

import director from '../../assets/img/director.png';
import secretary from '../../assets/img/secretary.png';
import trustee from '../../assets/img/trustee.png';
import principal from '../../assets/img/principal-sir.png';
import vicePrincipal from '../../assets/img/vice-principal.png';

const Leadership = (props) => {

    return (
        <Hoc>
            <h3 className="text-center">Leadership</h3>
            <Row>
                <Col md={4} className="my-3">
                    <LeadershipCard
                        title="Director's Desk"
                        img={director}
                        name="Hon. Sanjay Nahar"
                        text="Education is an all-encompassing word. It’s not just confined to books and degrees. The real objective of education is to emancipate an individual and blossom his/ her personality to the fullest. ‘ Education libarates, ‘ Carl Marx’s pithy comment upon the exact function of education underlines its enormous role in the life of a person. If one’s educated, one’s liberated. Education liberates a person from all pettiness and prejudices that pull all of us down. Education makes one aware of his / her potential and it nurtures and nourishes the immense possibilities an individual’s endowed with. A child’s a ‘rough diamond’. Proper education hones the facets of this ‘rough diamond’ and makes it ‘Kohinoor’, ‘Cullinan’ or ‘Hope’, three of the greatest diamonds. At Sarhad, our first and foremost aim is to bring out a child’s true self and give him a direction, a path to tread upon. We boost a child’s confidence to face the vicissitudes of life with equanimity and equipoise.Conceived in 2004,for the orphans of the Valley, Sarhad’s been imparting holistic education to the underprivileged children from Kashmir. We instil and inculcate confidence in them and make them responsible citizens of the country, nay of the world. Because, education also makes you universal in your attitude and approach to life, mankind and the whole world. Sarhad steadfastly maintains this universal spirit of bonhomie and humanity through its comprehensive education. We hope to retain our ethos and exalted ideals as regards education, knowledge and wisdom. Jai Hind Mr. Sanjay Nahar Founder – President, Sarhad."
                    >
                    </LeadershipCard>
                </Col>
                <Col md={4} className="my-3">
                    <LeadershipCard
                        title="Secretary's Desk"
                        img={secretary}
                        name="Hon. Sushma Nahar"
                        text="Education’s an all-encompassing word. It’s not just confined to books and degrees. The real objective of education is to emancipate an individual and blossom his/ her personality to the fullest. ‘ Education librates, ‘ Carl Marx’s pithy comment upon the exact function of education underlines its enormous role in the life of a person. If one’s educated, one’s liberated. Education liberates a person from all pettiness and prejudices that pull all of us down. Education makes one aware of his / her potential and it nurtures and nourishes the immense possibilities an individual’s endowed with. A child’s a ‘rough diamond’. Proper education hones the facets of this ‘rough diamond’ and makes it ‘Kohinoor’, ‘Cullinan’ or ‘Hope’, three of the greatest diamonds."
                    >
                    </LeadershipCard>
                </Col>
                <Col md={4} className="my-3">
                    <LeadershipCard
                        title="Trustee's Desk"
                        img={trustee}
                        name="Hon. Shailesh Wadekar"
                        text="Sarhad is an institution working for the youth from the strife ridden State Jammu Kashmir and the North Eastern part of India. The notion of the establishment of the organisation is to bring the youth of these area into the main stream of the nation through the medium of education Sarhad College was founded in 2008 at Katraj in Pune.

Today many local and outer state students benefit various graduate and post graduate courses here. Along with the curriculum of Pune University, guideline for MPSC, UPSC Exams and Personality Development courses are provided through various seminars, workshops arranged time to time. The students actively participate in the programmes formulated by Savitribai Phule Pune University. N.S.S, Learn and Earn, Students welfare programmes are carried out.

Students are the responsible citizens of the nations. They always contribute their best participation in the educational events. Various functions are arranged by Sarhad College for the social and educational development of the students. Our college students create the feeling of environmental awareness by appealing for Murtidan on the day of Ganesh idol immersion during the Ganesh Festival.

Students are encouraged to participate in the various competitions scheduled (hoisted launched) by Savitribai Phule Pune University. Sports enthusiasts are provided with the guidance and practice by their mentors.

Sarhad Institution intends to offer vocational training courses in the college. Here on all in good time someday, soon our students will definitely imprint their mark in various fields and bring glory to themselves and their institute too. In the ascent of the organisation, all the educators along with their Director,Principal and supportive staff play a significant, constructive role."
                    >
                    </LeadershipCard>
                </Col>
            </Row>

            <Row className="d-flex flex-row justify-content-center">
                <Col md={4} className="my-3">
                    <LeadershipCard
                        title="Principal's Desk"
                        img={principal}
                        name="Dr.Hanumant Jadhavar"
                        text="At Sarhad our Vision and Mission is - 

Vision
 
Sarhad envisages to establish itself as one of the best centres in south Asia offering educational opportunities to youths from violence-affected regions in the next 10 years.
 
 
Mission
 
To empower youth from communities that are lack of infrastructure and vulnerable to violence, through the education and enable them to contribute in the welfare and enrichment of their surroundings.
"
                    >
                    </LeadershipCard>
                </Col>
                <Col md={4} className="my-3">
                    <LeadershipCard
                        title="Vice Principal's Desk"
                        img={vicePrincipal}
                        name="Dr.Sangeeta Shinde"
                        text="Education is not to be confined within the walls of a classroom going through theories, attending classes, and getting grades but Education is a means that enables a human to truly grow and break into a new hemisphere of self-development and growth. It is a chisel that a human can use to carve for his own life and get true joy and a sense of fulfillment. true education can create a cultured developed and compassionate human mind with efficient working skills and at Sarhad we believe in the same idealogy.at Sarhad we just do not focus on giving our students bookish knowledge but we focus on making our students knowledgeable self-aware and responsible human bean. In Sarhad we work on all-around development and employability skills. Taking education in Sarhad is nothing less than a journey. A journey filled with a lot of learning self-development and experiences and I am sure you will be a completely new person at the end of this wonderful journey. So are you all ready to go on this journey? See you in class."
                    >
                    </LeadershipCard>
                </Col>
            </Row>

        </Hoc>
    );
}

export default Leadership;