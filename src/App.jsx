import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  const [color, setColor] = useState({
    r: 24,
    g: 24,
    b: 24,
  })
  const colorSwap = () => {
    setColor({
      r: Math.random() * 100,
      g: Math.random() * 100,
      b: Math.random() * 100,
    })
  }
  return (
    <div className="App" style={{backgroundColor: `rgb(${color.r},${color.g},${color.b})`}}>
      <button onClick={colorSwap}>Change Color</button>
    </div>
  )
}

export default App
