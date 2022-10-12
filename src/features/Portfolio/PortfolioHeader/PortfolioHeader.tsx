import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PortfolioHeader.scss'
import PortfolioHeaderQuote from './PortfolioHeaderQuote/PortfolioHeaderQuote';
import PortfolioContact from './PortfolioContact/PortfolioContact';

function PortfolioHeader() {
  return (
    <div className='portfolio-header'>
      <div className='portfolio-header-logo'>
          LOGO
      </div>
      <div className="portfolio-header-quote">
        <PortfolioHeaderQuote />
      </div>
      <PortfolioContact />
  </div>
  )
}

export default PortfolioHeader