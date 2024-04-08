import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarA.css'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLowVision } from "react-icons/fa";
import logo from './../../images/WEB-3-removebg-preview.png'
import feedbackIcon from './../../images/feedbackIcon.svg'
import { useAuthPopUp } from '../../context/authPopUpContext';

const NavbarA = () => {
  const { setShowModal,showModal, type, onClose, onOpen,setType } = useAuthPopUp();

  const handleShowPopUp = () => {
    setType('signIn');
    setShowModal(true);
  }

  return (
    <>
      <div className='nav_1'>
        <div className='list'>
          <ul>
            <li><Link to="">Client Portal</Link></li>
            <li><Link to="">Offices</Link></li>
            <li><Link to="">Team</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="">Law Books</Link></li>
            <li><Link to="">Career</Link></li>
            <li><Link to="">App Download</Link></li>
            <li><Link to="">Events</Link></li>
          </ul>
        </div>
        <div className='btn_nav_1'>
          <button>Contact Us</button>
        </div>
      </div>

      {/* second navbar */}

      <div className='nav_b'>

        <div className='left'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='phone_no'>
            <h3><MdOutlinePhoneInTalk /><span>+92-334-4164441</span></h3>
          </div>
          <div className='none'>
            l
          </div>
        </div>
{/*---------------------- middle-------------------- */}
        <div className="middle">
          <input type="text" placeholder='What are you looking for?' />
        </div>
{/*---------------------- right-------------------- */}

        <div className="right">
          <ul>
            <li><Link to="">Complaint</Link></li>
            {/* Sign In and Sign Up wrapped in a single Link */}
            <li onClick={()=>handleShowPopUp()}>
              <Link to="">
              <span>Sign In&nbsp;</span>&&nbsp;<span>Sign Up</span>
              </Link>
            </li>
            <li><Link to="">Vision</Link></li>
            <li><Link to=""><img src={feedbackIcon} alt="" className="feedbackIcon" />Feedback</Link></li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default NavbarA
