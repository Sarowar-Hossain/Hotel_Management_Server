import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full flex'>
    <div className='w-2/6'>
        <NavBar></NavBar>
    </div>
    <div className='w-4/6 text-center'>
        <Outlet></Outlet>
    </div>
</div>
  )
}

export default App
