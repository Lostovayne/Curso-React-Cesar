import { Outlet } from 'react-router-dom';
import Rutas from '../pages/Rutas';
import { useLocation } from 'react-router-dom';
import {provider as Provider } from '../context/EjemploProvider';



//uselocation me permite navegar entre rutas y mostrar el path de estas mismas

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Provider>
        <p>{location.pathname}</p>
        <Rutas />
        <Outlet />
      </Provider>
    </>
  );
};
export default Layout;
