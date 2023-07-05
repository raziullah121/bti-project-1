import React from 'react'
import image from "../../../images/heroimage.jpg"

const Hero = () => {
  return (
    <section className="section hero-section">
      <div className='container-fluid'>
        <div className=" hero">
          <div className="row">
            <div className='col-sm-12 col-lg-6 mt-5' id='hero-heading'>
              <div className="inner-hero ">
                <div className='text-hero'>
                  <h1 className=" display-5 custom-font" id='better-solution'>Better Solutions For <br/>
                    Your Bussiness</h1>
                  <h4 className='custom-font' id='talent'>We are Talent designers and making website<br/>
                    with Bootstrap</h4>
                </div>
                <div className="d-flex " id='video-watch' >
                  <button className='btn btn-primary btn-lg'>Get Started</button>
                  <span className=' display-6 ms-4'> <i class="fa-regular fa-circle-play"></i></span>
                  <span className='ms-2 align-self-center'>  Watch Video</span>
                </div>
              </div>

            </div>
            <div className='col-sm-12 col-lg-6' id='hero-img-div'>

              <img src={image} alt='first image' className='img-fluid img-thumbnail w-60 h-0 m-5' id='hero-pic' />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero