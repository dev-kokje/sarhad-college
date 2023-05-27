import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

import c111 from "../../assets/docs/iqac/1.1.1 Academic calenders.pdf";

const Criteria1 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 1</h5>
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th className="align-top">Sr.No.</th>
                        <th className="align-top">Matric No</th>
                        <th className="align-top">Name Of the Document</th>
                        <th className="align-top">URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="2">1</th>
                        <td>1.1.1.A</td>
                        <td>Academic calendar</td>
                        <td>
                        <a className="btn btn-sm btn-outline-primary" href={ c111 } target="_blank" rel="noreferrer"> View Report </a>
                        </td>
                    </tr>
                    <tr>
                        <td>1.1.1.B</td>
                        <td>College Prospectus 2019-20</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>1.1.2</td>
                        <td>SOP for Continuous Internal Evaluation</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>1.1.3</td>
                        <td>Examination orders of teachers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>1.2.1</td>
                        <td>Number of Programmes with  (CBCS)/ elective course system(Data template/Excel)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>1.2.2</td>
                        <td>Tally certificate course documents</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>1.2.3</td>
                        <td>Add on course Yoga meditation</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>1.3.1</td>
                        <td>Cross cutting issue (Data template/Excel)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>1.3.2</td>
                        <td>Bridge course Economics</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>1.3.3</td>
                        <td>Number of students undertaking project work/field work/ internships (Data template/Excel)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>1.4.1</td>
                        <td>Stakeholders feedback  samples</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>1.4.2</td>
                        <td>Feedback process</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria1;