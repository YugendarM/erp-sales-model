import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TbLayoutDashboard, TbLayoutDashboardFilled } from "react-icons/tb";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { FaHandshake, FaRegHandshake } from "react-icons/fa6";


const SideNavbarComponent = () => {

  const {pathname} = useLocation()
  console.log(pathname)

  return (
    <div className='w-[350px] flex justify-center fixed h-screen my-10'>
      <div className='w-[80%] rounded-md h-full bg-gradient-to-b from-[#414141] to-[#191919]'>
        <div className='w-full flex justify-center py-5'>
          <img src='https://erp-accounts.vercel.app/static/media/syncroFlow.cf4cf8f7da3b4fd82066.png' alt='syncro-flow-logo' className='border-b border-b-white object-contain w-3/4'/>
        </div>

        <nav className='px-5 flex flex-col gap-4 '>
          <Link to={"/"} className={`text-white text-md flex items-center py-4 px-8 rounded-lg gap-5 transition ${pathname === "/" ? "bg-blue-600" : "hover:bg-[#636363]"}`}>{
            pathname === "/" ? <TbLayoutDashboardFilled className='text-2xl'/> : < TbLayoutDashboard className='text-2xl'/>
          }
            Dashboard
          </Link>

          <Link to={"/customers"} className={`text-white text-md flex items-center py-4 px-8  rounded-lg gap-5 ${pathname === "/customers" ? "bg-blue-600" : "hover:bg-[#636363]"}`}>{
            pathname === "/customers" ? <BsPeopleFill className='text-2xl'/> : < BsPeople className='text-2xl'/>
          }
            Customers
          </Link>

          <Link to={"/vendors"} className={`text-white text-md flex items-center py-4 px-8  rounded-lg gap-5 ${pathname === "/vendors" ? "bg-blue-600" : "hover:bg-[#636363]"}`}>{
            pathname === "/vendors" ? <FaHandshake className='text-2xl'/> : < FaRegHandshake className='text-2xl'/>
          }
            Vendors
          </Link>

          

        </nav>
      </div>
    </div>
  )
}

export default SideNavbarComponent
