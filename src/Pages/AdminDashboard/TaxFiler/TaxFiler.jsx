import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import './ConsultationAlert.css';


// Dummy data rows in object form
const rows = [
  {
    id: 1,
    name: "John Doe",
    bank: "XYZ Bank",
    accountNo: "123456789",
    phone: "9876543210",
    status: "fee not paid",
    caseClose: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    bank: "ABC Bank",
    accountNo: "987654321",
    phone: "1234567890",
    status: "consultation given",
    caseClose: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    bank: "PQR Bank",
    accountNo: "567890123",
    phone: "4567890123",
    status: "consultation given",

    caseClose: true,
  },
  {
    id: 3,
    name: "Alice Johnson",
    bank: "PQR Bank",
    accountNo: "567890123",
    phone: "4567890123",
    status: "consultation given",

    caseClose: true,
  },{
    id: 3,
    name: "Alice Johnson",
    bank: "PQR Bank",
    accountNo: "567890123",
    phone: "4567890123",
    status: "fee not paid",
    caseClose: true,
  },{
    id: 3,
    name: "Alice Johnson",
    bank: "PQR Bank",
    accountNo: "567890123",
    phone: "4567890123",
    status: "fee not paid",
    caseClose: true,
  },
 
  // Add more dummy data rows as needed
];

const TaxFiler = () => {
  const [statusMap, setStatusMap] = useState("Select Status");

  const handleStatusChange = (e, id) => {
    setStatusMap((prevStatusMap) => ({
      ...prevStatusMap,
      [id]: e.target.value,
    }));
  };

  return (
    <div className="flex gap-2">
      <AdminSidebar />
      <div className="ml-[27%] w-[70%] py-10 flex flex-col gap-10">
        <div>
          <h1 className="text-center text-[30px] pb-4">Tax Filer Alerts</h1>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              className="bg-gray-100"
            >
              <TableHead>
                <TableRow className="bg-[#0157b3] text-white text-3xl !important">
                  <TableCell align="center" className="text-white text-[475px] !important">
                    S.No
                  </TableCell>
                  <TableCell align="center" className="text-white text-[45px]">
                    Name
                  </TableCell>
                  <TableCell align="center" className="text-white text-[45px]">
                    Bank
                  </TableCell>
                  <TableCell align="center" className="text-white text-[95px]">
                    Account No#
                  </TableCell>
                  <TableCell align="center" className="text-white text-[45px]">
                    Phone
                  </TableCell>
                  <TableCell align="center" className="text-white text-[45px] z-10">
                    Status
                  </TableCell>
                  <TableCell align="center" className="text-white text-[45px]">
                    Case Close
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mapping rows to create table rows */}
                {rows.map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.bank}</TableCell>
                    <TableCell align="center">{row.accountNo}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">
                      <Select
                        value={statusMap[row.id] || row.status}
                        onChange={(e) => handleStatusChange(e, row.id)}
                        className="text-black h-[22px] w-[155px] text-[10px] border-none "
                      >
                        <MenuItem value="Active" className=" text-[10px]">Become Filer</MenuItem>
                        <MenuItem value="Inactive">Fee not Paid</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <button className="bg-green-600 text-white p-1 px-3 rounded-md">
                        Submit
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        </div>
        <div>
          <h1 className="text-center text-[30px] py-4">Submitted Cases</h1>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              className="bg-gray-100"
            >
              <TableHead>
                <TableRow className="bg-[#0157b3] text-white text-3xl !important">
                  <TableCell align="center" className="text-white text-[475px] !important">
                    S.No
                  </TableCell>
                  <TableCell align="center" className="text-white text-[45px]">
                    Name
                  </TableCell>
                  <TableCell align="center" className="text-white text-[45px]">
                    Bank
                  </TableCell>
                  <TableCell align="center" className="text-white text-[95px]">
                    Account No#
                  </TableCell>
                  <TableCell align="center" className="text-white text-[45px]">
                    Phone
                  </TableCell>
                  <TableCell align="center" className="text-white text-[45px] z-10">
                    Status
                  </TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mapping rows to create table rows */}
                {rows.map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.bank}</TableCell>
                    <TableCell align="center">{row.accountNo}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell >
                     <p className=' text-center'>{row.status}</p>
                    </TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        </div>
      </div>
    </div>
  );
};

export default TaxFiler;
