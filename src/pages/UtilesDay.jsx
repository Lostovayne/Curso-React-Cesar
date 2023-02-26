import {Link} from 'react-router-dom'
import dayjs from "dayjs"
import {es} from "dayjs/locale/es"


const UtilesDay = () => {
  
  let fecha = new Date()
  
  return (
    <>
      <h1>Ejemplos de la libreria Dayjs</h1>

      <h2>Formatear Fecha</h2>
      <ul>
        <li>Fecha: {fecha.toString()}</li>
        <li>
          Fecha: {dayjs(fecha).locale('es').format('dddd').toUpperCase()}{' '}
          {dayjs(fecha).format('DD')} de{' '}
          {dayjs(fecha).locale('es').format('MMMM').toUpperCase()} del{' '}
          {dayjs(fecha).format('YYYY')} || {dayjs(fecha).format('DD/MM/YYYY')}{' '}
        </li>
      </ul>
    </>
  );
}
export default UtilesDay