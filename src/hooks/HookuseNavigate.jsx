import { useNavigate } from 'react-router-dom';

const HookuseNavigate = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1> Hook useNavigate </h1>
      <button onClick={() => navigate('/sobre-nosotros')}>
        ir a sobre nosotros
      </button>
      <hr />
      <button onClick={ ()=> navigate(-1) } > ir atrás</button>
    </>
  );
};
export default HookuseNavigate;
