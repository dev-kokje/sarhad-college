import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

import c631 from "../../assets/docs/aqar2021/6.3.1.pdf";
import c612 from "../../assets/docs/aqar2021/6.1.2.pdf";
import c621 from "../../assets/docs/aqar2021/6.2.1.pdf";
import c622 from "../../assets/docs/aqar2021/6.2.2.pdf";
import c635 from "../../assets/docs/aqar2021/6.3.5.pdf";
import c643 from "../../assets/docs/aqar2021/6.4.3.pdf";
import c651 from "../../assets/docs/aqar2021/6.5.1.pdf";
import c653 from "../../assets/docs/aqar2021/2.6.3_6.5.3.pdf";

const Criteria6_20_21 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 6</h5>
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
                        <th colspan="4">6.1 Institutional Vision and Leadership</th>
                    </tr>
                    <tr>
                        <td>6.1.1.</td>
                        <td>The governance of the institution is reflective of and in tune with the vision and mission of the institution </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.1.2.</td>
                        <td>The effective leadership is visible in various institutional practices such as decentralization and participative management.</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c612 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>


                    <tr>
                        <th colspan="4">6.2 Strategy Development and Deployment</th>
                    </tr>
                    <tr>
                        <td>6.2.1.</td>
                        <td>The institutional Strategic/ perspective plan is effectively deployed</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c621 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>6.2.2.</td>
                        <td>The functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment and service rules, procedures, etc.</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c622 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>6.2.3.</td>
                        <td>Implementation of e-governance in areas of operat</td>
                        <td></td>
                        <td></td>
                    </tr>
                    


                    <tr>
                        <th colspan="4">6.3 Faculty Empowerment Strategies</th>
                    </tr>
                    <tr>
                        <td>6.3.1.</td>
                        <td>The institution has effective welfare measures for teaching and non- teaching staff</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c631 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>6.3.2.</td>
                        <td>Number of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.3.3.</td>
                        <td>Number of professional development /administrative training programs organized by the institution for teaching and non-teaching staff during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.3.4.</td>
                        <td>Number of teachers undergoing online/face-to-face Faculty development Programmes (FDP) during the year (Professional Development Programmes, Orientation / Induction Programmes, Refresher Course, Short Term Course etc.)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.3.5.</td>
                        <td>Institutions Performance Appraisal System for teaching and non- teaching staff</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c635 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>


                    <tr>
                        <th colspan="4">6.4 Financial Management and Resource Mobilization</th>
                    </tr>
                    <tr>
                        <td>6.4.1.</td>
                        <td>Institution conducts internal and external financial audits regularly</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.4.2.</td>
                        <td>Funds / Grants received from non-government bodies, individuals, philanthropers during the year (not covered in Criterion III)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.4.3.</td>
                        <td>Institutional strategies for mobilization of funds and the optimal utilization of resources</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c643 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>


                    <tr>
                        <th colspan="4">6.5 Internal Quality Assurance System</th>
                    </tr>
                    <tr>
                        <td>6.5.1.</td>
                        <td>Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c651 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>6.5.2.</td>
                        <td>The institution reviews its teaching learning process, structures & methodologies of operations and learning outcomes at periodic intervals through IQAC set up as per norms and recorded the incremental improvement in various activities</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.5.3.</td>
                        <td>Quality assurance initiatives of the institution include:</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c653 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria6_20_21;