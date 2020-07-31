import React from 'react'
import Base from './Base'

const Home = () => {
  return (
    <Base>
      <div className="pt-3 row">
        <div className="col-12 col-md-6">
          <h6 className="pl-2 text-muted">Get in Touch</h6>
          <form action="" className="pl-2 mr-2 mb-4">
            <label className="d-block text-light" htmlFor="name">
              Name:
            </label>
            <input className="d-block rounded text-dark no-focus" type="text" id="name" />
            <label className="d-block text-light mt-4" htmlFor="email">
              Email:
            </label>
            <input className="d-block rounded text-dark no-focus" type="email" id="email" />
            <label className="d-block text-light mt-4" htmlFor="email">
              Message:
            </label>
            <textarea
              className="d-block rounded text-dark no-focus"
              type="text"
              id="email"
              rows="4"
              placeholder="Your Message ..."
            ></textarea>
            <input className="btn btn-bg px-2 mt-1 btn-block " type="submit" value="Send" />
          </form>
        </div>

        <div className="col-12 col-md-6">
          <h6 className="pl-4 text-muted bg-black mr-3 rounded py-2 ml-2">Contact Info</h6> <br />
          <span className="text-muted font-sm d-block ml-2">
            <i className="fa fa-phone-square" aria-hidden="true"></i>
            <a href="tel:+917529906398" className="font-sm pl-2 text-muted">
              +91 7529906398
            </a>
          </span>
          <br />
          <span className="text-muted font-sm d-block ml-2 mb-4">
            <i class="fa fa-envelope-square" aria-hidden="true"></i>
            <a href="mailto:mjontop0602@gmail.com " className="font-sm pl-2 text-muted mail">
              mjontop0602@gmail.com
            </a>
          </span>
        </div>
      </div>
    </Base>
  )
}

export default Home
