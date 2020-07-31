import React from 'react'
import Base from './Base'

const Home = () => {
  return (
    <Base>
      <div className="pt-3 row">
        <div className="col-12 col-md-6">
          <h6 className="pl-2 text-muted">Feel free to share your Feedback</h6>
          <form action="" className="pl-2">
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
              row="50000"
              placeholder="Your Message ..."
            ></textarea>
            <input className="btn btn-bg px-2 mt-1 btn-block" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Base>
  )
}

export default Home
