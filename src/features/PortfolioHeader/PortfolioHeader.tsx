import React from 'react'
import './PortfolioHeader.scss'
import PortfolioHeaderQuote from './PortfolioHeaderQuote/PortfolioHeaderQuote';
import PortfolioContact from './PortfolioContact/PortfolioContact';
import logo from '../../images/favicon.png';

function PortfolioHeader() {
  return (
    <div className='portfolio-header'>
      <div className='portfolio-header-logo'>
          <img src={logo}/>
      </div>
      <div className="portfolio-header-quote">
        <PortfolioHeaderQuote />
      </div>
      <PortfolioContact />
  </div>
  )
}

export default PortfolioHeader