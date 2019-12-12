import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import 'tachyons'

var App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This is an example of React Router!</p>
      <p>👆Click on one of the nav links above to change pages.</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>My name is Nick Nish.</p>
    </div>
  )
}

function Blog() {
  return <h1>Blog</h1>
}

function Nav() {
  return (
    <nav className="mb5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="dib mh1 blue no-underline">
      {children}
    </Link>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
