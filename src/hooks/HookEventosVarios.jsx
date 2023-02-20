const HookEventosVarios = () => {
  
  const translate = () => {
    
    console.log("translate")
    
  }
  
  const getOut =() => {
    
    console.log("getOut")
    
  }
  
  
  
  return (
    <>
      <h1>Pasan cosas</h1>
      <img
        src='https://definicion.de/wp-content/uploads/2022/03/ex.png'
        alt=''
        onMouseMove={translate}
        onMouseOut={getOut}
      />
    </>
  );
}
export default HookEventosVarios