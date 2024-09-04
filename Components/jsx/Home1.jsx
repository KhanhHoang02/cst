import { useState } from "react"
import Mol from "./Mol1.jsx"
function App() {
  let [count1,setcount1]=useState(0)
  if(count1 == 1){
    return(
      <>
        <Mol />
      </>
    )
  }
  return (
    <>
      <div className="b1">
        <button className="btn" onClick={() => {setcount1(count1+1)}}>
          Mol và tỉ khối chất khí
        </button>
      </div>
    </>
  )
}
export default App