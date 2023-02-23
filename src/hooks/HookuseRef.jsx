import { useRef } from 'react';
import { useState } from 'react';

const HookuseRef = () => {
  const [texto, setTexto] = useState('');
  const inputRef = useRef();

  const imprimirValor = (e) => {
    e.preventDefault();
    setTexto([...texto, ' ', inputRef.current.value]);
  };

  return (
    <>
      <h1>HookuseRef</h1>

      <form action=''>
        <input type='text ' ref={inputRef} />
        <button onClick={imprimirValor}>Mostrar</button>
      </form>
      <p>{texto}</p>
    </>
  );
};
export default HookuseRef;
