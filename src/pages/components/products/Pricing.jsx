import React from 'react'

const Pricing = () => {
  return (
    <section className="section pricing-section">
      <div className='container'>
        <div className='row'>
          <div className="col-lg-12 col-xxl-12 col-md-12">
            <div className='pricing-header text-center'>
              <h2 className="pricing-heading fw-bold my-4"> <span>Pricing</span></h2>
              <p className='pricing-sub-heading mb-5 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolores sapiente, amet quos facilis rem nisi enim repellat ratione quia placeat assumenda ea ipsam at, tenetur obcaecati officia earum tempore!</p>
            </div>
          </div>

        </div>
        <div className='row' id='cards-pricing'>
          <div className="col-lg-4 col-xxl-4 col-md-4 col-sm-12">
            <div className='card price-card' id='price-card'>
              <div className="card-body">
                <div className='card-title mb-5 mt-4' id='price-card-title'>
                  <h5 className='free-plane'>Free Plane</h5>
                  <div className=' d-flex price-box '>
                    <h4 className="actual-price">$</h4>
                    <h1 className="actual-price">0</h1>
                  </div>
                  <h5 className='per-day'>per month</h5>
                </div>
                <div className='card-description'>
                  <i class="fa-solid fa-check"></i> Islamia college University.<br/>
                  <i className="fa-solid fa-check"></i> Islamia college University.<br/>
                  <i className="fa-solid fa-check"></i> Islamia college University.<br/>
                  <i class="fa-solid fa-xmark" id='cross'></i><span className='crossicon'>Islamia college University.</span><br/>
                  <i class="fa-solid fa-xmark" id='cross'></i><span className='crossicon'>Islamia college University.</span>   
                  <i><button className='btn btn-primary' id='price-btn'>Get Started</button></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-4 col-md-4 col-sm-12">
            <div className='card price-card' id='price-card2'>
              <div className="card-body">
                <div className='card-title mb-5 mt-3' id='price-card-title'>
                  <h5 className='free-plane'>Bussiness Plane</h5>
                  <div className=' d-flex price-box '>
                    <h4 className="actual-price">$</h4>
                    <h1 className="actual-price">29</h1>
                  </div>
                  <h5 className='per-day'>per month</h5>
                </div>
                <div className='card-description'>
                  <i class="fa-solid fa-check"></i> Islamia college University.
                  <br /><i className="fa-solid fa-check"></i> Islamia college University.
                  <br /><i className="fa-solid fa-check"></i> Islamia college University.
                  <br /><i className="fa-solid fa-check"></i> Islamia college University.
                  <br /><i className="fa-solid fa-check"></i> Islamia college University .
                  <br /><i><button className='btn btn-primary' id='price-btn2'>Get Started</button></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-4 col-md-4 col-sm-12">
            <div className='card price-card' id='price-card'>
              <div className="card-body">
                <div className='card-title mb-5 mt-4' id='price-card-title'>
                  <h5 className='free-plane'>Developer Plane</h5>
                  <div className=' d-flex price-box '>
                    <h4 className="actual-price">$</h4>
                    <h1 className="actual-price">49</h1>
                  </div>
                  <h5 className='per-day'>per month</h5>
                </div>
                <div className='card-description'>
                  <i class="fa-solid fa-check"></i> Islamia college University.
                  <br /><i className="fa-solid fa-check"></i> Islamia college University.
                  <br /><i className="fa-solid fa-check"></i> Islamia college University.
                  <br /><i className="fa-solid fa-check"></i> Islamia college University.
                  <br /><i className="fa-solid fa-check"></i> Islamia college University .
                  <br /><i><button className='btn btn-primary' id='price-btn'>Get Started</button></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing