import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

import c442 from "../../assets/docs/iqac/4.4.2 attachment.pdf";

const Criteria4 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 4</h5>
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
                        <th>1</th>
                        <td>4.1.1</td>
                        <td>Infrastructure and physical facilities photos</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>4.1.2</td>
                        <td>Sports and cultural activity facility photos</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>4.1.3</td>
                        <td>Classrooms and seminar halls with ICT- enabled facilities & Master Time Table</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>4.1.4</td>
                        <td>Statement of expenditure on infrastructure augmentation</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>4.2.1</td>
                        <td>Library is automation documents</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>4.2.2</td>
                        <td>subscription for e-resources</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>4.2.3</td>
                        <td>Statement of expenditure for purchase of books/e-books and subscription to journals/e-journals</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>4.2.4</td>
                        <td>Usage of library by teachers and students</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>4.2.5</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>4.2.6</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>4.3.1</td>
                        <td>IT facilities updation</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>12</th>
                        <td>4.3.2</td>
                        <td>Student – Computer ratio</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>13</th>
                        <td>4.3.3</td>
                        <td>Bandwidth of internet connection </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>14</th>
                        <td>4.3.4</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>15</th>
                        <td>4.3.1</td>
                        <td>IT facilities updation</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th rowspan="2">16</th>
                        <td rowspan="2">4.4.1</td>
                        <td>Expenditure on maintenance of infrastructure(Data Template)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Audited Statement)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>16</th>
                        <td>4.4.2</td>
                        <td>Procedures and policy  for property  maintenance</td>
                        <td>
                            <a className="btn btn-sm btn-outline-primary" href={ c442 } target="_blank">View Report</a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria4;