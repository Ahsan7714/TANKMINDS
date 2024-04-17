import React from "react";
import "./ClientPortal.css";
import clientProfile from "./../../../public/images/clientProfile.png";
import notification from "./../../../public/images/notification.svg";
import clientPng from "./../../../public/images/clientPng.png";
import clientImg2 from "./../../../public/images/clientImg2.png";
import { LuEye } from "react-icons/lu";
import { BiDownload } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


const ClientPortal = () => {
  return (
    <>
      <div className="client-navbar">
        <h1>Client Portal</h1>
      </div>
      <section className="hero">
        <div className="client-profile">
          <div className="client-img">
            <img src={clientProfile} alt="" />
          </div>
          <div className="clientDetail">
            <p>Olive Jack</p>
            <span>+92-456-0209842</span>
          </div>
        </div>

        <div className="case-alert">
          <div className="alert-heading">
            <img src={notification} alt="" />
            <h3>Case Alert</h3>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Case Alerts</button>
            <div class="dropdown-content">
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
              <a href="#">Your deadline is tomorrow</a>
            </div>
          </div>
        </div>
      </section>
      <section className="chatbot">
        <div className="chat">
          <h1>chat</h1>
          <div className="liveChat">
            <div className="flex justify-between">
              <div className="messageContainer1">
                <img src={clientPng} alt="" />
                <div className="message1">
                  <h3>Client</h3>
                  <p>Hello!</p>
                </div>
              </div>

              <div className="messageContainer2">
                <div className="message2">
                  <h3>Person</h3>
                  <p>Hy Sir!</p>
                </div>
                <img src={clientImg2} alt="" />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="messageContainer1">
                <img src={clientPng} alt="" />
                <div className="message1">
                  <h3>Client</h3>
                  <p>Hello!</p>
                </div>
              </div>

              <div className="messageContainer2">
                <div className="message2">
                  <h3>Person</h3>
                  <p>Hy Sir!</p>
                </div>
                <img src={clientImg2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="documentsDetails">
          <div className="documents">
            <div className="doc-h">
              <h1>My Documents</h1>
            </div>
            <div className="flex gap-10 shadow-lg py-5 rounded-md">
            <div className="flex flex-col gap-1  pl-2">
            <div className="documents-a">
              <div className="documents-a1">
              <CgProfile />
                <p>Client.Pdf</p>
              </div>
              <div className="documents-a2">
                <LuEye />
                <BiDownload />
                <MdDeleteOutline />
              </div>
            </div>
            <div className="documents-a">
              <div className="documents-a1">
              <CgProfile />
                <p>Client.Pdf</p>
              </div>
              <div className="documents-a2">
                <LuEye />
                <BiDownload />
                <MdDeleteOutline />
              </div>
            </div>
            </div>
           
            <div className="documents-b">
              <div>
                <MdOutlineDriveFolderUpload />
              </div>
              <div className="document-b-p">
                <p>Upload Documents</p>
                </div>
            </div>
            </div>
            
          </div>
          <div>2</div>
        </div>
      </section>
    </>
  );
};

export default ClientPortal;
