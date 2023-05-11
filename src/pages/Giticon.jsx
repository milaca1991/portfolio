import React from 'react';
import { BsGithub } from 'react-icons/bs';

function Giticon(props) {
  


  return (
    <a href={`https://github.com/${props.userGit}`} target="_blank" rel=''><BsGithub className='iconMedia' /></a>
  );
}

export default Giticon;