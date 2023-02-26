import {useState} from 'react';
import { createContext} from 'react';





const context = createContext();

const provider = ({ children }) => {
  const variableContexto = 'hola cesar';

  const saludar = (nombre) => {
    return nombre;
  };
  
  const [nombre, setNombre] = useState("Pedro")

  return (
    <context.Provider value={{ variableContexto, saludar, nombre, setNombre }}>
      {children}
    </context.Provider>
  );
};

export { provider };

export default context;
