import { Form } from 'react-router-dom';
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

//los action deben retornar algo

export async function action({ request }) {
  const formData = await request.formData();
  return Toast.fire({
    icon: 'info',
    title: ` El dato ingresado es ${formData.get('nombre')} `
  });
}

const FormularioUseActionData = () => {
  return (
    <>
      <h3>UseActionData</h3>

      <Form method='POST'>
        <div>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' id='nombre' name='nombre' />
        </div>

        <button type='submit'>Enviar</button>
      </Form>
    </>
  );
};
export default FormularioUseActionData;
