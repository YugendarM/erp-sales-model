import React from 'react'
import RouterComponent from './components/RouterComponent/RouterComponent'
import { BrowserRouter as Router } from 'react-router-dom'
import SideNavbarComponent from './components/SideNavbarComponent/SideNavbarComponent'
import SmallNavComponent from './components/SmallNavComponent/SmallNavComponent'

const App = () => {
  return (
    <Router>
      <SmallNavComponent/>
      <div className='flex '>
        <SideNavbarComponent/>
        <RouterComponent/>
      </div> 
    </Router>
  )
}

export default App
