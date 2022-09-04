import React from 'react'
import './PortfolioContent.scss'
import PortfolioContentAvatar from './PortfolioContentAvatar/PortfolioContentAvatar.jsx'
import Globe from 'react-globe.gl';
function PortfolioContent() {
  return (
    <div className='portfolio-content'>
      <PortfolioContentAvatar />
      <Globe
  />
    </div>
  )
}

export default PortfolioContent