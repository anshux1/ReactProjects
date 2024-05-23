import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-screen flex items-center space-y-3 justify-center flex-col">
      <h1 className="text-3xl font-semibold">Counter App</h1>
      <div className="text-5xl">{count}</div>
      <div className="text-white">
        <button className="btn m-1 btn-success" onClick={() => setCount(prev => prev + 1)}>Increase</button>
        <button className="btn m-1 btn-error" onClick={() => setCount(prev => prev - 1)}>Decrease</button>
      </div>
    </div>
  )
}

export default App
