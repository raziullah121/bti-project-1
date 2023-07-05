
import React from 'react'

const Education = () => {
  return (
    <div>
        <div className="container">
    <h2>Bootstrap Form</h2>
    <form>
      <div className="form-group">
        <label for="name">Name:</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
      </div>
      <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
      </div>
      <div className="form-group">
        <label for="message">Message:</label>
        <textarea className="form-control" id="message" placeholder="Enter your message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>

    </div>
  )
}

export default Education