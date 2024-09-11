import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CustomerPageComponent from '../../pages/CustomerPageComponent/CustomerPageComponent'
import VendorsPageComponent from '../../pages/VendorsPageComponent/VendorsPageComponent'
import DashboardPageComponent from '../../pages/DashboardPageComponent/DashboardPageComponent'

const RouterComponent = () => {
  return (
    <div className='w-full md:w-3/4 flex'>
      {/* <div className='w-[350px]'></div> */}
      <div className='w-full my-10 px-5'>
      <Routes>
        <Route exact path='/' element={<DashboardPageComponent/>}/>
        <Route path='/customers' element={<CustomerPageComponent/>}/>
        <Route path='/vendors' element={<VendorsPageComponent/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default RouterComponent
