import React from 'react';
import Hoc from '../../Hoc/Hoc';
import { Button } from 'react-bootstrap'

import iqacFormation20 from "../../assets/docs/iqac/IQACformation2019-20.pdf";
import iqacFormation21 from "../../assets/docs/iqac/IQACfromation2020-21.pdf";
import iqacFormation22 from "../../assets/docs/iqac/IQACformation2021-22.pdf";

const IqacCell = (props) => {

    return (
        <Hoc>
            <h5 className="text-primary text-center my-2 mb-4">Internal Quality Assurance Cell</h5>
            <p>
                On July 19, 2017, the Internal Quality Assurance Cell (IQAC) was founded in the college as a quality assurance measure. IQAC is working to create a framework for taking deliberate, consistent, and catalytic action to enhance the college's academic and administrative efficiency.
            </p>
            <h6 className="text-primary">Objectives:-As per guidelines of NAAC the objectives are</h6>
            <ul>
                <li>
                    <p>Develop a framework for taking deliberate, consistent, and catalytic action to enhance the institution's academic and administrative efficiency.</p>
                </li>
                <li>
                <p>To encourage the internalization of a quality culture and the institutionalization of best practices as a means of improving institutional performance.</p>
                </li>
            </ul>
            <h6 className="text-primary">Functions:-</h6>
            <ul>
                <li>
                    <p>Developing strategies for curriculum implementation, teaching-learning efficiency, and Research.</p>
                </li>
                <li>
                    <p>To aid in the creation of a learner-centric environment conducive to high-quality education and faculty growth, including the adoption of necessary information and technology for participatory teaching and learning.</p>
                </li>
                <li>
                    <p>To collect and analyze feedback on quality-related institutional processes from all stakeholders</p>
                </li>
                <li>
                    <p>Organize workshops, seminars, and conferences on quality-related topics at the regional, national, state, and university levels, as well as promote quality circles.</p>
                </li>
                <li>
                    <p>To keep track of the numerous programmes and initiatives that contribute to quality improvement.</p>
                </li>
                <li>
                    <p>To serve as the Institution's nodal agency for organizing quality-related operations, such as the implementation and distribution of best practices.</p>
                </li>
                <li>
                    <p>Conducting academic audits on a regular basis.</p>
                </li>
                <li>
                    <p>Prepare Annual Quality Assurance Report (AQAR) </p>
                </li>
            </ul>
            <a className="mt-4 mx-2 btn btn-outline-primary" href={ iqacFormation20 } target="_blank" rel='noreferrer'> IQAC formation 2019-20 </a>
            <a className="mt-4 mx-2 btn btn-outline-primary" href={ iqacFormation21 } target="_blank" rel='noreferrer'> IQAC formation 2020-21 </a>
            <a className="mt-4 mx-2 btn btn-outline-primary" href={ iqacFormation22 } target="_blank" rel='noreferrer'> IQAC formation 2021-22 </a>
        </Hoc>
    );
}

export default IqacCell;