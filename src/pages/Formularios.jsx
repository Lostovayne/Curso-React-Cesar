import { Link } from 'react-router-dom';

const Formularios = () => {
  return (
    <>
      <h1>Formularios</h1>

      <ul>
        <li>
          <Link to='/formularios/simple'>Formulario Simple</Link>
        </li>
        <li>
          <Link to='/formularios/use-action-data'>Formulario use-action-data</Link>
        </li>
      </ul>
    </>
  );
};
export default Formularios;
