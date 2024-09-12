const payables = [
    {
      category: "Office Supplies",
      accountNo: "ACC-001",
      invoiceNo: "INV-1001",
      invoiceDate: new Date("2024-09-12"),
      amount: 1500.00,
      dueDate: new Date("2024-08-11"),
      paymentStatus: "Pending"
    },
    {
      category: "Electronics",
      accountNo: "ACC-002",
      invoiceNo: "INV-1002",
      invoiceDate: new Date("2024-09-13"),
      amount: 3200.50,
      dueDate: new Date("2024-09-13"),
      paymentStatus: "Paid"
    },
    {
      category: "Furniture",
      accountNo: "ACC-003",
      invoiceNo: "INV-1003",
      invoiceDate: new Date("2024-08-03"),
      amount: 4100.00,
      dueDate: new Date("2024-08-13"),
      paymentStatus: "Pending"
    },
    {
      category: "Software",
      accountNo: "ACC-004",
      invoiceNo: "INV-1004",
      invoiceDate: new Date("2024-08-04"),
      amount: 8700.25,
      dueDate: new Date("2024-08-14"),
      paymentStatus: "Paid"
    },
    {
      category: "Office Supplies",
      accountNo: "ACC-005",
      invoiceNo: "INV-1005",
      invoiceDate: new Date("2024-08-05"),
      amount: 1400.00,
      dueDate: new Date("2024-08-15"),
      paymentStatus: "Pending"
    },
    {
      category: "Electronics",
      accountNo: "ACC-006",
      invoiceNo: "INV-1006",
      invoiceDate: new Date("2024-08-06"),
      amount: 6000.50,
      dueDate: new Date("2024-08-16"),
      paymentStatus: "Paid"
    },
    {
      category: "Furniture",
      accountNo: "ACC-007",
      invoiceNo: "INV-1007",
      invoiceDate: new Date("2024-08-07"),
      amount: 7500.00,
      dueDate: new Date("2024-08-17"),
      paymentStatus: "Pending"
    },
    {
      category: "Software",
      accountNo: "ACC-008",
      invoiceNo: "INV-1008",
      invoiceDate: new Date("2024-08-08"),
      amount: 18000.00,
      dueDate: new Date("2024-08-18"),
      paymentStatus: "Paid"
    },
    {
      category: "Office Supplies",
      accountNo: "ACC-009",
      invoiceNo: "INV-1009",
      invoiceDate: new Date("2024-08-09"),
      amount: 2500.00,
      dueDate: new Date("2024-08-19"),
      paymentStatus: "Pending"
    },
    {
      category: "Electronics",
      accountNo: "ACC-010",
      invoiceNo: "INV-1010",
      invoiceDate: new Date("2024-08-10"),
      amount: 9400.25,
      dueDate: new Date("2024-08-20"),
      paymentStatus: "Paid"
    },
    {
      category: "Furniture",
      accountNo: "ACC-011",
      invoiceNo: "INV-1011",
      invoiceDate: new Date("2024-08-11"),
      amount: 3600.00,
      dueDate: new Date("2024-08-21"),
      paymentStatus: "Pending"
    },
    {
      category: "Software",
      accountNo: "ACC-012",
      invoiceNo: "INV-1012",
      invoiceDate: new Date("2024-08-12"),
      amount: 9200.50,
      dueDate: new Date("2024-08-22"),
      paymentStatus: "Paid"
    },
    {
      category: "Office Supplies",
      accountNo: "ACC-013",
      invoiceNo: "INV-1013",
      invoiceDate: new Date("2024-08-13"),
      amount: 2700.00,
      dueDate: new Date("2024-08-23"),
      paymentStatus: "Pending"
    },
    {
      category: "Electronics",
      accountNo: "ACC-014",
      invoiceNo: "INV-1014",
      invoiceDate: new Date("2024-08-14"),
      amount: 5800.50,
      dueDate: new Date("2024-08-24"),
      paymentStatus: "Paid"
    },
    {
      category: "Furniture",
      accountNo: "ACC-015",
      invoiceNo: "INV-1015",
      invoiceDate: new Date("2024-08-15"),
      amount: 8000.00,
      dueDate: new Date("2024-08-25"),
      paymentStatus: "Pending"
    },
    {
      category: "Software",
      accountNo: "ACC-016",
      invoiceNo: "INV-1016",
      invoiceDate: new Date("2024-08-16"),
      amount: 13500.25,
      dueDate: new Date("2024-08-26"),
      paymentStatus: "Paid"
    },
    {
      category: "Office Supplies",
      accountNo: "ACC-017",
      invoiceNo: "INV-1017",
      invoiceDate: new Date("2024-08-17"),
      amount: 1900.00,
      dueDate: new Date("2024-08-27"),
      paymentStatus: "Pending"
    },
    {
      category: "Electronics",
      accountNo: "ACC-018",
      invoiceNo: "INV-1018",
      invoiceDate: new Date("2024-08-18"),
      amount: 6900.50,
      dueDate: new Date("2024-08-28"),
      paymentStatus: "Paid"
    },
    {
      category: "Furniture",
      accountNo: "ACC-019",
      invoiceNo: "INV-1019",
      invoiceDate: new Date("2024-08-19"),
      amount: 4600.00,
      dueDate: new Date("2024-08-29"),
      paymentStatus: "Pending"
    },
    {
      category: "Software",
      accountNo: "ACC-020",
      invoiceNo: "INV-1020",
      invoiceDate: new Date("2024-08-20"),
      amount: 11000.00,
      dueDate: new Date("2024-08-30"),
      paymentStatus: "Paid"
    },
    {
      category: "Office Supplies",
      accountNo: "ACC-021",
      invoiceNo: "INV-1021",
      invoiceDate: new Date("2024-08-21"),
      amount: 3000.00,
      dueDate: new Date("2024-09-01"),
      paymentStatus: "Pending"
    },
    {
      category: "Electronics",
      accountNo: "ACC-022",
      invoiceNo: "INV-1022",
      invoiceDate: new Date("2024-08-22"),
      amount: 8200.50,
      dueDate: new Date("2024-09-02"),
      paymentStatus: "Paid"
    },
    {
      category: "Furniture",
      accountNo: "ACC-023",
      invoiceNo: "INV-1023",
      invoiceDate: new Date("2024-08-23"),
      amount: 5800.00,
      dueDate: new Date("2024-09-03"),
      paymentStatus: "Pending"
    },
    {
      category: "Software",
      accountNo: "ACC-024",
      invoiceNo: "INV-1024",
      invoiceDate: new Date("2024-08-24"),
      amount: 9000.25,
      dueDate: new Date("2024-09-04"),
      paymentStatus: "Paid"
    },
    {
      category: "Office Supplies",
      accountNo: "ACC-025",
      invoiceNo: "INV-1025",
      invoiceDate: new Date("2024-08-25"),
      amount: 3500.00,
      dueDate: new Date("2024-09-05"),
      paymentStatus: "Pending"
    },
    {
      category: "Electronics",
      accountNo: "ACC-026",
      invoiceNo: "INV-1026",
      invoiceDate: new Date("2024-08-26"),
      amount: 7400.50,
      dueDate: new Date("2024-09-06"),
      paymentStatus: "Paid"
    },
    {
      category: "Furniture",
      accountNo: "ACC-027",
      invoiceNo: "INV-1027",
      invoiceDate: new Date("2024-08-27"),
      amount: 4800.00,
      dueDate: new Date("2024-09-07"),
      paymentStatus: "Pending"
    },
    {
      category: "Software",
      accountNo: "ACC-028",
      invoiceNo: "INV-1028",
      invoiceDate: new Date("2024-08-28"),
      amount: 12000.00,
      dueDate: new Date("2024-09-08"),
      paymentStatus: "Paid"
    },
    {
      category: "Office Supplies",
      accountNo: "ACC-029",
      invoiceNo: "INV-1029",
      invoiceDate: new Date("2024-08-29"),
      amount: 2600.00,
      dueDate: new Date("2024-09-09"),
      paymentStatus: "Pending"
    },
    {
      category: "Electronics",
      accountNo: "ACC-030",
      invoiceNo: "INV-1030",
      invoiceDate: new Date("2024-08-30"),
      amount: 8500.50,
      dueDate: new Date("2024-09-10"),
      paymentStatus: "Paid"
    }
  ];
  

export default payables