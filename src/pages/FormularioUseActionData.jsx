import { Form } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { atributos, categorias_productos } from '../data';

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
  //Recibir checkbox dinamicos
  let arreglo = [];
  let mensajeArreglo = '';
  let errores = [];

  if (formData.get('categoria') == '0') {
    errores.push('Debe seleccionar al menos una categoria');
  }

  atributos.map((atributo, i) => {
    if (formData.get('atributo_' + atributo.id) !== null) {
      arreglo[i] = atributo.id;

      mensajeArreglo += atributo.nombre + ',';
    }
  });

  return Toast.fire({
    icon: 'info',
    title: 'Todo Bien!',
    text: ` El dato ingresado es ${formData.get(
      'nombre'
    )} y Peligroso :${formData.get(
      'peligroso'
    )} | Atributo : ${mensajeArreglo} `
  });

  //errores del formulario
}

const FormularioUseActionData = () => {
  const [peligroso, setPeligroso] = useState(false);

  const handlePeligroso = () => {
    setPeligroso(!peligroso);
  };

  return (
    <>
      <h3>UseActionData</h3>

      <Form method='POST'>
        <div>
          <label htmlFor='categoria'>Categoria</label>
          <select name='categoria' id='categoria'>
            <option value='0'>Seleccione...</option>

            {categorias_productos.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {' '}
                {categoria.nombre}{' '}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' id='nombre' name='nombre' placeholder='Nombre' />
        </div>

        <div>
          <label htmlFor='precio'>Precio</label>
          <input
            type='number'
            min='0'
            id='precio'
            name='precio'
            placeholder='Precio'
          />
        </div>

        <div>
          <label htmlFor='destacado'>Destacado</label>
          <input type='radio' name='destacado' id='destacado1' value='si' />
          <label htmlFor='destacado1'>Si</label>
        </div>

        <div>
          <label htmlFor='destacado'>Destacado</label>
          <input type='radio' name='destacado' id='destacado2' value='no' />
          <label htmlFor='destacado2'>No</label>
        </div>

        <div>
          <label htmlFor='descripcion'>Descripcion</label>
          <textarea
            name='descripcion'
            id='descripcion'
            placeholder='descripcion'
          ></textarea>
        </div>

        <div>
          <label htmlFor='peligroso'>Peligroso</label>
          <input
            type='checkbox'
            name='peligroso'
            id='peligroso'
            value={peligroso}
            onChange={(e) => handlePeligroso(e.target.value)}
          />
          <label htmlFor='peligroso'>Peligroso</label>
        </div>

        <hr />
        <div>
          <label htmlFor='atributos'>Atributos</label>

          <div>
            {atributos.map((atributo) => (
              <div key={atributo.id}>
                <input
                  type='checkbox'
                  name={`atributo_${atributo.id}`}
                  id={`atributo_${atributo.id}`}
                  value={atributo.id}
                />
                <label htmlFor=''>{atributo.nombre}</label>
              </div>
            ))}
          </div>
        </div>

        <button type='submit'>Enviar</button>
      </Form>
    </>
  );
};
export default FormularioUseActionData;
