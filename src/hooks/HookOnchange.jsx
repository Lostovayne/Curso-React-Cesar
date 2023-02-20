import {useState} from 'react';

const HookOnchange = () => {
  
  const [nombre, setNombre ] = useState("") 
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nombre)
    
  }
  
  
  
  return (
    <form onSubmit={handleSubmit} >
      <input
        type='text'
        placeholder='escribe texto'
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button type='submit'>enviar</button>
    </form>
  );
}
export default HookOnchange