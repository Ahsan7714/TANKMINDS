import React from 'react'
import './WhatWeDeal.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const WhatWeDeal = () => {
    const data = [
        {
            image:"./images/divorce.png",
            title:"Divorce",
            link:"/"
        },
        {
            image:"./images/dower.png",
            title:"Dower",
            link:"/"
        },
        {
            image:"./images/doweryArticles.png",
            title:"Dowery Articles",
            link:"/"
        },
        {
            image:"./images/maintenance.png",
            title:"Maintenance",
            link:"/"
        },
        {
            image:"./images/guardianship.png",
            title:"Guardianship",
            link:"/"
        },
        {
            image:"./images/childCustody.png",
            title:"Child Custody",
            link:"/"
        },
        {
            image:"./images/domesticViolence.png",
            title:"Domestic Violence",
            link:"/"
        },
        {
            image:"./images/childVisitation.png",
            title:"Child Visitation",
            link:"/"
        }
    ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };


  return (
    <div className='whatWeDeal'>

        <div className='whatWeDeal__heading'>
        <span>
            We Deals 
            <b> FAMILY CASES </b>
           <p> Live Long Happily</p>
        </span>
    </div>

    <div className='whatWeDeal__carasoule'>
    <Carousel
            
            swipeable={false}
  draggable={false}
  responsive={responsive}
  height={800}
  ssr={true} 
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  arrows={true} 
  dotListClass="custom-dot-list-style"
             >
             {
                    data.map((item,index)=>{
                        return(
                            <div className='single_what_we_deal' key={index}>
                            <img src={item.image} alt="" className='backdrop' />
                            <h1>
                            {item.title}
                            </h1>
                            <button className='explore'>
                                Explore 
                            </button>
                            </div>
                        )
                    })
             }
    </Carousel>
    </div>


    </div>
  )
}

export default WhatWeDeal