import { useLoaderData } from 'react-router-dom';
import { paises } from '../data';

export function loader() {
  const countrys = paises;
  return countrys;
}

const HookuseLoaderData = () => {
  const countrys = useLoaderData(loader);
  return (
    <>
      <h1>HookuseLoaderData</h1>
      {countrys.map((pais) => (
        <div key={pais.id}>
          {pais.nombre} : {pais.dominio}{' '}
        </div>
      ))}
    </>
  );
};
export default HookuseLoaderData;
