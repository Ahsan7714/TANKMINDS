import React from 'react'
import './Register.css'
// import RegisterA from '../../../public/images/RegisterA.png'
// import RegisterB from '../../../public/images/RegisterB.png'
// import RegisterC from '../../../public/images/RegisterC.png'
// import RegisterD from '../../../public/images/RegisterD.png'
import RegisterA from './../../../public/images/RegisterA.png'
import RegisterB from './../../../public/images/RegisterB.png'
import RegisterC from './../../../public/images/RegisterC.png'
import RegisterD from './../../../public/images/RegisterD.png'

const Register = () => {
  return (
    <div className='Register'>
    <div className='Register-heading'>
        <b>Lets Register</b>
           <p>Make future</p>
    </div>
    <div className='Register-cards'>
        <div className='RegisterCard_details' >
            <img src={RegisterA} alt="" />
             <h1>
             Company
            </h1>
             <button className='btn'>
                 Explore 
             </button>
        </div>
        <div className='RegisterCard_details' >
            <img src={RegisterB} alt="" />
             <h1>
             Partnership Firm
            </h1>
             <button className='btn'>
                 Explore 
             </button>
        </div>
        <div className='RegisterCard_details' >
            <img src={RegisterC} alt="" />
             <h1>
             Law Firm
            </h1>
             <button className='btn'>
                 Explore 
             </button>
        </div>
        <div className='RegisterCard_details' >
            <img src={RegisterD} alt="" />
             <h1>
             LLC
            </h1>
             <button className='btn'>
                 Explore 
             </button>
        </div>
    </div>
</div>
  )
}

export default Register
