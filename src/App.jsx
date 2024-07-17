
import './App.css'
import { useEffect } from 'react'

function App() {
  const webgazer = window.webgazer
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    webgazer.setGazeListener( (data, clock) => {
      // console.log(data, clock)
      // var xprediction = data.x;
      // var yprediction = data.y;
      webgazer.showFaceOverlay(false)
    }).begin()
  })




  
  return (
    <h1>
      DEMO
    </h1>
  )
}

export default App
