import React from 'react'
import Base from './Base'
const Home = () => {
  return (
    <Base>
      <div className="row">
        <div className="col-md-6 col-12 pt-4">
          <span className=" text-muted mx-2 blockquote d-block bg-black mt-2 px-2 rounded">Hello World ...</span>
          <span className=" text-muted mx-2 blockquote d-block bg-black mt-2 px-2 rounded">
            My Name is <b className="text-hight">Manikant jha</b>
          </span>
          <span className=" text-muted mx-2 blockquote d-block bg-black mt-2 px-2 rounded">
            I makes web apps in <b className="text-hight">React</b>
          </span>
          <span className=" text-muted mx-2 blockquote d-block bg-black mt-2 px-2 rounded font-sm">
            and Build websites in <b className="text-hight">Node.js</b>
          </span>
          <span className=" text-muted mx-2 blockquote d-block bg-black mt-2 px-2 rounded font-sm">
            and teach people <br/> @ <a href="https://whataftercollege.com/" className="text-muted"><b className="text-hight">WAC (What After College)</b></a>
          </span>
        </div>
        <div className="col-md-6 col-12 pt-4">
          <span className=" text-muted mx-2 blockquote d-block bg-black mt-2 px-2 rounded">
            <b>Certifications</b>
          </span>
          <span className="text-muted mx-2 blockquote d-block bg-black mt-2 pl-3  pr-4 rounded">
            <a
              target="blanck"
              href="https://www.coursera.org/account/accomplishments/certificate/JR82J9G8WESQ"
              className=" text-muted"
            >
              <span className="d-inline  text-muted font-xsm">&#9658; Data Structures, Coursera</span>
            </a>
          </span>
          <span className="text-muted mx-2 blockquote d-block bg-black mt-2 pl-3  pr-4 rounded">
            <a
              target="blanck"
              href="https://www.freecodecamp.org/certification/mjontop/javascript-algorithms-and-data-structures"
              className=" text-muted"
            >
              <span className="d-inline  text-muted font-xsm">
                &#9658; JavaScript Algorithms and <br /> Data Structures, FreeCodeCamp
              </span>
            </a>
          </span>
          <span className="text-muted mx-2 blockquote d-block bg-black mt-2 pl-3  pr-4 rounded">
            <a target="blanck" href="https://www.hackerrank.com/certificates/3d7e5589b091" className=" text-muted">
              <span className="d-inline  text-muted font-xsm">&#9658; Python, HackerRank</span>
            </a>
          </span>
          <span className="text-muted mx-2 blockquote d-block bg-black mt-2 pl-3  pr-4 rounded">
            <a
              target="blanck"
              href="https://www.freecodecamp.org/certification/mjontop/responsive-web-design"
              className=" text-muted"
            >
              <span className="d-inline  text-muted font-xsm">
                &#9658; Responsive Web Design,
                <br /> FreeCodeCamp
              </span>
            </a>
          </span>
          <span className=" text-muted mx-2 blockq  uote d-block bg-black mt-2 px-4 rounded">
            <b>Some other Links</b>
          </span>
          <span className="text-muted mx-2 blockquote d-block bg-black mt-2 pl-3  pr-4 rounded">
            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
            <a href="https://drive.google.com/file/d/1TWfHfNn-gusloMKGRY3kNVtUhz5OWx2z/view" className="text-white" target="blank">
              <pre className="d-inline  text-white"> Resume </pre>
              <sub>[.pdf]</sub>
            </a>
          </span>
        </div>
      </div>
    </Base>
  )
}

export default Home
