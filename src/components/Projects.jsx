import React from 'react'
import Base from './Base'
const Home = () => {
  return (
    <Base>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-1 mt-2 px-1">
          <span className=" text-muted ml-4 mr-3 blockquote d-block bg-black mt-2 px-2 rounded">
            Here is some of projects on github ...
          </span>
          <span className=" text-muted ml-4 mr-3 blockquote d-block bg-black mt-4 px-2 rounded">
            &#9658;
            <a href="https://github.com/mjontop/portfolio" className=" text-muted">
              Portfolio Website
            </a>
          </span>
          <span className=" text-muted ml-4 mr-3 blockquote d-block bg-black mt-4 px-2 rounded">
            &#9658;
            <a href="https://github.com/mjontop/Book-rental" className=" text-muted">
              Book Renting Website
            </a>
          </span>
          <span className=" text-muted ml-4 mr-3 blockquote d-block bg-black mt-4 px-2 rounded">
            &#9658;
            <a href="https://github.com/mjontop/tic-tac-toe" className="text-muted">
              React Tic Tac Toe Game            </a>
          </span>
        </div>
      </div>
    </Base>
  )
}

export default Home
