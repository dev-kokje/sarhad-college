import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

const Criteria5 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 5</h5>
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
                        <th colspan="4">5.1 Student Support</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>5.1.1</td>
                        <td>Scholarships and freeships provided by the Government </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>5.1.2</td>
                        <td>Scholarships & freeships provided by the institution</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>5.1.3</td>
                        <td>Capability Enhancement and Development Schemes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>5.1.4</td>
                        <td>Competitive Examinations and Career Counselling </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>5.1.5</td>
                        <td>a transparent mechanism for timely redressal of student grievances including sexual harassment and ragging cases</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">5.2 Student Progression</th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>5.2.1</td>
                        <td>Placement of outgoing students </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>5.2.2</td>
                        <td>Students  progressing to higher education  </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>5.2.3</td>
                        <td>Students qualifying in state/national/ international level examinations </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">5.3 Student Participation and Activities </th>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>5.3.1</td>
                        <td>Outstanding performance in sports/cultural activities at university/state/national / international level</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>5.3.2</td>
                        <td>Student Council</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>5.3.3</td>
                        <td>Sports and cultural events/competitions (organised by the institution/other institutions</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">5.4 Alumni Engagement </th>
                    </tr>
                    <tr>
                        <th>12</th>
                        <td>5.4.1</td>
                        <td>Alumni Association that contributes significantly to the development of the institution through financial and/or other support services.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>13</th>
                        <td>5.4.2</td>
                        <td>Alumni contribution</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria5;