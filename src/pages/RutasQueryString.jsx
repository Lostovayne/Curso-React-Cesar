import { useLocation } from 'react-router-dom';

const RutasQueryString = () => {
  const search = useLocation().search;
  let id = new URLSearchParams(search).get('id');

  return (
    <>
      <h2>Ejemplo Path query string ${id} </h2>
    </>
  );
};
export default RutasQueryString;
