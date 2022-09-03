import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioHeader from '../../components/Portfolio/PortfolioHeader/PortfolioHeader';
import PortfolioContent from '../../components/Portfolio/PortfolioContent/PortfolioContent';
import PortfolioFooter from '../../components/Portfolio/PortfolioFooter/PortfolioFooter';

function Portfolio() {

  const [onFooter, setOnFooter] = useState(false)

  const handleOnScroll = () => {
    
  }

  return (
    <div className='portfolio' onScroll={handleOnScroll}>
      <PortfolioHeader />
      <PortfolioContent />
      <PortfolioFooter />
    </div>
  )
}

export default Portfolio