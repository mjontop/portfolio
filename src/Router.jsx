import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'
import defaultError from './components/defaultError'
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path="*" exact component={defaultError} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
