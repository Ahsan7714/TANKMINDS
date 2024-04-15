import React from 'react'
import './InternshipOffer.css'
import Internship from './../../../public/images/Internship.png'

const InternshipOffer = () => {
  return (
    <div className='Container'>
    <div className='left_side'>
        <b>Paid Internship Offer</b>
        <h2>Lets Grow With Us</h2>
        <button>Let's Start</button>
        <h1>Law & Business Students </h1>
        <p>Of Last Semesters Are Also Eligible.</p>
    </div>
    <div className='right_side'>
        <img src={Internship} alt="" />
    </div>
</div>
  )
}

export default InternshipOffer
