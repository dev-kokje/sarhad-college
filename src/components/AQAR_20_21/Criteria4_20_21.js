import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

import c411 from "../../assets/docs/aqar2021/4.1.1.pdf";
import c412 from "../../assets/docs/aqar2021/4.1.2.pdf";
import c413 from "../../assets/docs/aqar2021/4.1.3.pdf";
import c422 from "../../assets/docs/aqar2021/4.2.2.pdf";
import c431 from "../../assets/docs/aqar2021/4.3.1.pdf";
import c421 from "../../assets/docs/aqar2021/4.2.1.pdf";
import c442 from "../../assets/docs/aqar2021/4.4.2.pdf";

const Criteria4_20_21 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 4</h5>
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
                        <th colspan="4">4.1 Physical Facilities</th>
                    </tr>
                    <tr>
                        <td>4.1.1.</td>
                        <td>The Institution has adequate infrastructure and physical facilities for teaching- learning. viz., classrooms, laboratories, computing equipment etc.</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c411 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>4.1.2.</td>
                        <td>The Institution has adequate facilities for cultural activities, sports, games (indoor, outdoor), gymnasium, yoga centre etc.</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c412 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>4.1.3.</td>
                        <td>Number of classrooms and seminar halls with ICT-enabled facilities such as smart class, LMS, etc.</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c413 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>4.1.4.</td>
                        <td>Expenditure, excluding salary for infrastructure augmentation during the year(INR in Lakhs)</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th colspan="4">4.2 Library as a learning Resource</th>
                    </tr>
                    <tr>
                        <td>4.2.1.</td>
                        <td>Library is automated using Integrated Library Management System (ILMS)</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c421 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>4.2.2.</td>
                        <td>The institution has subscription for the following e-resources</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c422 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>4.2.3.</td>
                        <td>Expenditure for purchase of books/e-books and subscription to journals/e- journals during the year (INR in Lakhs)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4.2.4.</td>
                        <td>Number per day usage of library by teachers and students (foot falls and login data for online access)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    


                    <tr>
                        <th colspan="4">4.3 IT Infrastructure</th>
                    </tr>
                    <tr>
                        <td>4.3.1.</td>
                        <td>Institution frequently updates its IT facilities including Wi-Fi</td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c431 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                    <tr>
                        <td>4.3.2.</td>
                        <td>Student – Computer ratio</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4.3.3.</td>
                        <td>Bandwidth of internet connection in the Institution</td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr>
                        <th colspan="4">4.4 Maintenance of Campus Infrastructure</th>
                    </tr>
                    <tr>
                        <td>4.4.1.</td>
                        <td>Expenditure incurred on maintenance of infrastructure (physical and academic support facilities) excluding salary component during the year(INR in Lakhs)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4.4.2.</td>
                        <td>There are established systems and procedures for maintaining and utilizing physical, academic and support facilities - laboratory, library, sports complex, computers, classrooms etc. </td>
                        <td></td>
                        <td><a className="btn btn-sm btn-outline-primary" href={ c442 } target="_blank" rel="noreferrer"> View Report </a></td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria4_20_21;