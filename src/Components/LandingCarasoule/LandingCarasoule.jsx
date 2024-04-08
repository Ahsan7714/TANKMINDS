import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './LandingCarasoule.css'
import { LuMousePointerClick } from 'react-icons/lu';
import { IoCloseCircleOutline } from 'react-icons/io5';


const LandingCarasoule = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className='landingPageCarasoule'>
            <Carousel
            
            swipeable={false}
  draggable={false}
  responsive={responsive}
  height={800}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  arrows={true} 
  dotListClass="custom-dot-list-style"
             >

                <div className='carasoule-item slide_1'>
                <img src="./images/landing_slide_banner.png" alt="" className='backdrop' />
                
                <div className="content">
                 <div className="shadow_heading">
                    <img src="./images/shadow.png" alt="" />
                    <img src="./images/become tax filer.png" alt="" />
                 </div>
                 <h1>
                 Only in Rs 999
                 </h1>
                 <p>now submit your yearly tax return on time with one click</p>
                 <button>Click Yo file <LuMousePointerClick /></button>
                </div>
                <img src="./images/image 6.png" alt="tax image " className="tax_img" />



                </div>
              
                <div className='carasoule-item slide_2'>
                <img src="./images/background.jpg" alt="" />
                <div className="slide2_content">
                    <div className="upper_header">
                    <button><IoCloseCircleOutline /> <span>now wait</span></button>
                    <button><IoCloseCircleOutline/> <span>
                    no appointment
                    </span></button>
                    </div>
                    <h1>
                    professional lawyer will contact you for consultation
                    </h1>
                    <div className="price">
                        <span>just rs : 1200</span>
                        <button>book your time</button>
                    </div>
                </div>
                </div>



 
            </Carousel>
        </div>
    )
}

export default LandingCarasoule


