import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@material-tailwind/react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import './ConsultationAlert.css';

// Dummy data rows in object form
const rows = [
  {
    id: 1,
    location: "John Doe",
    city: "XYZ Bank",
  },
  {
    id: 2,
    location: "John Doe",
    city: "XYZ Bank",
  },
  {
    id: 3,
    location: "John Doe",
    city: "XYZ Bank",
  },

  // Add more dummy data rows as needed
];
const Offices = () => {
  const [formData, setFormData] = useState({
    location: "",
    city: "",
    province: "",
    country: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(false);

  function handleChange(e) {
    if (e.target.name === "image") {
      setImagePreview(true);
      setFormData({
        ...formData,
        image: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // Perform form submission logic here
  }
  return (
    <div className="flex gap-2">
      <AdminSidebar />
      <div className="ml-[35%] w-[70%] py-10 flex flex-col gap-10">
        <div>
          <h1 className="ml-[30%] text-[35px] py-4">Offices</h1>
          <Paper sx={{ width: "80%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table
                stickyHeader
                aria-label="sticky table"
                className="bg-gray-100"
              >
                <TableHead>
                  <TableRow className="bg-[#0157b3] text-white text-3xl !important items-center">
                    <TableCell
                      align="center"
                      className="text-white text-[475px] !important"
                    >
                      S.No
                    </TableCell>
                    <TableCell
                      align="center"
                      className="text-white text-[45px]"
                    >
                      Location
                    </TableCell>
                    <TableCell
                      align="center"
                      className="text-white text-[45px]"
                    >
                      City
                    </TableCell>
                    <TableCell
                      align="center"
                      className="text-white text-[95px]"
                    >
                      View
                    </TableCell>
                    <TableCell
                      align="center"
                      className="text-white text-[45px]"
                    >
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Mapping rows to create table rows */}
                  {rows.map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.location}</TableCell>
                      <TableCell align="center">{row.city}</TableCell>
                      <TableCell align="center">
                        <button className=" bg-green-500 text-white text-[17px] p-1 rounded-md">
                          <IoEyeOutline />
                        </button>
                      </TableCell>
                      <TableCell align="center">
                        <button className=" bg-red-500 text-white text-[17px] p-1 rounded-md">
                          <AiOutlineDelete />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
        <div className=" bg-[#f3f4f6] shadow-lg rounded-lg  w-[80%]">
          <h1 className=" text-center text-[28px] pt-6">Add New Office</h1>
          <form action="" onSubmit={handleSubmit} className="flex flex-col gap-10 p-10">
            <div className="flex justify-between">
              <div class="w-72">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                    class="peer w-full h-full bg-gray-200 text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Location Name
                  </label>
                </div>
              </div>
              <div class="w-72">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                    class="peer w-full h-full bg-gray-200 text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    City
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div class="w-72">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                    class="peer w-full h-full bg-gray-200 text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Province
                  </label>
                </div>
              </div>
              <div class="w-72">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                    class="peer w-full h-full bg-gray-200 text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Country
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
              <div className="flex  gap-3">
                <div className="flex flex-col">
                <label htmlFor="" className="text-[#000000e4] text-[18px] mt-5">
                   Office Picture
                 </label>
                 <div className="relative">
                   <h1 className="cursor-pointer bg-white shadow-xl h-[42px] text-center px-3 pt-2 rounded-lg text-[15px]">
                     Choose Picture
                   </h1>
                   <input
                    type="file"
                    name="image"
                    className="absolute left-0 top-0 outline-none border text-[1px] text-white rounded-md w-[150px] py-3 placeholder:text-[#000000b8] opacity-0 cursor-pointer"
                    onChange={handleChange}
                  />
                </div>
                </div>
                
                {imagePreview && (
                 <img
                 src={formData.image} 
                 alt="Series Preview"
                 className=" w-[150px] h-[100px] object-cover rounded-md"
               /> 
               )} 
                  
               
              </div>
              </div>
             <div><button className="h-[50px] w-[130px] rounded-lg bg-[#003268] text-white">Add office</button></div>

            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Offices;
