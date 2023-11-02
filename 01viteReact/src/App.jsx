import { useState } from 'react'
import Chai from "./chai"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const username = "Rameez"
  return (
    <>
      <Chai/>
      <h1>Chai aur react {username}</h1>

    </>
  )
}

export default App
