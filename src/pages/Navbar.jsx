import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      <ul>

          <div className="iconContainer">
           <img src="/img/cami.jpg" alt="icon" className="icon"/>
          <Link to="/"> <span> CAMILA GARCIA</span></Link>
          </div>
   
      <li>
        <Link to="/">Sobre mí</Link>
      </li>
  
      <li>
        <Link to="/Projects"> Proyectos</Link>
      </li>
      <li>
        <Link to="/Contact">Contacto</Link>
      </li>

    </ul>
</nav>
  );
}

export default Navbar;
