import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
let counter =5;
const addValue = ()=>{
  console.log("click" , counter)
 counter = counter +1
}
  return (
    <>
      <h1>hi</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}> add value{counter}</button>
      <br />
      <button>remove value</button>
    </>
  )
}

export default App
