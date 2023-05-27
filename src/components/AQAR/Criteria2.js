import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap';

import c261 from "../../assets/docs/iqac/2.6.1.pdf";
import c271 from "../../assets/docs/iqac/2.7.1 SSS analysis 2019-20.pdf";

const Criteria2 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 2</h5>
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
                        <th colspan="4">2.1 Student Enrolment and Profile</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>2.1.1</td>
                        <td>Enrolment Number</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>2.1.2</td>
                        <td>Number of seats filled against seats reserved for various categories (SC,   ST, OBC, Divyangjan, etc. as per applicable reservation policy during the year  (exclusive of supernumerary seats)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">2.2. Catering to Student Diversity</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>2.2.1</td>
                        <td>The institution assesses the learning levels of the students and organizes special Programmes for advanced learners and slow learners</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>2.2.2</td>
                        <td>Student- Full time teacher ratio (Data for the latest completed academic year) </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">2.3. Teaching- Learning Process</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>2.3.1</td>
                        <td>Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>2.3.2</td>
                        <td>Teachers use ICT enabled tools for effective teaching-learning process.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>2.3.3</td>
                        <td>Ratio of mentor to students for academic and other related issues (Data for the latest completed academic year )</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>2.3.4</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">2.4 Teacher Profile and Quality</th>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>2.4.1 & 2.4.3</td>
                        <td>
                            Number of full time teachers against sanctioned posts during the year,
                            Number of years of teaching experience of full time teachers in the same institution (Data for the latest completed academic year)
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>2.4.2</td>
                        <td>Number  of full time teachers with Ph. D. / D.M. / M.Ch. / D.N.B Superspeciality / D.Sc. / D.Litt. during the year (consider only highest degree for count)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>2.4.4</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">2.5. Evaluation Process and Reforms</th>
                    </tr>
                    <tr>
                        <th>12</th>
                        <td>2.5.1</td>
                        <td>Mechanism of internal assessment is transparent and robust in terms of frequency and mode</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>13</th>
                        <td>2.5.2</td>
                        <td>Mechanism to deal with internal examination related grievances is transparent, time- bound and efficient</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">2.6 Student Performance and Learning Outcome</th>
                    </tr>
                    <tr>
                        <th>14</th>
                        <td>2.6.1</td>
                        <td>Programme and course outcomes for all Programmes offered by the institution are stated and displayed on website and communicated to teachers and students</td>
                        <td>
                            <a className="btn btn-sm btn-outline-primary" href={ c261 } target="_blank"> View Report </a>
                        </td>
                    </tr>
                    <tr>
                        <th>15</th>
                        <td>2.6.2</td>
                        <td>Attainment of Programme outcomes and course outcomes are evaluated by the institution.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>16</th>
                        <td>2.6.3</td>
                        <td>Pass percentage of Students during the year</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">2.7 Student Satisfaction Survey</th>
                    </tr>
                    <tr>
                        <th>17</th>
                        <td>2.7.1</td>
                        <td>Student Satisfaction Survey (SSS) on overall institutional performance (Institution may design its own questionnaire) (results and details need to be provided as a web link)</td>
                        <td>
                            <a className="btn btn-sm btn-outline-primary" href={ c271 } target="_blank"> View Report </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria2;