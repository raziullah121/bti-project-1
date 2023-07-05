import React from 'react'
import image from "../../../imag.jpg"

const Accordion = () => {
    return (
        <div>
            <div className='container-fluid bg-light p-5 d-flex ' id='accordion-container'>
                <div className='row' id='accordion-main'>
                    <div className="col-lg-6  col-sm-12 ">
                        <div className='accordion-header-div ms-5 my-5'>
                            <h2 className='accordion-heading1'>Eum ipsam laborum deleniti
                                <span className='accordion-heading '> velit pariatur artichitecto auto nihil</span></h2>
                            <p className='accordion-description'>this is some text about me there is no problem nowsday something went right now. some text about me there is no problem nowsday something went right now.</p>
                            <div class="accordion mb-5" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h6><span className='qs'>01 what is redux and why we use and how we can use? </span></h6>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                             It is shown by default, until the collapse plugin adds the appropriate classes that we also worth noting that just about any HTML can go within the , though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <h6><span className='qs'>02</span> what is redux and why we use Redux ? </h6>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h6><span className='qs'>03</span> what is redux and why we use Redux ? </h6>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12  ">
                        <div className='accordion-img d-flex justify-content-right'>
                            <img src={image} alt='first image' className='img-fluid m-5' id='accordion-image' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Accordion