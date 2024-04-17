import React from 'react'
import './CriminalMatters.css'
import CriminalMattersA from './../../../public/images/CMA.png'
import CriminalMattersB from './../../../public/images/CMB.png'
import CriminalMattersC from './../../../public/images/CMC.png'
import CriminalMattersD from './../../../public/images/CMD.png'

const CriminalMatters = () => {
  return (
    <div className='CriminalMatters'>
        <div className='CriminalMatters-heading'>
            <p>Criminal Matters</p>
            <div className='deals'>
               <b>We Deals </b>
            </div>
        </div>
        <div className='CriminalMatters-cards'>
            <div className='CriminalMattersCard_details' >
                <img src={CriminalMattersA} alt="" />
                 <h1>
                 Bail Instantly
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
            <div className='CriminalMattersCard_details' >
                <img src={CriminalMattersB} alt="" />
                 <h1>
                 Narcotics
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
            <div className='CriminalMattersCard_details' >
                <img src={CriminalMattersC} alt="" />
                 <h1>
                 High Crimes
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
            <div className='CriminalMattersCard_details' >
                <img src={CriminalMattersD} alt="" />
                 <h1>
                 Terrorism
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
        </div>
    </div>
  )
}

export default CriminalMatters
