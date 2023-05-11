import React from "react";
import Works from "./Works";

const Card = () => {
  return (
    <>
      <div className="grid-container">
        <div className="div1">
          <Works
            img="/img/empanadaselector.gif"
            name="Empanada clicker game"
            description="This project is based on the popular game cookie clicker"
            href=""
          ></Works>
        </div>

        <div className="div2">
          <Works
            img="/img/flashcards.gif"
            name="Flashcards"
            description="miercoles"
            href=""
          ></Works>
        </div>
        <div className="div3">
          <Works
            img="/img/projectlabone.gif"
            name="Sigthseeing in malta"
            description="miercoles"
            href=""
          ></Works>
        </div>
        <div className="div4">
          <Works
            img="/img/planning.gif"
            name="Presentation"
            description="miercoles"
            href=""
          ></Works>
        </div>
        <div className="div5">
          <Works
            img=""
            name="Calendar simple"
            description="miercoles"
            href=""
          ></Works>
        </div>
      </div>
    </>
  );
};

export default Card;
