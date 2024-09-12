import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import VendorsPageComponent from '../../pages/VendorsPageComponent/VendorsPageComponent'
import DashboardPageComponent from '../../pages/DashboardPageComponent/DashboardPageComponent'
import PayablesPageComponent from '../../pages/PayablesPageComponent/PayablesPageComponent'

const RouterComponent = () => {
  return (
    <div className='w-full md:w-3/4 flex'>
      {/* <div className='w-[350px]'></div> */}
      <div className='w-full md:my-10 '>
      <Routes>
        <Route exact path='/' element={<DashboardPageComponent/>}/>
        <Route path='/payables' element={<PayablesPageComponent/>}/>
        <Route path='/vendors' element={<VendorsPageComponent/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default RouterComponent
