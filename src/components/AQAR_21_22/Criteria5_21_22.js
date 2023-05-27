import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

import c511 from "../../assets/docs/aqar2022/5.1.1.pdf";
import c512 from "../../assets/docs/aqar2022/5.1.2.pdf";
import c513 from "../../assets/docs/aqar2022/5.1.3.pdf";
import c514 from "../../assets/docs/aqar2022/5.1.4.pdf";
import c532 from "../../assets/docs/aqar2022/5.3.2.pdf";
import c541 from "../../assets/docs/aqar2022/5.4.1.pdf";

const Criteria5_21_22 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 5</h5>
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
                        <th colspan="4">5.1 Student Support</th>
                    </tr>
                    <tr>
                        <td>5.1.1.</td>
                        <td>Number of students benefited by scholarships and free ships provided by the Government during the year</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c511 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>5.1.2.</td>
                        <td>Number of students benefitted by scholarships, freeships etc. provided by the institution / non- government bodies, industries, individuals, philanthropists during the year</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c512 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>5.1.3.</td>
                        <td>Capacity building and skills enhancement initiatives taken by the institution include the following</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c513 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>5.1.4.</td>
                        <td>Number of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the year</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c514 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>5.1.5.</td>
                        <td>The Institution has a transparent mechanism for timely redressal of student grievances including sexual harassment and ragging cases</td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr>
                        <th colspan="4">5.2 Student Progression</th>
                    </tr>
                    <tr>
                        <td>5.2.1.</td>
                        <td>Number of placement of outgoing students during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5.2.2.</td>
                        <td>Number of students progressing to higher education during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5.2.3.</td>
                        <td>Number of students qualifying in state/national/international level examinations during the year (eg: JAM/CLAT/GATE/GMAT/CAT/GRE/ TOEFL/Civil Services/State government examinations)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    


                    <tr>
                        <th colspan="4">5.3 Student Participation and Activities</th>
                    </tr>
                    <tr>
                        <td>5.3.1.</td>
                        <td>Number of awards/medals for outstanding performance in sports/cultural activities at university/state/national/international level (award for a team event should be counted as one) during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5.3.2.</td>
                        <td>Institution facilitates students’ representation and engagement in various administrative, co-curricular and extracurricular activities (student council/ students representation on various bodies as per established processes and norms )</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c532 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>5.3.3.</td>
                        <td>Number of sports and cultural events/competitions in which students of the Institution participated during the year (organized by the institution/other institutions)</td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr>
                        <th colspan="4">5.4 Alumni Engagement</th>
                    </tr>
                    <tr>
                        <td>5.4.1.</td>
                        <td>There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services.</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c541 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>5.4.2.</td>
                        <td>Alumni contribution during the year (INR in Lakhs)</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria5_21_22;