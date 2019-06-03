import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import App from './App'
import Settings from './Settings'

function About () {
  return <h2>About</h2>
}

function Users () {
  return <h2>Users</h2>
}

function AppRouter () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/about' component={About} />
          <Route path='/users' component={Users} />
          <Route path='/settings' component={Settings} />
          <Route path='/' component={App} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
