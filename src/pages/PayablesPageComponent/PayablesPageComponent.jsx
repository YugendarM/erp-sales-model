import React, { useEffect, useState } from 'react'
import { IoChevronDown, IoChevronUp, IoSearch } from "react-icons/io5";
import payablesData from "../../data/payablesData";
import { Breadcrumb, Button, Dropdown, Form, Input, Menu, Modal, Space } from 'antd';
import { IoMdHome } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const PayablesPageComponent = () => {

  const [categorySearch, setCategorySearch] = useState("")
  const [accNoSearch, setAccNoSearch] = useState("")
  const [invoiceNoSearch, setInvoiceNoSearch] = useState("")
  const [amountSearch, setAmountSearch] = useState("")
  const [invoiceDateSearch, setInvoiceDateSearch] = useState(null)
  const [dueDateSearch, setDueDateSearch] = useState(null)
  const [paymentStatusSearch, setPaymentStatusSearch] = useState(null)

  const [searchData, setSearchData] = useState({
    categorySearch: "",
    accNoSearch: "",
    invoiceNoSearch: "",
    amountSearch: "",
    invoiceDateSearch: "",
    dueDateSearch: "",
    paymentStatusSearch: ""
  })

  const [payableData, setPayableData] = useState(payablesData)
  const [isSortOrFilterApplied, setIsSortOrFilterApplied] = useState(false)
  const [sortButtonContent, setSortButtonContent] = useState(null)
  const [filterButtonContent, setFilterButtonContent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vendorInputData, setVendorInputData] = useState({})

  const [form] = Form.useForm();

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Ensures day is always two digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so +1
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSearchDataChange= (event) => {
    setSearchData((prev) => ({
      ...prev, 
      [event.target.name] : event.target.value
    }))
  }

  const handleClear = () => {
    setSortButtonContent(null)
    setIsSortOrFilterApplied(false)
    // setPayableData(payablesData)
    setSearchData({
      categorySearch: "",
      accNoSearch: "",
      invoiceNoSearch: "",
      amountSearch: "",
      invoiceDateSearch: "",
      dueDateSearch: "",
      paymentStatusSearch: ""
    })
  }

  const handleCategoryAscendingSort = () => {
    setIsSortOrFilterApplied(true)
    setSortButtonContent("categoryDown")

    const sortedCategoryData = [...payablesData].sort((a, b) => {
      return a.category.localeCompare(b.category);
    });
    setPayableData(sortedCategoryData);
  }

  const handleCategoryDescendingSort = () => {
    setIsSortOrFilterApplied(true)
    setSortButtonContent("categoryUp")

    const sortedCategoryData = [...payablesData].sort((a, b) => {
      return b.category.localeCompare(a.category);
    });
    setPayableData(sortedCategoryData);
  }

  const handleSubmit = (values) => {
    setPayableData((prev) => [...prev, values])
    setIsModalOpen(false)
    alert("Credit added to the list")
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
        <button className='flex items-center gap-2' onClick={handleCategoryAscendingSort}>Category <FaArrowDown className='text-xs text-gray-600'/></button>
      ),
    },
    {
      key: '2',
      label: (
        <button className='flex items-center gap-2' onClick={handleCategoryDescendingSort}>Category <FaArrowUp className='text-xs text-gray-600'/></button>
      ),
    },
    
  ];
  const sortMenu = {
    items: sortItems
  };

  // useEffect(() => {
  //   if(categorySearch.length !== 0){
  //     setIsSortOrFilterApplied(true)
  //   }
  //   const filteredPayableData = payablesData.filter((payable) => {
  //     if(categorySearch.length > 0){
  //       payable.category.toLowerCase().includes(categorySearch)
  //     }
  //   })
  //   setPayableData(filteredPayableData)
  //   console.log("categorySearch", categorySearch)
  //   console.log("accNoSearch" + accNoSearch)
  //   console.log("amountSearch" + amountSearch)
  //   console.log("invoiceSearch" + invoiceNoSearch)
  // }, [categorySearch, accNoSearch, invoiceNoSearch, amountSearch])


  useEffect(() => {
    if (
      searchData.categorySearch.length !== 0 ||
      searchData.accNoSearch.length !== 0 ||
      searchData.invoiceNoSearch.length !== 0 ||
      searchData.amountSearch.length !== 0 ||
      searchData.paymentStatusSearch !== null ||
      searchData.invoiceDateSearch !== null ||
      searchData.dueDateSearch !== null
    ) {
      setIsSortOrFilterApplied(true);
    } else {
      setIsSortOrFilterApplied(false);
    }
  
    const filteredPayableData = payablesData.filter((payable) => {

      const matchesCategory = searchData.categorySearch.length === 0 || 
        payable.category.toLowerCase().includes(searchData.categorySearch.toLowerCase());
    
      const matchesAccNo = searchData.accNoSearch.length === 0 || 
        payable.accountNo.toLowerCase().includes(searchData.accNoSearch.toLowerCase());
    
      const matchesInvoiceNo = searchData.invoiceNoSearch.length === 0 || 
        payable.invoiceNo.toLowerCase().includes(searchData.invoiceNoSearch.toLowerCase());
    
      const matchesAmount = searchData.amountSearch.length === 0 || 
        payable.amount.toString().includes(searchData.amountSearch);
    
      const matchesPaymentStatus = searchData.paymentStatusSearch.length === 0 ||
        payable.paymentStatus.toLowerCase() === searchData.paymentStatusSearch.toLowerCase();
    
      const today = new Date();
    
      const matchesTodaysInvoiceDate = searchData.invoiceDateSearch.length === 0 || 
        (searchData.invoiceDateSearch === "today" && 
        payable.invoiceDate.getDate() === today.getDate() &&
        payable.invoiceDate.getMonth() === today.getMonth() &&
        payable.invoiceDate.getFullYear() === today.getFullYear());
    
      const matchesThisMonthInvoiceDate = searchData.invoiceDateSearch.length === 0 || 
        (searchData.invoiceDateSearch === "thisMonth" && 
        payable.invoiceDate.getMonth() === today.getMonth() &&
        payable.invoiceDate.getFullYear() === today.getFullYear());
    
      const matchesThisYearInvoiceDate = searchData.invoiceDateSearch.length === 0 || 
        (searchData.invoiceDateSearch === "thisYear" && 
        payable.invoiceDate.getFullYear() === today.getFullYear());

        const matchesTodaysDueDate = searchData.dueDateSearch.length === 0 || 
        (searchData.dueDateSearch === "today" && 
        payable.dueDate.getDate() === today.getDate() &&
        payable.dueDate.getMonth() === today.getMonth() &&
        payable.dueDate.getFullYear() === today.getFullYear());
    
      const matchesThisMonthDueDate = searchData.dueDateSearch.length === 0 || 
        (searchData.dueDateSearch === "thisMonth" && 
        payable.dueDate.getMonth() === today.getMonth() &&
        payable.dueDate.getFullYear() === today.getFullYear());
    
      const matchesThisYearDueDate = searchData.dueDateSearch.length === 0 || 
        (searchData.dueDateSearch === "thisYear" && 
        payable.dueDate.getFullYear() === today.getFullYear());
    
      // Combine all conditions
      return matchesCategory && matchesAccNo && matchesInvoiceNo && matchesAmount && matchesPaymentStatus &&
             (matchesTodaysInvoiceDate || matchesThisMonthInvoiceDate || matchesThisYearInvoiceDate) && 
             (matchesTodaysDueDate || matchesThisMonthDueDate || matchesThisYearDueDate);
    });
    

    setPayableData(filteredPayableData);
  }, [searchData.categorySearch, searchData.accNoSearch, searchData.invoiceNoSearch,
    searchData.amountSearch, searchData.paymentStatusSearch, searchData.invoiceDateSearch, 
    searchData.dueDateSearch, searchData.payablesData]);
  

  return (
    <div className='flex flex-col justify-start items-start min-w-full gap-4'>
      <div className='breadcrum-container'>
        <Breadcrumb className='text-headerText text-base'
          items={[
            {
              title: <Link to={"/"}><IoMdHome className='text-xl'/></Link>,
            },
            {
              title: "Payables",
            },
          ]}
        />
      </div>
      <div className=' shadow-custom-medium rounded-md w-full flex flex-col '>
        <div className='flex items-center justify-between px-5 py-5'>
          <h1 className='text-2xl font-medium text-headerText'>Credits</h1>
          <button 
            className='bg-primaryBlue text-white rounded-md px-2 py-1.5'
            onClick={showModal}
          >
            + Add New
          </button>
        </div>

        <div className=' search-filter-container  flex items-center justify-end px-5'>
          <div className='flex items-center gap-4'>
            <Space direction="vertical">
              <Space wrap>
                {/* <Dropdown menu={filterMenu} placement="bottom" arrow className='border-none shadow-custom-light text-gray-500 w-28'>
                  <Button>{filterButtonContent ? filterButtonContent : "Filtr by "}<IoChevronDown className='text-sm'/></Button>
                </Dropdown> */}

                <Dropdown menu={sortMenu} placement="bottom" arrow className='border-none shadow-custom-light text-gray-500 w-28'>
                  <Button>
                    {sortButtonContent === "categoryDown" || sortButtonContent === "categoryUp" ? "Category " : "Sort by "}
                    {sortButtonContent === "categoryDown" ? <FaArrowDown/> : sortButtonContent === "categoryUp" ? <FaArrowUp/> : <IoChevronDown className='text-sm '/>}
                  </Button>
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

        <div className='w-full'>
            <div className=' w-full'>
              <div className='w-full '>
                <div className='table-header-container border-b border-b-gray-200 flex items-center px-3 py-3 md:py-5 font-medium text-left gap-2'>
                  <div className='rounded-md py-1 shadow-custom-light flex items-center gap-2 w-[15%] text-sm px-2 mx-1'>
                    <IoSearch className='text-sm text-gray-400'/>
                    <input 
                      className=' focus:outline-none w-full text-sm placeholder:text-xs' 
                      type='search' 
                      name='categorySearch' 
                      placeholder='Search Category'
                      value={searchData.categorySearch}
                      onChange={(event) => handleSearchDataChange(event)}
                    />
                  </div>
                  <div className='rounded-md py-1 shadow-custom-light flex items-center gap-2 w-[13%] text-sm px-2'>
                    <IoSearch className='text-sm text-gray-400'/>
                    <input 
                      className=' focus:outline-none w-full text-sm placeholder:text-xs'
                      type='search' 
                      name='accNoSearch' 
                      placeholder='Search Acc No.'
                      value={searchData.accNoSearch}
                      onChange={(event) => handleSearchDataChange(event)}
                    />
                  </div>
                  <div className='rounded-md py-1 shadow-custom-light flex items-center gap-2 w-[13%] text-sm px-2'>
                    <IoSearch className='text-sm text-gray-400'/>
                    <input 
                      className=' focus:outline-none w-full text-sm placeholder:text-xs'
                      type='search' 
                      name='invoiceNoSearch' 
                      placeholder='Search Invoice'
                      value={searchData.invoiceNoSearch}
                      onChange={(event) => handleSearchDataChange(event)}
                    />
                  </div>
                  <div className='rounded-md py-1 shadow-custom-light flex items-center gap-2 w-[13%] text-sm px-2'>
                    <IoSearch className='text-sm text-gray-400'/>
                    <select className='text-xs text-gray-400 py-0.5 focus:outline-none cursor-pointer' name='invoiceDateSearch' onChange={(event) => handleSearchDataChange(event)}>
                      <option className='' disabled selected>Select Date</option>
                      <option className='text-black' value="">All</option>
                      <option className='text-black' value="today">Today</option>
                      <option className='text-black' value="thisMonth">This month</option>
                      <option className='text-black' value="thisYear">This year</option>
                    </select>
                  </div>
                  <div className='rounded-md py-1 shadow-custom-light flex items-center gap-2 w-[13%] text-sm px-2'>
                    <IoSearch className='text-sm text-gray-400'/>
                    <input 
                      className=' focus:outline-none w-full text-sm placeholder:text-xs'
                      type='search' 
                      name='amountSearch' 
                      placeholder='Search Amount'
                      value={searchData.amountSearch}
                      onChange={(event) => handleSearchDataChange(event)}
                    />
                  </div>
                  <div className='rounded-md py-1 shadow-custom-light flex items-center gap-2 w-[13%] text-sm px-2'>
                    <IoSearch className='text-sm text-gray-400'/>
                    <select className='text-xs text-gray-400 py-0.5 focus:outline-none cursor-pointer' name='dueDateSearch' onChange={(event) => handleSearchDataChange(event)}>
                      <option className=''  disabled selected>Select Date</option>
                      <option className='text-black' value="">All</option>
                      <option className='text-black' value="today">Today</option>
                      <option className='text-black' value="thisMonth">This month</option>
                      <option className='text-black' value="thisYear">This year</option>
                    </select>
                  </div>
                  <div className='rounded-md py-1 shadow-custom-light flex items-center gap-2 w-[13%] text-sm px-2'>
                    <IoSearch className='text-sm text-gray-400'/>
                    <select className='text-xs text-gray-400 py-0.5 focus:outline-none cursor-pointer' name='paymentStatusSearch' onChange={(event) => handleSearchDataChange(event)}>
                      <option className='' disabled selected>Select Status</option>
                      <option className='text-black' value="">All</option>
                      <option className='text-black' value="pending">Pending</option>
                      <option className='text-black' value="in-progress">In-progress</option>
                      <option className='text-black' value="paid">Paid</option>
                    </select>
                    
                  </div>
                </div>
                <div className='table-header-container border-b border-b-gray-200 flex items-center px-5 py-3 md:py-5 font-medium text-left'>
                  <h2 className='w-[16%]'>Category</h2>
                  <h2 className='w-[14%]'>Account No</h2>
                  <h2 className='w-[14%]'>Invoice No</h2>
                  <h2 className='w-[14%]'>Invoice date</h2>
                  <h2 className='w-[14%]'>Amount</h2>
                  <h2 className='w-[14%]'>Due Date</h2>
                  <h2 className='w-[14%]'>Payment Status</h2>
                </div>
              </div>
              <div className='table-body-container w-full h-[53vh] overflow-y-scroll no-scrollbar'>
                {
                  payableData.length === 0 && 
                  <h1 className='w-full h-full flex justify-center items-center font-semibold text-xl text-gray-500'>No data found</h1>
                }
                {payableData.map((row, index) => (
                  <div
                    className='text-xs border-b border-b-gray-200 hover:bg-gray-300 cursor-pointer transition flex items-center px-5 py-3 md:py-5 text-left'
                    key={index}
                  >
                    <p className='w-[16%] '>{row.category}</p>
                    <p className='w-[14%] '>{row.accountNo}</p>
                    <p className='w-[14%] '>{row.invoiceNo}</p>
                    <p className='w-[14%] '>{formatDate(row.invoiceDate)}</p>
                    <p className='w-[14%] '>{row.amount}</p>
                    <p className='w-[14%] '>{formatDate(row.dueDate)}</p>
                    <p className='w-[14%] '>{row.paymentStatus}</p>
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

export default PayablesPageComponent
