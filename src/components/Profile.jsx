import React from 'react'
import Base from './Base'
const Home = () => {
  return (
    <Base>
      <div className="row">
        <div className="col-md-4 col-12 pt-3">
          <h3 className="pl-2 text-light">My Skills</h3>
          <b className="pl-2 text-muted"> Fornt-end: </b>
          <ul>
            <li className="text-muted">Html & CSS</li>
            <li className="text-muted">JavaScript</li>
            <li className="text-muted">React.js</li>
            <li className="text-muted">Vue.js</li>
          </ul>
          <b className="pl-2 text-muted"> Back-end: </b>
          <ul>
            <li className="text-muted">Node</li>
            <li className="text-muted">Express</li>
            <li className="text-muted">MongoDB</li>
            <li className="text-muted">MySQl</li>
          </ul>
          <b className="pl-2 text-muted">Proficiency:</b>
          <ul>
            <li className="text-muted">C / C++</li>
            <li className="text-muted">Python3</li>
            <li className="text-muted">Linux</li>
            <li className="text-muted">Git</li>
          </ul>
        </div>
        <div className="col-md-6 offset-lg-2 col-12 pt-4">
          <h3 className="pl-2 text-light">Experience</h3>
          
          <span className="px-2 mx-1 text-muted bg-black d-block ml-3 font-sm rounded">
            <b className="text-hight">CelebritySchool.in</b> <br />
            <span className="font-xsm">Sep 2020 - Jan 2021</span>
            <p className="font-xsm pb-1">
              &#9658; Mern Stack Developer <br /> &#9658; Website:
              <a href="https://celebrityschool.in/" target="blanck">
                <u className="text-muted px-1">celebrityschool.in</u>
              </a>
            </p>
          </span>


          <span className="px-2 mx-1 text-muted bg-black d-block ml-3 font-sm rounded">
            <b className="text-hight"> Learn Now</b> <br />
            <span className="font-xsm">May 2020 - Aug 2020</span>
            <p className="font-xsm pb-1">
              &#9658; Full Stack Developer Intern <br /> &#9658; Website:
              <a href="https://learn-online.org/" target="blanck">
                <u className="text-muted px-1">learn-online.org/</u>
              </a>
            </p>
          </span>
          <span className="px-2 mx-1 text-muted bg-black d-block ml-3 font-sm rounded">
            <b className="text-hight"> Pen To Print Publishing</b> <br />
            <span className="font-xsm">Jan 2020 - present</span>
            <p className="font-xsm pb-1">
              &#9658; Full Stack Developer <br /> &#9658; Website:
              <a href="https://www.pentoprintpublishing.in/" target="blanck">
                <u className="text-muted px-1">pentoprintpublishing.in/</u>
              </a>
            </p>
          </span>
          <span className="px-2 mx-1 text-muted bg-black d-block ml-3 font-sm rounded">
            <b className="text-hight"> What After College (WAC)</b> <br />
            <span className="font-xsm">June 2020 - present</span>
            <p className="font-xsm pb-1">
              &#9658; Mentor <br /> &#9658; Website:
              <a href="https://whataftercollege.com/" target="blanck">
                <u className="text-muted px-1">whataftercollege.com/</u>
              </a>
            </p>
          </span>
        </div>
      </div>
    </Base>
  )
}

export default Home
