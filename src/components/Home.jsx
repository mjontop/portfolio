import React from 'react'
import Base from './Base'
const Home = () => {
  return (
    <Base>
      <div className="row">
        <div className="col-md-6 col-12 pt-4">
          <span className=" text-muted ml-4 blockquote d-block bg-black mt-2 px-2 rounded">Hello World ...</span>
          <span className=" text-muted ml-4 blockquote d-block bg-black mt-2 px-2 rounded">
            My Name is <b className="text-hight">Manikant jha</b>
          </span>
          <span className=" text-muted ml-4 blockquote d-block bg-black mt-2 px-2 rounded">
            I makes web apps in <b className="text-hight">React</b>
          </span>
          <span className=" text-muted ml-4 blockquote d-block bg-black mt-2 px-2 rounded font-sm">
            and Build websites in <b className="text-hight">Node.js</b>
          </span>
        </div>
        <div className="col-md-6 col-12 pt-4">
          <span className=" text-muted ml-4 blockquote d-block bg-black mt-2 px-4 rounded">Some Links</span>
          <span className="text-muted ml-4 blockquote d-block bg-black mt-2 pl-3  pr-4 rounded">
            <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
            <pre className="d-inline  text-white"> Resume </pre>
            <sub>[.pdf]</sub>
          </span>
        </div>
      </div>
    </Base>
  )
}

export default Home
