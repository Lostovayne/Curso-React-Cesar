import { useState } from 'react';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-start',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

const FormularioSimple = () => {
  const [nombre, setNombre] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    Toast.fire({
      icon: 'success',
      title: 'Enviado correctamente!'
    });
  };

  return (
    <>
      <h3>Formulario Simple</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'></label>
        <input
          type='text'
          id='nombre'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
};
export default FormularioSimple;
