import React, { useState } from 'react'
import { BsPeople, BsPeopleFill } from 'react-icons/bs'
import { FaCreditCard, FaHandshake, FaRegCreditCard, FaRegHandshake } from 'react-icons/fa6'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import { TbLayoutDashboard, TbLayoutDashboardFilled } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

const SmallNavComponent = () => {

    const [isNavOpen, setIsNavOpen] = useState(null)
    const {pathname} = useLocation()

    const handleNavOpen = () => {
        setIsNavOpen(true)
    }

    const handleNavClose = () => {
        setIsNavOpen(false)
    }

  return (
    <div className='small-screen-nav md:hidden w-full border-b border-b-gray-400 h-20 p-5'>
        <button onClick={handleNavOpen}><HiMenuAlt2 className='text-3xl'/></button>

        {
            
            <div className={`fixed top-0 right-0 h-screen w-screen bg-white z-10 ${isNavOpen ? "animate-slide-in" : !isNavOpen ? "animate-slide-out" : null}`}>
                <div className='flex justify-end'>
                    <button className='p-5' onClick={handleNavClose}><IoCloseSharp className='text-2xl'/></button>
                </div>
                <nav className='px-5 flex flex-col '>
                <Link onClick={handleNavClose} to={"/"} className={` text-md flex items-center py-4 px-8  rounded-lg gap-5 ${pathname === "/" ? "bg-primaryBlue text-white" : "text-primaryBlue bg-white "}`}>{
                    pathname === "/" ? <TbLayoutDashboardFilled className='text-2xl'/> : < TbLayoutDashboard className='text-2xl'/>
                }
                    Dashboard
                </Link>

                <Link onClick={handleNavClose} to={"/vendors"} className={` text-md flex items-center py-3 px-8  rounded-lg gap-5 ${pathname === "/vendors" ? "bg-primaryBlue text-white" : "text-primaryBlue bg-white "}`}>{
                    pathname === "/vendors" ? <FaHandshake className='text-2xl'/> : < FaRegHandshake className='text-2xl'/>
                }
                    Vendors
                </Link>

                <Link onClick={handleNavClose} to={"/payables"} className={` text-md flex items-center py-3 px-8  rounded-lg gap-5 ${pathname === "/payables" ? "bg-primaryBlue text-white" : "text-primaryBlue bg-white "}`}>{
                    pathname === "/payables" ? <FaCreditCard className='text-2xl'/> : < FaRegCreditCard className='text-2xl'/>
                }
                    Payables
                </Link>

                </nav>
            </div>
        }
    </div>
  )
}

export default SmallNavComponent
