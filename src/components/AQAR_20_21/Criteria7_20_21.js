import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

import c7111 from "../../assets/docs/aqar2021/7.1.1.pdf";
import c7112 from "../../assets/docs/aqar2021/7.1.1.1.pdf";
import c719 from "../../assets/docs/aqar2021/7.1.9.pdf";
import c721 from "../../assets/docs/aqar2021/7.2.1.pdf";

const Criteria7_20_21 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 7</h5>
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
                        <th colspan="4">7.1 Institutional Values and Social Responsibilities</th>
                    </tr>
                    <tr>
                        <td>7.1.1.</td>
                        <td>Measures initiated by the Institution for the promotion of gender equity during the year.</td>
                        <td></td>
                        <td>
                            <a className="btn btn-sm btn-outline-primary my-2" href={ c7111 } target="_blank" rel="noreferrer"> View Report 1 </a>
                            <a className="btn btn-sm btn-outline-primary" href={ c7112 } target="_blank" rel="noreferrer"> View Report 2 </a>
                        </td>
                    </tr>
                    <tr>
                        <td>7.1.2.</td>
                        <td>The Institution has facilities for alternate sources of energy and energy conservation measures</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.1.3.</td>
                        <td>Describe the facilities in the Institution for the management of the following types of degradable and non-degradable waste (within 200 words)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.1.4.</td>
                        <td>Water conservation facilities available in the Institution:</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.1.5.</td>
                        <td>Green campus initiatives include</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.1.6.</td>
                        <td>Quality audits on environment and energy are regularly undertaken by the institution</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.1.7.</td>
                        <td>The Institution has Divyangjan-friendly, barrier free environment</td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr>
                        <th colspan="4">Inclusion and Situatedness</th>
                    </tr>
                    <tr>
                        <td>7.1.8.</td>
                        <td>Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic and other diversities (within 200 words).</td>
                        <td></td>
                        <td></td>
                    </tr>
                    


                    <tr>
                        <th colspan="4">Human Values and Professional Ethics</th>
                    </tr>
                    <tr>
                        <td>7.1.9.</td>
                        <td>Sensitization of students and employees of the Institution to the constitutional obligations: values, rights, duties and responsibilities of citizens</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary my-2" href={ c719 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>7.1.10.</td>
                        <td>The Institution has a prescribed code of conduct for students, teachers, administrators and other staff and conducts periodic programmes in this regard.</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.1.11.</td>
                        <td>Institution celebrates / organizes national and international commemorative days, events and festivals</td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr>
                        <th colspan="4">7.2 Best Practices</th>
                    </tr>
                    <tr>
                        <td>7.2.1.</td>
                        <td>Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual.</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary my-2" href={ c721 } target="_blank" rel="noreferrer"> View Report</a></td>
                    </tr>


                    <tr>
                        <th colspan="4">7.3 Institutional Distinctiveness</th>
                    </tr>
                    <tr>
                        <td>7.3.1.</td>
                        <td>Portray the performance of the Institution in one area distinctive to its priority and thrust within 200 word</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria7_20_21;