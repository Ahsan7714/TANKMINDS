import React from 'react'
import './Tankminds.css'
import Tankmind from './../../../../frontend/public/images/tankminds.png'

const Tankminds = () => {
  return (
    <div className='Tankminds'>
      <div className='Tankminds_left'>
        <p>Tankminds is the essence of purity and trust <br /> there is no concept of day & night we <br /> even not looking for rain or sun shine</p>
      </div>
      <div className='Tankminds_right'>
        <img src={Tankmind} alt="" />
      </div>
    </div>
  )
}

export default Tankminds
