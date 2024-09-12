import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaRupeeSign, FaWallet } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { IoDocumentText } from 'react-icons/io5';
import PayablesReceivableBarChart from '../../components/PayablesReceivableBarChart/PayablesReceivableBarChart';
import InvoiceStatusChart from '../../components/InvoiceStatusChart/InvoiceStatusChart';

const DashboardPageComponent = () => {

  const [people, setPeople] = useState("vendors")
  const [option, setOption] = useState("Today")
  const [optionOpen, setOptionOpen] = useState(false)

  return (
    <div className='flex flex-col gap-20 w-full h-[95vh] py-5 md:py-20 overflow-y-scroll no-scrollbar px-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ga w-full gap-6'>
        <div className='rounded-lg hover:transform hover:-translate-y-2 transition shadow-custom-medium hover:shadow-custom-heavy p-5 w-full flex flex-col gap-3'>
            <FaRupeeSign className='text-primaryBlue text-2xl'/>
            <h1 className='text-lg font-bold'>Payables</h1>
            <div className='flex flex-col gap-2'>
              <p className='text-xs text-gray-500'>Total payables: <span className='font-medium'>₹ {"25,000"}</span></p>
              <p className='text-xs text-gray-500'>Total payables: <span className='font-medium'>₹ {"12,000"}</span></p>
            </div>
        </div>

        <div className='relative rounded-lg hover:transform hover:-translate-y-2 transition shadow-custom-medium hover:shadow-custom-heavy p-5 w-full flex flex-col gap-3'>
            <IoDocumentText className='text-primaryBlue text-2xl'/>
            <h1 className='text-lg font-bold'>Receivables</h1>
            <div className='flex flex-col gap-2'>
              <p className='text-xs text-gray-500'>Total receivables: <span className='font-medium'>₹ {"25,000"}</span></p>
              <p className='text-xs text-gray-500'>Overdue: <span className='font-medium'>₹ {"12,000"}</span></p>
            </div>
            <div className='absolute -top-4 right-6'>
              <button className=' bg-primaryBlue justify-between text-white rounded-md px-4 py-1.5 flex items-center font-medium w-36 text-center' onClick={() => setOptionOpen((prev) => !prev)}>
                {option} <span>{optionOpen ? <BsChevronUp/> : <BsChevronDown />}</span>
              </button>
              {
                optionOpen && 
                <div className='flex flex-col text-xs font-medium bg-white shadow-md rounded-md border my-2'>
                  {
                    ["Today", "This Month", "This Year"].map((option) => (
                      <button className='hover:bg-primaryBlue text-left px-2 w-full py-1 hover:text-white' onClick={() => {setOption(option); setOptionOpen(false)} }>{option}</button>
                    ))
                  }
                </div>
              }
            </div>
        </div>
        

        <div className='rounded-lg hover:transform hover:-translate-y-2 transition shadow-custom-medium hover:shadow-custom-heavy p-5 w-full flex flex-col gap-3'>
            <FaWallet className='text-primaryBlue text-2xl'/>
            <h1 className='text-lg font-bold'>Leger Balance</h1>
            <div className='flex flex-col gap-2'>
              <p className='text-xs text-gray-500'>Current Balance: <span className='font-medium'>₹ {"25,000"}</span></p>
              <p className='text-xs text-gray-500'>Last updated: <span className='font-medium'>₹ {"12 Aug 2024"}</span></p>
            </div>
        </div>

        <div className='rounded-lg hover:transform hover:-translate-y-2 transition shadow-custom-medium hover:shadow-custom-heavy p-5 w-full flex flex-col gap-2'>
            <div className='flex items-center justify-around'>
              <FaUserTie className='text-primaryBlue text-2xl w-1/2 cursor-pointer' onClick={() => setPeople("vendors")}/>
              <HiUserGroup className='text-primaryBlue text-2xl w-1/2 cursor-pointer' onClick={() => setPeople("customers")}/>
            </div>
            <div className='flex'>
              <div className={`w-1/2 h-[3px] transition ${people === "vendors" ? "bg-primaryBlue" : null}`}></div>
              <div className={`w-1/2 h-[3px] transition ${people === "customers" ? "bg-primaryBlue" : null}`}></div>
              <div></div>
            </div>
            <h1 className='text-lg font-bold'>{people === "vendors" ? "Vendors" : "Customers"}</h1>
            <div className='flex flex-col gap-2'>
              <p className='text-4xl font-extrabold text-gray-500'>{people === "vendors" ? "23,34,555" : "53,41,234"}</p>
            </div>
        </div>

      </div>

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 '>
        <div className='flex flex-col bg-white shadow-custom-medium rounded-lg p-6 gap-3'>
          <h1 className='text-2xl font-semibold text-left'>Payables vs Recievables</h1>
          <PayablesReceivableBarChart/>
        </div>

        <div className='flex flex-col bg-white shadow-custom-medium rounded-lg p-6 gap-3'>
          <h1 className='text-2xl font-semibold text-left'>Invoice Status</h1>
          <InvoiceStatusChart/>
        </div>

        <div className='flex flex-col bg-white shadow-custom-medium rounded-lg p-6 gap-3'>
          <h1 className='text-2xl font-semibold text-left'>Payables vs Recievables</h1>
          <PayablesReceivableBarChart/>
        </div>

        <div className='flex flex-col bg-white shadow-custom-medium rounded-lg p-6 gap-3'>
          <h1 className='text-2xl font-semibold text-left'>Payables vs Recievables</h1>
          <PayablesReceivableBarChart/>
        </div>
      </div>


    </div>
  )
}

export default DashboardPageComponent
