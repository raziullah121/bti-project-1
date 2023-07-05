import React from 'react'

const NewsLetter = () => {
    return (
        <section className='section news-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-sm-12'>
                        <div className='news-header'>
                            <h3 className='news-heading'>Join Our NewsLetter</h3>
                            <p className='news-subheading'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio in cum pariatur molestiae? Odio error eaque unde dolore sunt maiores, </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-sm-12'>
                        <form>
                            <div className="group-newsletter">
                                <div className="input-container">
                                    <input type="text" name="name" id="input-subscribe" />
                                    <button className="btn btn-primary" id="subscribe-btn">Subscribe</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter