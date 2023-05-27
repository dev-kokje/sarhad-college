import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

import c721 from "../../assets/docs/iqac/7.2.1 Best Practices.pdf";
import c731 from "../../assets/docs/iqac/7.3.1.pdf";

const Criteria7 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 7</h5>
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
                        <th colspan="4">7.1 Institutional Values and Social Responsibilities</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>7.1.1</td>
                        <td>Measures initiated by the Institution for the promotion of gender equity during the year. </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>7.1.2</td>
                        <td>The Institution has facilities for alternate sources of energy and energy conservation measures </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>7.1.3</td>
                        <td>Describe the facilities in the Institution for the management of the following types of degradable and non-degradable waste</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>7.1.4</td>
                        <td>Water conservation facilities available in the Institution: </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>7.1.5</td>
                        <td>Green campus initiatives include </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>7.1.6</td>
                        <td>Quality audits on environment and energy are regularly undertaken by the institution</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>7.1.7</td>
                        <td>The Institution has disabled-friendly, barrier free environment </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>7.1.8</td>
                        <td>Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic and other diversities </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>7.1.9</td>
                        <td>Sensitization of students and employees of the Institution to the constitutional obligations: values, rights, duties and responsibilities of citizens</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>7.1.10</td>
                        <td>The Institution has a prescribed code of conduct for students, teachers, administrators and other staff and conducts periodic programmes in this regard.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>7.1.11</td>
                        <td>Institution celebrates / organizes national and international commemorative days, events and festivals</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="4">7.2 Best Practices  </th>
                    </tr>
                    <tr>
                        <th>12</th>
                        <td>7.2.1</td>
                        <td>Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual</td>
                        <td>
                            <a className="btn btn-sm btn-outline-primary" href={ c721 } target="_blank"> View Report </a>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="4">7.3 Institutional Distinctiveness </th>
                    </tr>
                    <tr>
                        <th>13</th>
                        <td>7.3.1</td>
                        <td>Portray the performance of the Institution in one area distinctive to its priority and thrust within 200words</td>
                        <td>
                            <a className="btn btn-sm btn-outline-primary" href={ c731 } target="_blank"> View Report </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria7;