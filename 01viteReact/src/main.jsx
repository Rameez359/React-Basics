import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const anotherElement = "Rameez Ali"
const reactElement = React.createElement(
    'a',
    {href:'https://google.com', trget:'_blank'},
    'click me to visit google',
    anotherElement
  )

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    reactElement
)
