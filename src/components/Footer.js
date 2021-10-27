import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="text-muted text-center my-1">Developed by Patrick Odey</div>
        <div className="text-center">
          <Router>
            <Link><i className="fab fa-github-square fa-2x mx-2"></i></Link>
            <Link><i class="fab fa-twitter-square fa-2x mx-2"></i></Link>
            <Link><i class="fab fa-linkedin fa-2x mx-2"></i></Link>
          </Router>
        </div>
      </div>
  </footer>
  )
}

export default Footer
