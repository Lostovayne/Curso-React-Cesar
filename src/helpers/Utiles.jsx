import { Link } from 'react-router-dom';


const Utiles = () => {
  return (
    <>
      <h2>Lista de Utilidades</h2>
      <Link to='/utiles/UtilesDay'>Days-js</Link>
      <br />
      <Link to='/utiles/Utilesswipeable'>React Swipeable</Link>
    </>
  );
};
export default Utiles;
