import React from 'react'
import { Link } from 'react-router-dom'

function PortfolioHeader() {
  return (
    <div className='portfolio-header'>
    <div className='portfolio-header-title'>
        Portfolio
    </div>
    <span className="portfolio-header-intro">
      Here is my apps
    </span>
    <button className="portfolio-header-my-management-btn">
      <Link to="/my-management">My Management</Link>
    </button>
  </div>
  )
}

export default PortfolioHeader