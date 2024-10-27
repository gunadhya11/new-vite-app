import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import Sidebar from './components/sidebar/sidebar'

function App() { 

  return (
    <div>
      <Sidebar/>
      {/* <Button type='secondary' label='button'/> */}
    </div>
  )
}

export default App
