import React from 'react';
import { BsLinkedin } from 'react-icons/bs';

function Linkicon(props) {
  


  return (
    <a href={`https://www.linkedin.com/in/${props.user}`} target="_blank" rel=''><BsLinkedin className='iconMedia'/></a>
  );
}

export default Linkicon;