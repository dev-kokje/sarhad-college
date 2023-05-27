import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import Hoc from '../../Hoc/Hoc';

const CoreValues = (props) => {

    return (
        <Hoc>
            <h4 className="text-center mb-4">We are committed to serve the needs of the communities.</h4>
            <hr/>
            <Row>
                <Col md={6}>
                    <h5>Goals: </h5>
                    <ul>
                        <li>To meet the mission and vision of the Sarhad College.</li>
                        <li>Attend to the requirements of stake holders and students.</li>
                        <li>Respond time to time to the communities changing needs.</li>
                        <li>Respond time to time to the communities changing needs.</li>
                    </ul>
                    <h5 className="mt-4">Respect:</h5>
                    <p>We understand the values of the staff members and support individual contribution.</p>
                    <p className="font-weight-bold"> We Will </p>
                    <ul>
                        <li>Treat everyone with dignity and integrity.</li>
                        <li>Encourage trust through professional cordiality and fair treatment.</li>
                        <li>Identify and motivate employees and students contribution.</li>
                    </ul>
                    <h5 className="mt-4">Excellence:</h5>
                    <p>Efforts are taken to establish better standards of education to gain moral values.</p>
                    <p className="font-weight-bold"> We Will </p>
                    <ul>
                        <li>Stimulate quality in staff members, facilities, programs,and services.</li>
                        <li>Invigorate continuous improvement.</li>
                        <li>Anticipate needs and respond accordingly.</li>
                        <li>Motivate creativity and innovation.</li>
                        <li>Inspire decision-making at the level of implementation.</li>
                        <li>Take efforts for development of respective departments and will try to establish associative activities.</li>
                    </ul>
                </Col>

                <Col md={6}>
                    <h5>Accountability:</h5>
                    <p>We understand and demonstrate responsibility for our actions.</p>
                    <p className="font-weight-bold"> We Will </p>
                    <ul>
                        <li>Take responsibility for growth in personal and professional development .</li>
                        <li>Upgrade and evaluate our systems and policies from time to time.</li>
                        <li>Vitalize integrated development to achieve goals and mission.</li>
                        <li>Appreciate the work which adds value to the Institute.</li>
                    </ul>
                    <h5 className="mt-4">Diversity:</h5>
                    <p>Sarhad incorporates the values of communal harmony and brotherhood.This encourages mutual understanding and binds the diverse communities and culture in the main stream of the society. The students coming from various cultural backgrounds are absorbed in our institute for their academic pursuits.</p>
                    <p className="font-weight-bold"> We Will </p>
                    <ul>
                        <li>Encourage fair and equal access for all.</li>
                        <li>Recognize individual aptitude, capability regardless of the diversities.</li>
                        <li>Establish better standards of education.</li>
                        <li>Develop learning activities which stimulates brainstorming.</li>
                        <li>Commit to provide well-cultured, moral education for holistic development of students coming from militancy hit areas like Jammu and Kashmir, Manipur, Assam, Mizoram and Ladakh.</li>
                    </ul>
                </Col>
            </Row>
        </Hoc>
    );
}

export default CoreValues;