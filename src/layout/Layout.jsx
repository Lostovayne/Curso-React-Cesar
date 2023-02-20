import { Outlet } from 'react-router-dom';

import Rutas from '../pages/Rutas';
import { useLocation } from 'react-router-dom';

//uselocation me permite navegar entre rutas y mostrar el path de estas mismas

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <p>{location.pathname}</p>
      <Rutas />
      <Outlet />
    </>
  );
};
export default Layout;
