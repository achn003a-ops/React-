import { useState } from "react"

const Counter = () =>{
   let [count,setCount] = useState(0)

    function increase(){
       setCount(count+1)
    }

    function decrease(){
       setCount(count-1)
    }

    return(
        <>
         <button id="increment" onClick={increase}>+</button>
     <h1 id="count">{count}</h1>
    <button id="decrement" onClick={decrease}>-</button>
    </>
    )
}
export default Counter

