import React from 'react'

function Contact() {
  return (
    <div>
      <div className="py-5">
        <h2 className="text-center orange">Contact us</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
          <form className="py-5 mb-5">
            <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea2"></textarea>
            </div>
            <button type="submit" className="btn bg-orange text-white">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
