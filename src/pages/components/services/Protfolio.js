import React from 'react'
import image1 from "../../../images/image1.jpg"
import image2 from "../../../images/image2.jpg"
import image3 from "../../../images/image3.jpg"
import image4 from "../../../images/image4.jpg"
import image5 from "../../../images/image5.jpg"
import image6 from "../../../images/image6.jpg"
import image7 from "../../../images/image7.jpg"
import image8 from "../../../images/image8.jpg"

const Protfolio = () => {
    return (
        <section className='section protfolio-section'>
            <div className='container-fluid '>
                <div className="row">
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='protfolio-header mb-2'>
                            <h2 className='profolio-h1 p-5'><span>Portfolio</span></h2>
                            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus alias dignissimos maxime quibusdam non illum nemo, asperiores earum accusantium aliquid error. Officiis quidem illo odit autem praesentium aliquam, quia qui?</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <nav class="navbar navbar-expand-lg navbar-light" id="protfolio-nav">
                            <div class="container-fluid">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#profolio-navbar" aria-controls="profolio-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="profolio-navbar">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="all-nav" aria-current="page" href="#">All</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">App</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Card</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Web</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>

                <div className="row pb-5">
                    <div className="col-lg-4 col-xxl-4 col-md-4 col-sm-12" id='protfolio-images'>
                        <img src={image1} alt='first image' className='img-fluid' />
                        <img src={image2} alt='first image' className='img-fluid' />
                    </div>
                    <div className="col-lg-4 col-xxl-4 col-md-4 col-sm-12" id='protfolio-images'>
                        <img src={image3} alt='first image' className='img-fluid' />
                        <img src={image2} alt='first image' className='img-fluid' />
                        <img src={image5} alt='first image' className='img-fluid' />
                    </div>
                    <div className="col-lg-4 col-xxl-4 col-md-4 col-sm-12" id='protfolio-images'>
                        <img src={image8} alt='first image' className='img-fluid' />
                        <img src={image8} alt='first image' className='img-fluid' />
                        <img src={image8} alt='first image' className='img-fluid' />
                        <img src={image8} alt='first image' className='img-fluid' />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Protfolio