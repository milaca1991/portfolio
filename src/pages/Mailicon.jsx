import React from "react";
import { AiFillMail } from "react-icons/ai";


function Mailicon(props) {



return (

    <a href={`mailto:${props.mail}`} target="_blank" rel="">
   <AiFillMail className='iconMedia'/> 
    </a>


);

}

export default Mailicon;