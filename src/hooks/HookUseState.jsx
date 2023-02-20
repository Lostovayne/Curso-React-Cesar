import {useState} from 'react'



const HookUseState = () => {
  
  const [count, setCount] = useState(0)  
  
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <>
     <h3>Hook UseState</h3> 
     <div>{count}</div>
     <button onClick={increment}>Increment</button>
    </>
  )
}
export default HookUseState