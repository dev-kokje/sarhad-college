import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

import c321 from "../../assets/docs/aqar2022/3.2.1.pdf";
import c322 from "../../assets/docs/aqar2022/3.2.2.pdf";
import c351 from "../../assets/docs/aqar2022/3.5.1.pdf";
import c343 from "../../assets/docs/aqar2022/aq22_3.4.3.pdf";
import c344 from "../../assets/docs/aqar2022/aq22_3.4.4.pdf";
import c352 from "../../assets/docs/aqar2022/aq22_3.5.2.pdf";

const Criteria3_21_22 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 3</h5>
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th className="align-top">Matric No</th>
                        <th className="align-top">Name Of the Document</th>
                        <th className="align-top">Additional Information</th>
                        <th className="align-top">Supporting Document</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colspan="4">3.1- Resource Mobilization for Research</th>
                    </tr>
                    <tr>
                        <td>3.1.1.</td>
                        <td>Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the year (INR in Lakhs)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3.1.2.</td>
                        <td>Number of teachers recognized as research guides (latest completed academic year)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3.1.3.</td>
                        <td>Number of departments having Research projects funded by government and non government agencies during the year</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th colspan="4">3.2- Innovation Ecosystem</th>
                    </tr>
                    <tr>
                        <td>3.2.1.</td>
                        <td>Institution has created an ecosystem for innovations and has initiatives for creation and transfer of knowledge</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c321 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>3.2.2.</td>
                        <td>Number of workshops/seminars conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship during the year</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c322 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>


                    <tr>
                        <th colspan="4">3.3- Research Publication and Awards</th>
                    </tr>
                    <tr>
                        <td>3.3.1.</td>
                        <td>Number of Ph.Ds registered per eligible teacher during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3.3.2.</td>
                        <td>Number of research papers per teachers in the Journals notified on UGC website during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3.3.3.</td>
                        <td>Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during year</td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr>
                        <th colspan="4">3.4 – Extension Activities</th>
                    </tr>
                    <tr>
                        <td>3.4.1.</td>
                        <td>Extension activities are carried out in the neighborhood community, sensitizing students to social issues, for their holistic development, and impact thereof during the years.</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3.4.2.</td>
                        <td>Number of awards and recognitions received for extension activities from government/ government recognized bodies during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3.4.3.</td>
                        <td>Number of extension and outreach Programmes conducted by the institution through NSS/ NCC/Government and Government recognized bodies during the year</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c343 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>3.4.4.</td>
                        <td>Number of students participating in extension activities at 3.4.3. above during year</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c344 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>


                    <tr>
                        <th colspan="4">3.5 Collaboration</th>
                    </tr>
                    <tr>
                        <td>3.5.1.</td>
                        <td>Number of Collaborative activities for research, Faculty exchange, Student exchange/ internship during the year</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c351 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>3.5.2.</td>
                        <td>Number of functional MoUs with institutions, other universities, industries, corporate houses etc. during the year</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c352 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria3_21_22;