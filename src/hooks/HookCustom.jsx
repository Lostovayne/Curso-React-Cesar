import { useState } from 'react';
import { categorias, productos } from '../data';
import useHookPersonalizado from './useHookPersonalizado';

const HookCustom = () => {
  const [categoria, setCategoria] = useState(0);
  const [verduras, setVerduras] = useHookPersonalizado()
  const [producto, setProducto] = useState(0);


  return (
    <>
      <h2>Custom Hook</h2>
      <form>
        <label htmlFor='categoria'>Categorias</label>
        <select name='' value={categoria} onChange={(e) => { setCategoria(e.target.value) }} id='categoria'>
          <option value='0'>Seleccione...</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </select>
      </form>

      <form>
        <label htmlFor='producto'>Productos</label>
        <select name='' value={producto} onChange={(e) => { setProducto(e,target.value) }} id='producto'>
          <option value='0'>Seleccione...</option>
          {productos.map((product) => (
            <option key={product.id} value={product.id}>
              {product.nombre}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};
export default HookCustom;
