import { useParams } from 'react-router-dom';

const RutasPath = () => {
  const { id } = useParams();
  return <h2>Ejemplo Path ${id} </h2>;
};
export default RutasPath;
