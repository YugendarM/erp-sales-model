const receivables = [
    {
        customerName: "Charan",
        accountNo: "ACC-031",
        invoiceNo: "INV-1031",
        invoiceDate: new Date("2024-09-01"),
        amount: 1600.00,
        dueDate: new Date("2024-09-12"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Ravi",
        accountNo: "ACC-032",
        invoiceNo: "INV-1032",
        invoiceDate: new Date("2024-09-02"),
        amount: 3400.00,
        dueDate: new Date("2024-09-13"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Amit",
        accountNo: "ACC-033",
        invoiceNo: "INV-1033",
        invoiceDate: new Date("2024-09-03"),
        amount: 4200.00,
        dueDate: new Date("2024-09-14"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Priya",
        accountNo: "ACC-034",
        invoiceNo: "INV-1034",
        invoiceDate: new Date("2024-09-04"),
        amount: 8800.00,
        dueDate: new Date("2024-09-15"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Neha",
        accountNo: "ACC-035",
        invoiceNo: "INV-1035",
        invoiceDate: new Date("2024-09-05"),
        amount: 1500.00,
        dueDate: new Date("2024-09-16"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Raj",
        accountNo: "ACC-036",
        invoiceNo: "INV-1036",
        invoiceDate: new Date("2024-09-06"),
        amount: 6200.00,
        dueDate: new Date("2024-09-17"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Anita",
        accountNo: "ACC-037",
        invoiceNo: "INV-1037",
        invoiceDate: new Date("2024-09-07"),
        amount: 7600.00,
        dueDate: new Date("2024-09-18"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Sanjay",
        accountNo: "ACC-038",
        invoiceNo: "INV-1038",
        invoiceDate: new Date("2024-09-08"),
        amount: 18500.00,
        dueDate: new Date("2024-09-19"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Sita",
        accountNo: "ACC-039",
        invoiceNo: "INV-1039",
        invoiceDate: new Date("2024-09-09"),
        amount: 2700.00,
        dueDate: new Date("2024-09-20"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Manish",
        accountNo: "ACC-040",
        invoiceNo: "INV-1040",
        invoiceDate: new Date("2024-09-10"),
        amount: 9500.00,
        dueDate: new Date("2024-09-21"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Kiran",
        accountNo: "ACC-041",
        invoiceNo: "INV-1041",
        invoiceDate: new Date("2024-09-11"),
        amount: 3600.00,
        dueDate: new Date("2024-09-22"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Ravi",
        accountNo: "ACC-042",
        invoiceNo: "INV-1042",
        invoiceDate: new Date("2024-09-12"),
        amount: 4200.00,
        dueDate: new Date("2024-09-23"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Geeta",
        accountNo: "ACC-043",
        invoiceNo: "INV-1043",
        invoiceDate: new Date("2024-09-13"),
        amount: 3000.00,
        dueDate: new Date("2024-09-24"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Kiran",
        accountNo: "ACC-044",
        invoiceNo: "INV-1044",
        invoiceDate: new Date("2024-09-14"),
        amount: 7800.00,
        dueDate: new Date("2024-09-25"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Rita",
        accountNo: "ACC-045",
        invoiceNo: "INV-1045",
        invoiceDate: new Date("2024-09-15"),
        amount: 4300.00,
        dueDate: new Date("2024-09-26"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Amit",
        accountNo: "ACC-046",
        invoiceNo: "INV-1046",
        invoiceDate: new Date("2024-09-16"),
        amount: 5600.00,
        dueDate: new Date("2024-09-27"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Sita",
        accountNo: "ACC-047",
        invoiceNo: "INV-1047",
        invoiceDate: new Date("2024-09-17"),
        amount: 2900.00,
        dueDate: new Date("2024-09-28"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Raj",
        accountNo: "ACC-048",
        invoiceNo: "INV-1048",
        invoiceDate: new Date("2024-09-18"),
        amount: 7100.00,
        dueDate: new Date("2024-09-29"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Priya",
        accountNo: "ACC-049",
        invoiceNo: "INV-1049",
        invoiceDate: new Date("2024-09-19"),
        amount: 3400.00,
        dueDate: new Date("2024-09-30"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Neha",
        accountNo: "ACC-050",
        invoiceNo: "INV-1050",
        invoiceDate: new Date("2024-09-20"),
        amount: 6700.00,
        dueDate: new Date("2024-10-01"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Manish",
        accountNo: "ACC-051",
        invoiceNo: "INV-1051",
        invoiceDate: new Date("2024-09-21"),
        amount: 4800.00,
        dueDate: new Date("2024-10-02"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Anita",
        accountNo: "ACC-052",
        invoiceNo: "INV-1052",
        invoiceDate: new Date("2024-09-22"),
        amount: 8200.00,
        dueDate: new Date("2024-10-03"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Sanjay",
        accountNo: "ACC-053",
        invoiceNo: "INV-1053",
        invoiceDate: new Date("2024-09-23"),
        amount: 3300.00,
        dueDate: new Date("2024-10-04"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Ravi",
        accountNo: "ACC-054",
        invoiceNo: "INV-1054",
        invoiceDate: new Date("2024-09-24"),
        amount: 7200.00,
        dueDate: new Date("2024-10-05"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Geeta",
        accountNo: "ACC-055",
        invoiceNo: "INV-1055",
        invoiceDate: new Date("2024-09-25"),
        amount: 3500.00,
        dueDate: new Date("2024-10-06"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Charan",
        accountNo: "ACC-056",
        invoiceNo: "INV-1056",
        invoiceDate: new Date("2024-09-26"),
        amount: 7800.00,
        dueDate: new Date("2024-10-07"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Amit",
        accountNo: "ACC-057",
        invoiceNo: "INV-1057",
        invoiceDate: new Date("2024-09-27"),
        amount: 2900.00,
        dueDate: new Date("2024-10-08"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Sita",
        accountNo: "ACC-058",
        invoiceNo: "INV-1058",
        invoiceDate: new Date("2024-09-28"),
        amount: 5800.00,
        dueDate: new Date("2024-10-09"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Raj",
        accountNo: "ACC-059",
        invoiceNo: "INV-1059",
        invoiceDate: new Date("2024-09-29"),
        amount: 2400.00,
        dueDate: new Date("2024-10-10"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Neha",
        accountNo: "ACC-060",
        invoiceNo: "INV-1060",
        invoiceDate: new Date("2024-09-30"),
        amount: 6200.00,
        dueDate: new Date("2024-10-11"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Manish",
        accountNo: "ACC-061",
        invoiceNo: "INV-1061",
        invoiceDate: new Date("2024-10-01"),
        amount: 7100.00,
        dueDate: new Date("2024-10-12"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Anita",
        accountNo: "ACC-062",
        invoiceNo: "INV-1062",
        invoiceDate: new Date("2024-10-02"),
        amount: 4300.00,
        dueDate: new Date("2024-10-13"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Sanjay",
        accountNo: "ACC-063",
        invoiceNo: "INV-1063",
        invoiceDate: new Date("2024-10-03"),
        amount: 3300.00,
        dueDate: new Date("2024-10-14"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Ravi",
        accountNo: "ACC-064",
        invoiceNo: "INV-1064",
        invoiceDate: new Date("2024-10-04"),
        amount: 5700.00,
        dueDate: new Date("2024-10-15"),
        paymentStatus: "Paid"
    },
    {
        customerName: "Geeta",
        accountNo: "ACC-065",
        invoiceNo: "INV-1065",
        invoiceDate: new Date("2024-10-05"),
        amount: 2900.00,
        dueDate: new Date("2024-10-16"),
        paymentStatus: "Pending"
    },
    {
        customerName: "Charan",
        accountNo: "ACC-066",
        invoiceNo: "INV-1066",
        invoiceDate: new Date("2024-10-06"),
        amount: 4800.00,
        dueDate: new Date("2024-10-17"),
        paymentStatus: "Paid"
    }
];


export default receivables