import { useContext } from 'react';
import context from '../context/EjemploProvider';

const ContextEjemplo = () => {
  const { variableContexto, saludar, nombre, setNombre } = useContext(context);

  setNombre("seteado desde el contexto ejemplo")  

  
  
  return (
    <>
      <h1>{variableContexto}</h1>
      <h2>{saludar("Juan")}</h2>
      <h3>{nombre}</h3>
    </>
  );
};
export default ContextEjemplo;
