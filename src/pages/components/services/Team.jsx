import React from 'react'
import teamimage from "../../../images/team1.jpg"
// import teamimage1 from "../../../images/Raziullah.jpeg"

const Team = () => {
  return (
    <section className='section team-section'>
      <div className='container'>
        <div className='row'>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="team-content">
              <h1 className='team-header text-uppercase p-5'><span>Team</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident excepturi aut alias, eius voluptate fugiat beatae iste consectetur cumque? Doloremque laborum optio similique minima est nostrum dolor ex nisi?</p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-xxl-6 col-md-12 col-sm-12' id='card-section1'>
            <div className="card mb-4" >
              <div className='card-team '>
                <img src={teamimage} className="card-img-top img-fluid rounded-circle img-cover align-self-center" alt="..." />
                <div className="card-body">
                  <p className="card-description">
                    <h4 className="team-card-title">
                      Welter White
                    </h4>
                    <p className='cheif'><span className='cheif-heading'>Cheif E</span>xecutive Officer</p>
                    Some quick example text to build on the card title and make card.</p>

                  <div className='team-social-icon'>
                    <p><i class="fa-brands fa-twitter"></i></p>
                    <p><i class="fa-brands fa-facebook"></i></p>
                    <p><i class="fa-brands fa-square-instagram"></i></p>
                    <p><i class="fa-brands fa-linkedin"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xxl-6 col-md-12 col-sm-12' id='card-section1'>
            <div className="card" >
              <div className='card-team'>
                <img src={teamimage} className="card-img-top img-fluid rounded-circle align-self-center" alt="..." />
                <div className="card-body">


                  <p className="card-description">
                    <h4 className="team-card-title">
                      Sarah Jhonson
                    </h4>
                    <p className='cheif'><span className='cheif-heading'>Product</span> Manager</p>
                    Some quick example text to build on the card title and make card.</p>

                  <div className='team-social-icon'>
                    <p><i class="fa-brands fa-twitter"></i></p>
                    <p><i class="fa-brands fa-facebook"></i></p>
                    <p><i class="fa-brands fa-square-instagram"></i></p>
                    <p><i class="fa-brands fa-linkedin"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 col-xxl-6 col-md-12 col-sm-12' id='card-section1'>
            <div className="card mb-5" >
              <div className='card-team'>
                <img src={teamimage} className="card-img-top img-fluid rounded-circle align-self-center" alt="..." />
                <div className="card-body">


                  <p className="card-description">
                    <h4 className="team-card-title">
                      William Anderson
                    </h4>
                    <p className='cheif'><span className='cheif-heading'>CTO</span></p>
                    Some quick example text to build on the card title and make card.</p>

                  <div className='team-social-icon'>
                    <p><i class="fa-brands fa-twitter"></i></p>
                    <p><i class="fa-brands fa-facebook"></i></p>
                    <p><i class="fa-brands fa-square-instagram"></i></p>
                    <p><i class="fa-brands fa-linkedin"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xxl-6 col-md-12 col-sm-12' id='card-section1'>
            <div className="card" >
              <div className='card-team'>
                <img src={teamimage} className="card-img-top img-fluid rounded-circle align-self-center" alt="..." />
                <div className="card-body">


                  <p className="card-description">
                    <h4 className="team-card-title">
                      Amanda Jepson
                    </h4>
                    <p className='cheif'><span className='cheif-heading'>Accoun</span>tant</p>
                    Some quick example text to build on the card title and make card.</p>

                  <div className='team-social-icon'>
                    <p><i class="fa-brands fa-twitter"></i></p>
                    <p><i class="fa-brands fa-facebook"></i></p>
                    <p><i class="fa-brands fa-square-instagram"></i></p>
                    <p><i class="fa-brands fa-linkedin"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Team