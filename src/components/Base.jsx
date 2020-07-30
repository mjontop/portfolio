import React from 'react'
import { Link, withRouter, useLocation } from 'react-router-dom'

const Base = ({ children }) => {
  const path = useLocation().pathname
  return (
    <div className="container mt-5 bg-neu">
      <div className="row">
        <div className="col-12 col-md-4 text-justify border-right px-0 ">
          <div className="bg-dark hmin pd-on-sm">
            <div className="bg-darkpurple "></div>
            <img src="https://place-hold.it/200x200" className="d-block img-fluid m-img mb-4" alt="" />
            <div>
              <span className="bg-darkpurple mx-3 text-muted p-2 d-block mb-2 rounded blockquote">
                I <b>socilize</b> on
              </span>
              <span className="mx-3 p-2 font-md">
                <a href="https://facebook.com/mjontop0602" className="text-white " target="blank">
                  <i className="fa fa-facebook-official"></i>
                </a>
                <a href="https://github.com/mjontop" className="text-white  px-2" target="blank">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://instagram.com/mjontop_" className="text-white " target="blank">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/mjontop/" className="text-white  px-2" target="blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 text-justify px-0">
          <div className="bg-dark hmin">
            <div className="bg-darkpurple">
              <nav className="font-lg float-right mr3rem d-flex">
                <div className={getActiveClass(path, '/')}>
                  <Link to="/">
                    <i className="fa fa-home "></i>
                  </Link>
                </div>
                <div className={getActiveClass(path, '/portfolio')}>
                  <Link to="/portfolio">
                    <i className="fa fa-user"></i>
                  </Link>
                </div>
                <div className={getActiveClass(path, '/projects')}>
                  <Link to="/projects">
                    <i className="fa fa-briefcase"></i>
                  </Link>
                </div>
                <div className={getActiveClass(path, '/contact')}>
                  <Link to="/contact">
                    <i className="fa fa-envelope"></i>
                  </Link>
                </div>
              </nav>
            </div>
            {children}
          </div>
        </div>
        <footer className="bg-darkpurple col-12">
          <div className="float-right text-muted pt-4 pr-4 text-sm">Copyright © 2020 Manikant Jha</div>
        </footer>
      </div>
    </div>
  )
}

export default withRouter(Base)

const getActiveClass = (current, target) => {
  if (current !== target) return 'pd-10 hvr text-white'
  return 'pd-10 hvr text-white active-link'
}
