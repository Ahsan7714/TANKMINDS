import React from 'react'
import './Banner.css'
// import BannerIng from './../../../public/images/bannerImg.png'
// import BannerIng from '.bannerImg.png'
// import blur from './../../../../frontend/public/images/blur.png'
import BannerIng from './../../../public/images/bannerImg.png'
const Banner = () => {
  return (
    <div className='container'>
    <div className='left-side'>
        <div  className='heading'>
             <p>we recruit <span>young lawyers</span> for <br /> major cities.</p>
        </div>
        <div className='text'>
             <p>We have much more opportunities for lawyer. <br /> Lawyer get monthly salary & bonuses.</p>
             
        </div>
        <div className='btn'>
            <button>Let's Become Tankminds</button>
        </div>
        
    </div>
    <div className='right-side'>
        <img src={BannerIng} alt="" />
        {/* <img src={blur} alt="" /> */}
    </div>
</div>
  )
}

export default Banner
