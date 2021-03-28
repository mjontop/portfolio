import React from 'react'
import { Link, withRouter, useLocation } from 'react-router-dom'

const Base = ({ children }) => {
  const path = useLocation().pathname
  return (
    <div className="container mt-5 bg-neu">
      <div className="row">
        <div className="col-12 col-md-4 text-justify bd-md-right px-0 bg-dark">
          <div className="bg-dark hmin pd-on-sm bd-md-right-top">
            <div className="bg-darkpurple "></div>
            <img
              src="https://avatars0.githubusercontent.com/u/41504340?s=460&u=4f8a7d623c10ce757f5b5b2563c54c8cfe6622be&v=4"
              className="d-block img-fluid m-img mb-4"
              alt=""
              width="200"
            />
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
            <div className="m-0">
              <iframe
                className="w-100 border-0"
                src={`https://github-readme-stats.vercel.app/api?username=mjontop&count_private=true&theme=radical&hide=issues&show_icons=true&include_all_commits=true&hide_rank=true&line_height=20&icon_color=5b067c`}
                title="Github data"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 text-justify px-0 bg-dark">
          <div className="bg-dark hmin">
            <div className="bg-darkpurple">
              <nav className="font-lg float-right mr3rem d-flex">
                <div className={getActiveClass(path, '/')}>
                  <Link to="/">
                    <i className="fa fa-home "></i>
                  </Link>
                </div>
                <div className={getActiveClass(path, '/profile')}>
                  <Link to="/profile">
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
