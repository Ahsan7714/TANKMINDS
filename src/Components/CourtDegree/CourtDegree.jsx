import React from 'react'
import './CourtDegree.css'
import CourtA from './../../../../frontend/public/images/courtA.png'
import Court2 from './../../../../frontend/public/images/court_2.png'
import Court3 from './../../../../frontend/public/images/court_3.png'
import Court4 from './../../../../frontend/public/images/court_4.png'
import BannerIng from './../../../../frontend/public/images/bannerImg.png'
const CourtDegree = () => {
  return (
    <div className='CourtDegree'>
        <div className='CourtDegree-heading'>
            <p>Civil Cases</p>
            <b>Court Degree</b>
           <div className='Intime'> 
                <p>In Time</p>
           </div>
        </div>
        <div className='CourtDegree-cards'>
            <div className='Cards_details' >
                <img src={CourtA} alt="" />
                 <h1>
                 Property Dispute
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
            <div className='Cards_details' >
                <img src={Court2} alt="" />
                 <h1>
                 Services Matters
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
            <div className='Cards_details' >
                <img src={Court3} alt="" />
                 <h1>
                 Money Recovery
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
            <div className='Cards_details' >
                <img src={Court4} alt="" />
                 <h1>
                 Land Partition
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
        </div>
    </div>
  )
}

export default CourtDegree
