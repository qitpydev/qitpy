import React from 'react'
import './PortfolioContent.scss'
import avatar from "../../../images/portfolio-avatar.png"

function PortfolioContent() {
  return (
    <div className='portfolio-content'>
      <div className="portfolio-avatar">
        <img src={avatar} alt="kk" />
      </div>
    </div>
  )
}

export default PortfolioContent