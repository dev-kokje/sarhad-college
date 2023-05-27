import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Table } from 'react-bootstrap'

const Criteria3 = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Criteria 3</h5>
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
                        <th colspan="4">3.1 Resource Mobilization for Research</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>3.1.1 </td>
                        <td>Grant award letters for research projects </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>3.1.2</td>
                        <td>Teachers recognized as research guides</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>3.1.3</td>
                        <td>Research projects funded by government</td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <th colspan="4">3.2- Innovation Ecosystem</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>3.2.1</td>
                        <td>Ecosystems for innovations</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>3.2.2</td>
                        <td>Seminars/Conferences/workshops</td>
                        <td></td>
                    </tr>

                    <tr>
                        <th colspan="4">3.3- Research Publication and Awards</th>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>3.3.1 </td>
                        <td>Research papers </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>3.3.2</td>
                        <td>Books/Book chapters and papers in Proceedings</td>
                        <td></td>
                    </tr>

                    <tr>
                        <th colspan="4">3.4- Extension Activities</th>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>3.4.1</td>
                        <td>Documents For Extension Activities</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>3.4.2</td>
                        <td>Award letters for extension activities </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>3.4.3 and 3.4.4</td>
                        <td>Additional Documents For Extension activities</td>
                        <td></td>
                    </tr>

                    <tr>
                        <th colspan="4">3.5 – Collaboration </th>
                    </tr>
                    <tr>
                        <th>12</th>
                        <td>3.5.1</td>
                        <td>Linkages</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>13</th>
                        <td>3.5.2</td>
                        <td>Functional MoUs</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Hoc>
    );
}

export default Criteria3;