import React from 'react'
import './PaidMediation.css'
import middleImg from './../../../../frontend/public/images/middle.png'

const PaidMediation = () => {
  return (
    <div className='PaidMediation'>
      <div className='leftSide'>
        <p>We Provide</p>
        <h3>Paid Mediation</h3>
        <div className='HEADING'>
        <h1>Save Time Save</h1>
        <h1> Money</h1>
        </div>
        <button>Get Mediation</button>
      </div>
      <div className='middleSide'>
        <img src={middleImg} alt="" />
      </div>
      <div className='rightSide'>
        <div className='offer'>
        <h3>“ We Offer Mediation</h3>
        <h3>Even For High-level</h3>
        <h3>Criminal Cases “</h3>
        </div>
        <p>Resolve Conflicts Swiftly With Mdiation</p>
      </div>
    </div>
  )
}

export default PaidMediation
