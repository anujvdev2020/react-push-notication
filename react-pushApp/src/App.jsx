import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Notification from './components/Notification'

function App() {
  const showAlert=()=>{
    alert("Ho")
  }
  return (
    <>
     <Notification showAlert={()=>showAlert()}/>
    </>
  )
}

export default App
