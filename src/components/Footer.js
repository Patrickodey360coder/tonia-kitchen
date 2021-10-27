import React from 'react'
// import { BrowserRouter as Router, a } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <div className="text-muted text-center my-1">Developed by Patrick Odey</div>
        <div className="text-center">
            <a href="https://github.com/Patrickodey360coder" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-2x mx-2"></i></a>
            <a href="https://twitter.com/patrickodey_" target="_blank" rel="noreferrer" ><i class="fab fa-twitter-square fa-2x mx-2"></i></a>
            <a href="https://www.linkedin.com/in/patrick-odey-a5289a184/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin fa-2x mx-2"></i></a>
        </div>
      </div>
  </footer>
  )
}

export default Footer
