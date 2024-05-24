import { useState } from "react"
import reviews from "./assets/data"
import Testimonial from './components/Testimonial.jsx'


function App() {
  const [index, setIndex] = useState(0)
  const back = () => {index > 0 ? setIndex(prev => prev - 1) : setIndex(reviews.length - 1)}
  const next = () => {index < reviews.length - 1  ? setIndex(prev => prev + 1) : setIndex(0)}
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Testimonial key={reviews[index].id} back={back} next={next} data={reviews[index]} />
    </div>
  )
}

export default App
