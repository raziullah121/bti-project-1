import React from 'react'
import "../../../App.css";
const About = () => {
  return (
    <section className='section about-section'>
    <div className='container-fluid about-mains' id='about'>
      <div className='about-main'>
        <div className='text-center p-5'>
          <h2 className=' mt-3' id='some-font'><span>About Us</span></h2>
        </div>
      </div>
      <div className='row mt-4' id='about1'>
        
        <div className='col-lg-6 col-xxl-6 col-12 col-md-6 '>
        <div className="inner-about-left ms-5 mb-5  ">
          <p> lorem is the random writting this is some paragraph and I Have graduated from<br/>lorem is the random writting this is some paragraph and  </p>
          <p><i class="fa-solid fa-check-double"></i> Islamia college University peshawar.</p>
          <p><i class="fa-solid fa-check-double"></i> Islamia college University peshawar.</p>
          <p><i class="fa-solid fa-check-double"></i> Islamia college University peshawar.</p>
          </div>
        </div>
        <div className='col-lg-6 col-xxl-6 col-12 col-md-6'>
          <div className="inner-about-right me-5 mb-5">
          <p className='para-about'>this is some paragraph about me I am Razi Ullah  paragraph about me I am Razi Ullahand I Have graduated from Islamia College University Peshawar. but they take money. I want to some special oppurtunities given by Brown Tech Int company</p>
          <button className='btn btn-primary  mt-2' id='learn-btn'>Learn More</button>
          </div>
        </div>
      </div>
      

    </div>
    </section>
  )
}

export default About