import React from 'react'
import jspic from "../src/js pci.webp";

export const Card = () => {
    return (
        <div className='bg-light'>
            <div className="container">
                <div className="row m-5 ml-5">
                    <div className="card col-lg-3 bg-secondary m-1">
                        <img src={jspic} className=" w-100 h-70" id="image" href="#"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's
                                content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}
