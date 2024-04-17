import React from 'react'
import './Feedback.css'
import feedback from './../../../public/images/feedback.png'

const Feedback = () => {
  return (
    <div className='feedback'>
        <div className='leftFeedback'>
          <div className='left_text'>
            <div className='feedbackText'>
            <h5>Your Feedback Is</h5>
            <span>our pathway</span>
            </div>
            <div className='feedbackbtn'>
            <button>Feedback</button>
            </div>
          </div>
          <div className='right_text'>
            <p>InstantComplaint portal <br /> available for any mis-conduct</p>
          </div>
        </div>
        <div className='feedback-Img'>
          <img src={feedback} alt="" />
        </div>
    </div>
  )
}

export default Feedback
