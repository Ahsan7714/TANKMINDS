import React from 'react'
import './Tax.css'
import TaxA from './../../../public/images/TaxA.png'
import TaxB from './../../../public/images/TaxB.png'
import TaxC from './../../../public/images/TaxC.png'
import TaxD from './../../../public/images/TaxD.png'
// import BannerIng from './../../../../frontend/public/images/bannerImg.png'
// import BannerIng from './../../../public/images/bannerImg.png'

const Tax = () => {
  return (
    <div className='Tax'>
        <div className='Tax-heading'>
            <b>Tax</b>
            <p>We are Available</p>
        </div>
        <div className='Tax-cards'>
            <div className='TaxCard_details' >
                <img src={TaxA} alt="" />
                 <h1>
                 Yearly Tax Return
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
            <div className='TaxCard_details' >
                <img src={TaxB} alt="" />
                 <h1>
                 Income Tax
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
            <div className='TaxCard_details' >
                <img src={TaxC} alt="" />
                 <h1>
                 Sales Tax
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
            <div className='TaxCard_details' >
                <img src={TaxD} alt="" />
                 <h1>
                 Excise Tax
                </h1>
                 <button className='btn'>
                     Explore 
                 </button>
            </div>
        </div>
    </div>
  )
}

export default Tax
