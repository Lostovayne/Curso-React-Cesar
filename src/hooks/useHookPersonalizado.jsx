import {useState} from 'react'

const useHookPersonalizado = () => {
  
  const [verduras,setVerduras] = useState ([])
  
  return [verduras,setVerduras]
}
export default useHookPersonalizado