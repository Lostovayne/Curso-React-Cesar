import { useSelector, useDispatch } from 'react-redux';
import {
  cambiarMexico,
  cambiarVenezuela,
  volverChile
} from '../features/procedenciaSlice';


const ReduxEjemplo = () => {
  const lugar = useSelector((state) => state.procedencia);
  const { pais, ciudad } = lugar;
  
  
  const dispatch = useDispatch()

  return (
    <>
      <h1>Ejemplo de Redux</h1>

      <ul>
        <li>Pais:{pais}</li>
        <li>Ciudad:{ciudad}</li>
      </ul>
      
      
      <button onClick={ () => { dispatch(cambiarMexico()); } } > Cambiar a mexico</button>
      <button onClick={ () => { dispatch(cambiarVenezuela()); } } > cambiarVenezuela</button>
      <button onClick={ () => { dispatch(volverChile()); } } > volverChile</button>
      
    </>
  );
};
export default ReduxEjemplo;
