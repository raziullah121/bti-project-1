import React from 'react'
import current from "../../../currentlocation.png"
const Contact = () => {
    return (
        <section className='section contact-section'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-12 col-xxl-12 col-md-12 col-sm-12">
                        <div className="contact-header">
                            <h2 className='contact-heading p-5  fw-bold'> <span> Contact</span></h2>
                            <p className='text-center mb-5'>Do You have any question? Please do not hasitate to contact us directly Do You have any question? Do You have any question? Please do not hasitate to contact us directly Do You have any question?Please do not hasitate to contact us directly</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-xxl-6 col-md-12 col-sm-12'>
                        <section className='location'>
                            <div className='location-address'>
                              
                                <h5 className='location-icon mt-3'><i class="fa-solid fa-location-dot"></i></h5>
                                
                                <div className='location-div ms-3 my-3'>
                                    <h5>Location</h5>
                                    <h6><span className='address'>office #47 second floor, Gullbarg iii Lahore</span></h6>
                                </div>
                            </div>
                            <div className='email-address'>
                            <h5 className='email-icon mt-3'><i class="fa-solid fa-envelope"></i></h5>
                            <div className='email-div ms-3 my-3'>
                                <h5>Email: </h5>
                                <h6><span className='address'>raziullah.icp@gmail.com</span></h6>
                             </div>
                            </div>
                            <div className='call-number'>
                            <h5 className='phone-icon mt-3'><i class="fa-solid fa-mobile"></i></h5>
                            <div className='call-div ms-3 my-3'>
                                <h5>Call :</h5>
                                <h6><span className='address'>+923348802927</span></h6>
                                </div>
                                
                            </div>
                            <img src={current} alt='current-location' className='img-fluid align-self-center ms-4' id='current-location' />
                        </section>
                    </div>
                    <div className='col-lg-6 col-xxl-6 col-md-12 col-sm-12'>
                        <section className='contact-form'>
                            <form>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='group-input'>
                                            <label for='name'>Your Name</label>
                                            <input id='name' className='full-width-input' type='text' name='name' />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='group-input'>
                                            <label for='email'>Your Email</label>
                                            <input id='email' className='full-width-input' type='email' name='email' />

                                        </div>
                                    </div>
                                </div>
                                <div className='group-input'>
                                    <label for='subject'>Your Subject</label>
                                    <input id='subject' type='text' name='subject' />

                                </div>
                                <div className='group-input'>
                                    <label for='message'>Message</label>
                                    <textarea id='message' type='text' name='message' />

                                </div>
                                <button className='btn btn-primary mt-1' id='contact-btn' type='submit'>Send Message</button>
                            </form>
                        </section>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact