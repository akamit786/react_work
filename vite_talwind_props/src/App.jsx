import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
let myobj ={
  usernmae :"amit",
  age:19
}
  return (
    <>
   <h1 className='bg-green-500 text-black rounded p-4 mb-5'> tailwind test</h1>
<Card username="code" btnText="click me1"/>
<Card username="code 2" />

    </>
  )
}

export default App
