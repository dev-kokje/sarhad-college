import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

import c111 from "../../assets/docs/aqar2021/1.1.1.pdf";
import c112 from "../../assets/docs/aqar2021/1.1.2.pdf";
import c141 from "../../assets/docs/aqar2021/1.4.1.pdf";
import c142 from "../../assets/docs/aqar2021/1.4.2.pdf";

const Criteria1_20_21 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 1</h5>
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th className="align-top">Matric No</th>
                        <th className="align-top">Name Of the Document</th>
                        <th className="align-top">Additional Information</th>
                        <th className="align-top">Supporting document</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colspan="4">1.1 Curricular Planning and Implementation</th>
                    </tr>
                    <tr>
                        <td>1.1.1.</td>
                        <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c111 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>1.1.2.</td>
                        <td>The institution adheres to the academic calendar including for the conduct of Continuous Internal Evaluation (CIE)</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c112 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>1.1.3.</td>
                        <td>Teachers of the Institution participate in following activities related to curriculum development and assessment of the affiliating University and/are represented on the following academic bodies during the year</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th colspan="4">1.2 Academic Flexibility</th>
                    </tr>
                    <tr>
                        <td>1.2.1.</td>
                        <td>Number of Programmes in which Choice Based Credit System (CBCS)/ elective course system has been implemented</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1.2.2.</td>
                        <td>Number of Add on /Certificate programs offered during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1.2.3.</td>
                        <td>Number of students enrolled in Certificate/ Add-on programs as against the total number of students during the year</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th colspan="4">1.3 Curriculum Enrichment</th>
                    </tr>
                    <tr>
                        <td>1.3.1.</td>
                        <td>Institution integrates crosscutting issues relevant to Professional Ethics</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1.3.2.</td>
                        <td>Number of courses that include experiential learning through project work/field work/internship during the year</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1.3.3.</td>
                        <td>Number of students undertaking project work/field work/internships</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th colspan="4">1.4 Feedback System</th>
                    </tr>
                    <tr>
                        <td>1.4.1.</td>
                        <td>Institution obtains feedback on the syllabus and its transaction at the institution from the following stakeholders</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c141 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>1.4.2.</td>
                        <td>Feedback process of the Institution may be classified as follows</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c142 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria1_20_21;