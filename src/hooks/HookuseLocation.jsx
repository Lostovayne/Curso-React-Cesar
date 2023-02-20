import { useLocation } from 'react-router-dom';

const HookuseLocation = () => {
  const location = useLocation();

  return (
    <>
      <h1>Use location</h1>
      <p>{location.pathname}</p>
    </>
  );
};
export default HookuseLocation;
