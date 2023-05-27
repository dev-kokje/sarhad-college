import React from "react";
import { 
    Button
} from "react-bootstrap"; 
import Hoc from "../../Hoc/Hoc";

import newGif from '../../assets/img/new-gif-image.gif'

const Menutab = (props) => {

    return (
        <Hoc>
            <a href={props.link}>
                <Button variant="success" className="menutab vertical-nav-btn">
                    {props.title}
                    {
                        props.new ? <img src={newGif} height="30px" width="40px" className="pl-1"/> : <span/>
                    }
                </Button>
            </a>
        </Hoc>
    );
}

export default Menutab;