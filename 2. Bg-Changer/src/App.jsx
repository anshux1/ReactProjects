import { useState } from "react"

function App() {
  const [color, setColor] = useState('green')
  const colors = ["Tomato",'green', "Orange", 'DodgerBlue', 'MediumSeaGreen', 'Gray', 'SlateBlue', 'Violet', 'LightGray']
  return (
    <div className="w-full h-screen absolute" style={{ "background-color":color}}>
      <div className="bg-white w-fit py-4 px-2 relative top-5 mx-auto rounded-full">

      {colors.map((color) => {
          return <button onClick={() => setColor(color)} style={{ "background-color":color}} 
            className="bg-white mx-4 px-5 text-black text-white font-bold tracking-wider py-2 rounded-full" 
          >{color}</button>
      }) }
      </div>
      
    </div>
  )
}

export default App
