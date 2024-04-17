import React from 'react'
import './ClientPortal.css'
import clientProfile from './../../../public/images/clientProfile.png'
import notification from './../../../public/images/notification.svg'
import clientPng from './../../../public/images/clientPng.png'
import clientImg2 from './../../../public/images/clientImg2.png'

const ClientPortal = () => {
  return (
    <>
        <div className='client-navbar'>
            <h1>Client Portal</h1>
        </div>
        <section className='hero'>
            <div className='client-profile'>
                <div className='client-img'>
                <img src={clientProfile} alt="" />
                </div>
                <div className='clientDetail'>
                  <p>Olive Jack</p>
                  <span>+92-456-0209842</span>
                </div>
            </div>
            
            <div className='case-alert'>
                <div className='alert-heading'>
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
        <section className='chatbot'>
           <div className='chat'>
            <h1>chat</h1>
            <div className='liveChat'>
              <div className='messageContainer1'>
              <img src={clientPng} alt="" />
              <div className='message1'>
                <h3>Client</h3>
                <p>Hello!</p>
              </div>
              </div>
               <div className='messageContainer2'>
              
              <div className='message2'>
                <h3>Person</h3>
                <p>Hy Sir!</p>
              </div>
              <img src={clientImg2} alt="" />
              </div> 
            </div>
           </div>
           <div className='documentsDetails'>
            <div>1</div>
            <div>2</div>
           </div>
        </section>
    </>
  )
}

export default ClientPortal
