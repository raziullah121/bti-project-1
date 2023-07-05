import React from 'react'

const AskQuestion = () => {
  return (
    <section className='section ask-question-section'>
    <div className="container">
        <div className='row'>
            <div className='col-lg-12 col-xxl-12 col-sm-12 col-md-12' id='ask-header'>
                <div className='ask-header-dev'>
                <h2 className='ask-heading m-5'><span>Frequently Asked Questions</span></h2>
                <p className='ask-subheading'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque expedita molestiae sit ipsa nihil officia voluptatum ad, reprehenderit optio rem ducimus cum iste libero quibusdam eveniet exercitationem dolor. Id, dignissimos!</p>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className="accordion m-5" id="accordionExample">
                <div className='accordion-dev'>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne1">
                                    <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <i className="fa-solid fa-circle-question" style={{ color: '#47b2e4' }}></i><span className='accordion-question' style={{color: "#47b2e4"}}>Tell something about yourself ?</span>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque expedita molestiae sit ipsa nihil officia voluptatum ad, reprehenderit optio rem ducimus cum iste libero quibusdam eveniet exercitationem dolor. Id until the collapse plugin adds the appropriate classes that we 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <i className="fa-solid fa-circle-question" style={{ color: '#47b2e4' }}></i><h6 className='inline-block'><span className='accordion-question' style={{color: "rgb(44, 81, 119)"}}>  what is Redux in React and why we use Redux?</span></h6>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <i className="fa-solid fa-circle-question" style={{ color: '#47b2e4' }}></i><h6 className='inline-block'><span className='accordion-question' style={{color: "rgb(44, 81, 119)"}}>  what is Redux in React and why we use Redux?</span></h6>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <i className="fa-solid fa-circle-question" style={{ color: '#47b2e4' }}></i><h6 className='inline-block'><span className='accordion-question' style={{color: "rgb(44, 81, 119)"}}>  what is Redux in React and why we use Redux?</span></h6>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <i className="fa-solid fa-circle-question" style={{ color: '#47b2e4' }}></i><h6 className='inline-block align-self-center'><span className='accordion-question ms-2' style={{color: "rgb(44, 81, 119)"}}>  what is Redux in React and why we use Redux?</span></h6>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AskQuestion