import React, { useEffect, useState } from 'react'
import { IoChevronDown, IoChevronUp, IoSearch } from "react-icons/io5";
import vendorsData from "../../data/vendorsData"
import { Breadcrumb, Button, Dropdown, Form, Input, Menu, Modal, Space } from 'antd';
import { IoMdHome } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';

const VendorsPageComponent = () => {

  const [vendorSearch, setVendorSearch] = useState("")
  const [vendorData, setVendorData] = useState(vendorsData)
  const [isSortOrFilterApplied, setIsSortOrFilterApplied] = useState(false)
  const [sortButtonContent, setSortButtonContent] = useState(null)
  const [filterButtonContent, setFilterButtonContent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vendorInputData, setVendorInputData] = useState({})

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleVendorSelect = () => {

  }

  const handleVendorSearch = (event) => {
    setVendorSearch(event.target.value.toLowerCase())
  }

  const handleClear = () => {
    setSortButtonContent(null)
    setIsSortOrFilterApplied(false)
    setVendorSearch("")
    setVendorData(vendorsData)
  }

  const handleAscendingSort = () => {
    setIsSortOrFilterApplied(true)
    setSortButtonContent("A-Z order")

    const sortedVendorData = [...vendorsData].sort((a, b) => {
      return a.vendorName.localeCompare(b.vendorName);
    });
    setVendorData(sortedVendorData);
  }

  const handleDescendingSort = () => {
    setIsSortOrFilterApplied(true)
    setSortButtonContent("Z-A order")

    const sortedVendorData = [...vendorsData].sort((a, b) => {
      return b.vendorName.localeCompare(a.vendorName);
    });
    setVendorData(sortedVendorData);
  }

  const handleSubmit = (values) => {
    // console.log('Success:', values);
    setVendorData((prev) => [...prev, values])
    setIsModalOpen(false)
    alert("Vendor added to the list")
  };

  const handleFormChange = (changedValues, allValues) => {
    setVendorInputData(allValues); // Update the state with all the form data
    console.log(vendorInputData); // This will print the updated form state
  };

  const handleFormClear = () => {
    form.resetFields()
  }

  const filterItems = [
    {
      key: '1',
      label: (
        <button>Filter 1</button>
      ),
    },
    {
      key: '2',
      label: (
        <button>Filter 1</button>
      ),
    },
    {
      key: '3',
      label: (
        <button>Filter 1</button>
      ),
    },
  ];
  const filterMenu = {
    items: filterItems
  };

  const sortItems = [
    {
      key: '1',
      label: (
        <button onClick={handleAscendingSort}>A-Z order</button>
      ),
    },
    {
      key: '2',
      label: (
        <button onClick={handleDescendingSort}>Z-A order</button>
      ),
    },
    
  ];
  const sortMenu = {
    items: sortItems
  };

  useEffect(() => {
    if(vendorSearch.length !== 0){
      setIsSortOrFilterApplied(true)
    }
    const filteredVendorData = vendorsData.filter((vendor) => 
      vendor.vendorName.toLowerCase().includes(vendorSearch)
    )
    setVendorData(filteredVendorData)
    console.log(vendorSearch)
  }, [vendorSearch])

  return (
    <div className='flex flex-col justify-start items-start min-w-full gap-4'>
      <div className='breadcrum-container'>
        <Breadcrumb className='text-headerText text-base'
          items={[
            {
              title: <Link to={"/"}><IoMdHome className='text-xl'/></Link>,
            },
            {
              title: "Vendors",
            },
          ]}
        />
      </div>
      <div className=' shadow-custom-medium rounded-md w-full flex flex-col '>
        <div className='flex items-center justify-between px-5 py-5'>
          <h1 className='text-2xl font-medium text-headerText'>Vendors</h1>
          <button 
            className='bg-primaryBlue text-white rounded-md px-2 py-1.5'
            onClick={showModal}
          >
            + Add New
          </button>
        </div>

        <div className=' search-filter-container  flex items-center justify-between px-5'>
          <div className='rounded-md py-1 px-2 shadow-custom-light flex items-center gap-2 w-1/2'>
            <IoSearch className='text-xl text-gray-400'/>
            <input 
              className=' focus:outline-none w-full' 
              type='search' 
              name='search' 
              placeholder='Search Vendor'
              value={vendorSearch}
              onChange={(event) => handleVendorSearch(event)}
            />
          </div>
          <div className='flex items-center gap-4'>
            <Space direction="vertical">
              <Space wrap>
                {/* <Dropdown menu={filterMenu} placement="bottom" arrow className='border-none shadow-custom-light text-gray-500 w-28'>
                  <Button>{filterButtonContent ? filterButtonContent : "Filtr by "}<IoChevronDown className='text-sm'/></Button>
                </Dropdown> */}

                <Dropdown menu={sortMenu} placement="bottom" arrow className='border-none shadow-custom-light text-gray-500 w-28'>
                  <Button>{sortButtonContent ? sortButtonContent : "Sort by "}<IoChevronDown className='text-sm'/></Button>
                </Dropdown>
              </Space>
            </Space>
            <button 
              className={`flex items-center gap-2 rounded-md shadow-custom-light px-4 py-1.5 text-sm ${isSortOrFilterApplied ? "bg-primaryBlue text-white " : 'bg-white text-gray-300 cursor-not-allowed'}`}
              onClick={handleClear}
            > 
              Clear 
            </button>
          </div>
        </div>

        {/* <div className='table-header-container w-full'>
            <table className='bg-red-800 w-full h-96 overflow-hidden'>
              <thead className='w-full px-5'>
                <tr className=' border-b border-b-gray-200'>
                  <th className='w-3/12 text-left px-5 md:py-5'>Vendor Name</th>
                  <th className='w-2/12 text-left px-5 py-3 md:py-5'>GST No</th>
                  <th className='w-2/12 text-left px-5 py-3 md:py-5'>PAN no</th>
                  <th className='w-3/12 text-left px-5 py-3 md:py-5'> Address</th>
                  <th className='w-2/12 text-left px-5 py-3 md:py-5'> Contact No</th>
                </tr>
              </thead>
              <tbody className='w-full '>
                {vendorData.map((row, index) => (
                  <tr
                    onClick={handleVendorSelect}
                    className='text-xs border-b border-b-gray-200 hover:bg-gray-300 cursor-pointer transition'
                    key={index}
                    // onClick={() => {
                    //   handleVendorClick(row.AccountCode);
                    // }}
                  >
                    <td className='py-3 md:py-5 px-5'>{row.vendorName}</td>
                    <td className='py-3 md:py-5 px-5'>{row.gstNo}</td>
                    <td className='py-3 md:py-5 px-5'>{row.panNo}</td>
                    <td className='py-3 md:py-5 px-5'>{row.address}</td>
                    <td className='py-3 md:py-5 px-5'>{row.contactNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div> */}


        <div className='w-full'>
            <div className=' w-full'>
              <div className='w-full '>
                <div className='table-header-container border-b border-b-gray-200 flex items-center px-5 py-3 md:py-5 font-semibold text-left'>
                  <h2 className='w-3/12'>Vendor Name</h2>
                  <h2 className='w-2/12'>GST No</h2>
                  <h2 className='w-2/12'>PAN no</h2>
                  <h2 className='w-3/12'> Address</h2>
                  <h2 className='w-2/12'> Contact No</h2>
                </div>
              </div>
              <div className='table-body-container w-full h-[65vh] overflow-scroll '>
                {vendorData.map((row, index) => (
                  <div
                    onClick={handleVendorSelect}
                    className='text-xs border-b border-b-gray-200 hover:bg-gray-300 cursor-pointer transition flex items-center px-5 py-3 md:py-5 '
                    key={index}
                    // onClick={() => {
                    //   handleVendorClick(row.AccountCode);
                    // }}
                  >
                    <p className='w-3/12 '>{row.vendorName}</p>
                    <p className='w-2/12 '>{row.gstNo}</p>
                    <p className='w-2/12 '>{row.panNo}</p>
                    <p className='w-3/12 '>{row.address}</p>
                    <p className='w-2/12 '>{row.contactNo}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>

      <Modal 
        title="Add new Vendor" 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          form = {form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
          onValuesChange={handleFormChange}
        >
          <Form.Item
            label="Vendor Name"
            name="vendorName"
            rules={[
              {
                required: true,
                message: 'Please enter the Vendor Name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="GST No"
            name="gstNo"
            rules={[
              {
                required: true,
                message: 'Please enter the GST Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="PAN No"
            name="panNo"
            rules={[
              {
                required: true,
                message: 'Please enter the PAN Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: 'Please enter the Address!',
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Contact No"
            name="contactNo"
            rules={[
              {
                required: true,
                message: 'Please enter the Contact Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 16,
              span: 16,
            }}
            className=''
          >
            
            <Button htmlType="button" onClick={handleFormClear}>
              Clear
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default VendorsPageComponent
