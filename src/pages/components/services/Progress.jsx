import React from 'react'
import image from "../../../imag.jpg"

const Progress = () => {
    return (
        <div>
            <div className='container-fluid p-5' id='progress-main'>
                <div className='row' >
                    <div className='col-lg-6 col-md-6 col-xxl-6 col-sm-12'>
                        <img src={image} className='img-fluid m-5' alt='progress image' id='progress-img' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-xxl-6 col-sm-12'>
                        <h1 id='progress-heading'>Lorem ipsum dolor site amet consectetur adipisicing elit. </h1>
                        <p className='font-italic-para'>Odio illum alias exercitationem iste. Magni reiciendis sed ducimus, molestias fuga sapiente aperiam mollitia deleniti expedita dicta culpa </p>
                        <div className='progressbar-heading'>
                            <h6>Html</h6>
                            <h6>100%</h6>
                            </div>
                            <div className="progress progress-sm">
                                <div className="progress-bar" role="progressbar" style={{ width: '100%', backgroundColor: "#4668a2" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                         <div className='progressbar-heading'>
                            <h6>CSS</h6>
                            <h6>90%</h6>
                            </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: "#4668a2" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className='progressbar-heading'>
                            <h6>javascript</h6>
                            <h6>75%</h6>
                            </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar" role="progressbar" style={{ width: '75%', backgroundColor: "#4668a2" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className='progressbar-heading'>
                            <h6>Bootstrap</h6>
                            <h6>55%</h6>
                            </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar" role="progressbar" style={{ width: '55%', backgroundColor: "#4668a2" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Progress