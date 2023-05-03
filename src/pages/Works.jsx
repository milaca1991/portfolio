import React from "react";

const Works = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" className="" />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a href={props.href}>
        <button type="submit">Visit project</button>
      </a>
    </div>
  );
};

export default Works;
