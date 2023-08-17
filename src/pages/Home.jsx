import React from "react";
import ReactDOM from "react-dom";


const parrafo = React.createElement(
  "p",
  { id: "parrafo" },
  "Soy graduada en ingeniería industrial, especializada en Inteligencia de negocios en gerencia de proyectos. Desde el 2022 estoy cursando la carrera Certified Tech Developer para formarme como Profesional developer para fortalecer mis conocimientos y ampliar mi campo profesional.Mi experiencia incluye 4 años en procesos de planeación y gestión de proyectos en metodologías ágiles."
);

const titulo = React.createElement(
    "h1",
    { id: "titulo" },
    "Soy Camila, Profesional Developer"
  );
  



function Home() {
  return (
    <>
    <div>{titulo}</div>

      <div className="container-parrafo">
        <div>{parrafo}</div>

        <div>
            {parrafo}
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));

export default Home;
