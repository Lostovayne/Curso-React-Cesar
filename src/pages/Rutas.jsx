import { NavLink } from 'react-router-dom';

let id = 16;

const Rutas = () => {
  return (
    <nav>
      <h1>Rutas</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/sobre-nosotros'>Sobre Nosotros</NavLink>
        </li>
        <li>
          <NavLink to={`/rutas/path/${id}`}>Parametros path</NavLink>
        </li>
        <li>
          <NavLink to={`/rutas/query-string?id=${id}`}>Parametros query String</NavLink>
        </li>
        <li>
          
          <NavLink to="/hooks "  > Ruta Hooks </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Rutas;


