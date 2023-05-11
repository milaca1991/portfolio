import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

function Wapicon(props) {
  

  return (
    <a href={`https://wa.me/${props.phoneNumber}`} target="_blank" rel="">
   <BsWhatsapp className='iconMedia'/> 
    </a>
  );
}

export default Wapicon;