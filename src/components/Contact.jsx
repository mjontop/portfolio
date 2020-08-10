import React, { useState } from 'react'
import Base from './Base'

const Home = () => {
  const [sent, setSent] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    content: ''
  })

  const { name, email, content } = values

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values })
    sendMessage({ name, email, content })
      .then((data) => {
        if (data) {
          setSent(true)
          setValues({
            ...values,
            name: '',
            email: '',
            content: ''
          })
        }
      })
      .catch((err) => console.log('Error: ', err.message))
  }
  return (
    <Base>
      <div className="pt-3 row">
        <div className="col-12 col-md-6">
          <h6 className={messageSent(sent)}>Will get back to you Super Soon</h6>
          <h6 className="pl-4 text-muted bg-black mr-3 rounded py-2 ml-2">Get in Touch</h6> <br />
          <form className="pl-2 mr-2 mb-4">
            <label className="d-block text-light" htmlFor="name">
              Name:
            </label>
            <input
              className="d-block rounded text-dark no-focus"
              onChange={handleChange('name')}
              value={name}
              required
              type="text"
              id="name"
            />
            <label className="d-block text-light mt-4" htmlFor="email">
              Email:
            </label>
            <input
              className="d-block rounded text-dark no-focus"
              onChange={handleChange('email')}
              value={email}
              required
              type="email"
              id="email"
            />
            <label className="d-block text-light mt-4" htmlFor="email">
              Message:
            </label>
            <textarea
              className="d-block rounded text-dark no-focus"
              onChange={handleChange('content')}
              required
              type="text"
              value={content}
              rows="4"
              placeholder="Your Message ..."
            ></textarea>
            <input onClick={onSubmit} className="btn btn-bg px-2 mt-1 btn-block " type="submit" value="Send" />
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
            <i className="fa fa-envelope-square" aria-hidden="true"></i>
            <a href="mailto:mjontop0602@gmail.com " className="font-sm pl-2 text-muted mail">
              mjontop0602@gmail.com
            </a>
          </span>
        </div>
      </div>
      {/* <p className="text-light text-center">{JSON.stringify(values)}</p> */}
    </Base>
  )
}

const API = 'http://localhost:1337/api/message/'

const sendMessage = async (message) => {
  console.log(message.name, message.email, message.content)
  try {
    const response = await fetch(`${API}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
    return response.json()
  } catch (err) {
    return console.log(err)
  }
}

const messageSent = (sent) => {
  if (sent) {
    return 'pl-3 bg-success mr-3 rounded py-2 ml-2'
  }
  return 'd-none'
}
export default Home
