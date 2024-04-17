import React from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { FaSearch } from "react-icons/fa";
import img from "../../../images/user.jpeg";

const Inbox = () => {
  return (
    <div className="flex gap-2">
      <AdminSidebar />
      <div className="ml-[26%] w-[80%] pt-10 flex flex-col gap-10">
        <div className=" bg-white shadow-lg w-[980px]   rounded-lg px-5 py-5 flex gap-5">
          <div className="flex w-[950px]">
            <div className="w-[25%] ">
              <h1 className="text-center text-[25px]">Clients</h1>
              <div className="flex flex-col h-[80vh] gap-2 pt-8 overflow-y-auto">
                <div className="flex  gap-2 items-center overflow-hidden cursor-pointer hover:bg-[#e5e7eb] rounded-md p-2">
                <img
                  className="w-[38px] h-[38px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full"
                  src={img}
                  alt=""
                />
                <h1 className="text-[17px]">John Snow John </h1>
                </div>
                <div className="flex  gap-2 items-center overflow-hidden cursor-pointer hover:bg-[#e5e7eb] rounded-md p-2">
                <img
                  className="w-[38px] h-[38px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full"
                  src={img}
                  alt=""
                />
                <h1 className="text-[17px]">John Snow John </h1>
                </div>
                <div className="flex  gap-2 items-center overflow-hidden cursor-pointer hover:bg-[#e5e7eb] rounded-md p-2">
                <img
                  className="w-[38px] h-[38px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full"
                  src={img}
                  alt=""
                />
                <h1 className="text-[17px]">John Snow John </h1>
                </div>
              
                
                
                
              </div>
            </div>
            <div className="w-[900px]  px-4 py-2 rounded-md ">
              <div className="flex w-full h-full relative">
                <div className="w-full  md:pl-4">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-3">
                      <div className="relative">
                        <img
                          className="w-[40px] h-[40px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full"
                          src={img}
                          alt=""
                        />
                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                      </div>
                      <span className="text-[18px]">John Snow</span>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="bg-[#e5e7eb] h-[63vh] w-full rounded-md p-3 overflow-y-auto">
                      <div className="w-full flex justify-start items-center">
                        <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                          <div>
                            <img
                              className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]"
                              src={img}
                              alt=""
                            />
                          </div>
                          <div className="flex justify-center items-start flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white py-1 px-2 rounded-sm">
                            <span>How are you</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-end items-center">
                        <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                          <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                            <span>I am good</span>
                          </div>
                          <div>
                            <img
                              className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]"
                              src={img}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className="flex gap-3">
                    <input
                      
                      className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#97989a]"
                      type="text"
                      placeholder="input your message"
                    />
                    <button className="shadow-lg bg-cyan-500 hover:shadow-cyan-500/50 text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
