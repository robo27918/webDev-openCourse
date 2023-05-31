import {useState} from 'react'
const App = () => {

  const [counter, setCounter] = useState(0)

  const increseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)
  /***
  setTimeout(
    ()=> setCounter(counter +1),
    1000
  )**/
  console.log("rendering...", counter)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increseByOne}>
        Plus ++
      </button>
      
      <button onClick={setToZero}>
        zero
      </button>
      </div>
  )
}

export default App;
