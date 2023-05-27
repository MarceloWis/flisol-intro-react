import { useState } from "react"

export default function State() {
  // const array = useState(0);
  const [count,setCount] = useState(0)
  // let total = 2
  function onClick() {
    // document.getElementsByTagName('strong')[0].innerHTML = 3
    // total = total + 1
    // array[1](array[0] + 1)
    setCount(count+1)


    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)


    // setCount(prevState => prevState+1)
    // setCount(prevState => prevState+1)
    // setCount(prevState => prevState+1)
    // setCount(prevState => prevState+1)
    // setCount(prevState => prevState+1)
    // setCount(prevState => prevState+1)


  }
  return (
    <div>
      {/* <strong>{array[0]}</strong> */}
      <strong>{count}</strong>
      <br />
      <div>
        <button onClick={onClick} >+</button>
      </div>
    </div>
  )
}
