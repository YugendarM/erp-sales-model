import React from 'react'
import RouterComponent from './components/RouterComponent/RouterComponent'
import { BrowserRouter as Router } from 'react-router-dom'
import SideNavbarComponent from './components/SideNavbarComponent/SideNavbarComponent'

const App = () => {
  return (
    <Router>
      <div className='flex '>
        <SideNavbarComponent/>
        <RouterComponent/>
      </div> 
    </Router>
  )
}

export default App
