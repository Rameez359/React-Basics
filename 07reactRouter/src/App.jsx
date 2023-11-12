import { useState } from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 p-4'>React Router</h1>
      <Headers />
      <Home />
      <Footer />
    </>
  )
}

export default App
