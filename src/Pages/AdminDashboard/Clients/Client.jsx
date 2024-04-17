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
import img from "../../../images/user.jpeg";
import { IoIosSend } from "react-icons/io";

const rows = [
  {
    id: 1,
    image: img,
    location: "John Doe",
    city: "XYZ Bank",
  },
  {
    id: 2,
    image: img,
    location: "John Doe",
    city: "XYZ Bank",
  },
  {
    id: 3,
    image: img,
    location: "John Doe",
    city: "XYZ Bank",
  },
  {
    id: 1,
    image: img,
    location: "John Doe",
    city: "XYZ Bank",
  },
  {
    id: 2,
    image: img,
    location: "John Doe",
    city: "XYZ Bank",
  },
  {
    id: 3,
    image: img,
    location: "John Doe",
    city: "XYZ Bank",
  },

  // Add more dummy data rows as needed
];
const Client = () => {
  const [formData, setFormData] = useState({
    name: "",
    education: "",
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

  return (
    <div className="flex gap-2">
      <AdminSidebar />
      <div className="ml-[35%] w-[70%] py-10 flex flex-col gap-10">
        <div>
          <h1 className="ml-[30%] text-[35px] py-4">Clients</h1>
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
                      Picture
                    </TableCell>
                    <TableCell
                      align="center"
                      className="text-white text-[45px]"
                    >
                      Name
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
                      Send Alert
                    </TableCell>
                    <TableCell
                      align="center"
                      className="text-white text-[45px]"
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Mapping rows to create table rows */}
                  {rows.map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">
                        <h1>
                          {" "}
                          <img
                            src={row.image}
                            alt=""
                            className="h-[30px] w-[30px] rounded-full"
                          />
                        </h1>
                      </TableCell>
                      <TableCell align="center">{row.location}</TableCell>
                      <TableCell align="center">{row.city}</TableCell>
                      <TableCell align="center">
                        <div>
                          <button className="px-2 py-1 rounded-md text-[12px] bg-[#003268] text-white flex items-center gap-1">
                            send
                            <IoIosSend />
                          </button>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <button className=" bg-green-500 text-white text-[17px] p-1 rounded-md mr-2">
                          <IoEyeOutline />
                        </button>
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
      </div>
    </div>
  );
};

export default Client;
