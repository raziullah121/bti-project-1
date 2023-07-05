import React from 'react'

const Services = () => {
  return (
    <section className='section services-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-xxl-12 col-sm-12'>
            <div className="service-header">
              <h2 className='service-heading p-5 '><span>Services</span></h2>
              <p className='sub-heading text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptas vel aspernatur tempore. Cum animi ipsa cumque deleniti error explicabo odio et deserunt ab quia tempora id itaque, optio quaerat?</p>
            </div>
          </div>
        </div>
        <div className='row'>
          
          <div className='col-lg-3 col-xxl-3 col-md-6 col-sm-6'>
          <div className="feature-box"> 
              <div className='feature-content'>
              <div className='icon'>
              <h3><i class="fa-brands fa-dribbble" id='service-icon'></i></h3>
              </div>
                <h3 className='service-card-header'>Lorem Ipsum</h3>
                <p> Fugit quaerat impedit laudantium molestias non culpa voluptate.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-xxl-3 col-md-6 col-sm-6'>
          <div className="feature-box"> 
              <div className='feature-content'>
              <div className='icon'>
              <h3><i class="fa-brands fa-dribbble" id='service-icon'></i></h3>
              </div>
                <h3 className='service-card-header'>Sed ut pers</h3>
                <p> Fugit quaerat impedit laudantium molestias non culpa voluptate.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-xxl-3 col-md-6 col-sm-6'>
          <div className="feature-box"> 
              <div className='feature-content'>
              <div className='icon'>
              <h3><i class="fa-brands fa-dribbble" id='service-icon'></i></h3>
              </div>
                <h3 className='service-card-header'>Magni Dolars</h3>
                <p> Fugit quaerat impedit laudantium molestias non culpa voluptate.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-xxl-3 col-md-6 col-sm-6'>
          <div className="feature-box"> 
              <div className='feature-content'>
              <div className='icon'>
              <h3><i className="fa-solid fa-file" id='service-icon'></i></h3>
              </div>
                <h3 className='service-card-header'>Nemo Enim</h3>
                <p> Fugit quaerat impedit laudantium molestias non culpa voluptate.</p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </section>
  )
}

export default Services;