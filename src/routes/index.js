import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Callback from './Callback'
import Home from './Home'

const routes = () => (
  <Router>
    <div>
      <Route exact path='/' render={() => (
        <Redirect to='/home' />
      )} />
      <Route path='/home' component={Home} />
      <Route path='/withings/callback' component={Callback} />
    </div>
  </Router>
)


export default (routes)
