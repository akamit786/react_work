import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white" onClick={() => setcolor("red")} style={{ backgroundColor: "red" }}>red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white" onClick={() => setcolor("green")} style={{ backgroundColor: "green" }}>green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white" onClick={() => setcolor("purple")} style={{ backgroundColor: "purple" }}>purple</button>
            <button className="outline-none px-4 py-1 rounded-full text-white" onClick={() => setcolor("blue")} style={{ backgroundColor: "blue" }}>blue</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
