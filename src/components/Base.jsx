import React from 'react'

const Base = ({ children }) => {
  return (
    <div className="container mt-5 bg-neu">
      <div className="row border">
        <div className="col-12 col-md-4 text-justify border-right px-0 ">
          <div className="bg-dark hmin-600">
            <div className="bg-darkpurple "></div>
            <img src="https://place-hold.it/200x200" className="d-block img-fluid m-img mb-4" alt="" />
            <div>
              <span className="bg-darkpurple mx-3 text-light p-2 d-block mb-2"> I socilize on</span>
              <span className="mx-3 p-2">
                <a href="https://facebook.com/mjontop0602" className="text-white" target="blank">
                  <i class="fa fa-facebook-official"></i>
                </a>
                <a href="https://github.com/mjontop" className="text-white px-2" target="blank">
                  <i class="fa fa-github"></i>
                </a>
                <a href="https://instagram.com/mjontop_" className="text-white" target="blank">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/mjontop/" className="text-white px-2" target="blank">
                  <i class="fa fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 text-justify px-0">
          <div className="bg-darkpurple"></div>
          <div className="bg-dark hmin-500">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
          </div>
        </div>
        <footer className="bg-darkpurple">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are
        </footer>
      </div>
    </div>
  )
}

export default Base
