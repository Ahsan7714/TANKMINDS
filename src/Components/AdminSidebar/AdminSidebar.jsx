import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { TbMessageReport } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import './AdminSidebar.css';






const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 bg-[#f8fafb] h-full overflow-y-auto w-[23%] content-scrollbar">
      <div className="flex items-center justify-center">
        <img src={""} alt="" className="h-[40px]" />
        <h1 className="py-5 font-bold text-[30px] text-black">TANKMINDS</h1>
      </div>
      <div className="flex flex-col  px-12 py-10  gap-10">
     
        <Link
          to="/clients"
          className={`
        ${
          location.pathname == "/clients"
            ? "bg-gradient-to-r from-[#003268] to-[#006ee8] text-white "
            : "text-[#000000a5] "
        }
        flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <GoPeople />
          <p>Clients</p>
        </Link>
        <Link
          to="/chat"
          className={`
        ${
          location.pathname == "/chat"
            ? "bg-gradient-to-r from-[#003268] to-[#006ee8] text-white "
            : "text-[#000000a5] "
        }
        flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <IoChatboxEllipsesOutline />
          <p>Inbox</p>
        </Link>
        <Link
          to="/dashboard"
          className={`
        ${
          location.pathname == "/dashboard"
            ? "bg-gradient-to-r from-[#003268] to-[#006ee8] text-white "
            : "text-[#000000a5] "
        }
        flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <HiOutlineBellAlert />
          <p>Consultation </p>
        </Link>
        <Link
          to="/tax-filer"
          className={`
        ${
          location.pathname == "/tax-filer"
            ? "bg-gradient-to-r from-[#003268] to-[#006ee8] text-white "
            : "text-[#000000a5] "
        }
        flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <HiOutlineBellAlert />
          <p>Tax Filer Alert</p>
        </Link>
        <Link
          to="/complaint"
          className={`
        ${
          location.pathname == "/complaint"
            ? "bg-gradient-to-r from-[#003268] to-[#006ee8] text-white "
            : "text-[#000000a5] "
        }
        flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <TbMessageReport />
          <p>Complaint</p>
        </Link>
        <Link
          to="/offices"
          className={`
        ${
          location.pathname == "/offices"
            ? "bg-gradient-to-r from-[#003268] to-[#006ee8] text-white "
            : "text-[#000000a5] "
        }
        flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <HiOutlineOfficeBuilding />
          <p>Offices</p>
        </Link>
        <Link
          to="/team"
          className={`
        ${
          location.pathname == "/team"
            ? "bg-gradient-to-r from-[#003268] to-[#006ee8] text-white "
            : "text-[#000000a5] "
        }
        flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <RiTeamLine />
          <p>Team</p>
        </Link>
        
        <Link
          className={`
        ${
          location.pathname == "/manage-employees"
            ? "bg-gradient-to-r from-[#003268] to-[#006ee8] text-white "
            : "text-[#000000a5] "
        }
        flex gap-2 items-center text-[20px] h-10 px-4 rounded-md`}
        >
          <BiLogOutCircle />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
