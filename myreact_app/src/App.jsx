import { useState } from "react";


function App() {
 // const [count,setCount] =useState(0)
 const[show,setShow]=useState(false)
  const handleclick =()=>{
  // setCount(count+1)
  //setShow(!show)
  setShow((prev)=>!prev)
}
  return (
    <>
    <h1 className="text-red-600">React class</h1>
    {/*<h1>{count}</h1>*/}
    <button className="bg-blue-600 px-2 py-2" onClick={handleclick}> click</button>
  {show && <h1>hello world</h1>}
  
  </>
  )
}
export default App
