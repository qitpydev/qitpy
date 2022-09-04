import React, { useEffect, useState } from 'react'
import PortfolioHeader from '../../components/Portfolio/PortfolioHeader/PortfolioHeader';
import PortfolioContent from '../../components/Portfolio/PortfolioContent/PortfolioContent';
import PortfolioFooter from '../../components/Portfolio/PortfolioFooter/PortfolioFooter';
import './Portfolio.scss'
import PortfolioScrollWrapper from '../../components/Portfolio/PortfolioScrollWrapper/PortfolioScrollWrapper.jsx';


function Portfolio() {

  const [showFooterOn, setShowFooterOn] = useState(false);

  const handleOnScroll = (event) => {
    if (event.deltaY > 0) {
      setShowFooterOn(true)
    } else if (event.deltaY < 0) {
      setShowFooterOn(false)
    }
  }

  return (
    <div className='portfolio' onWheel={handleOnScroll}>
      { !showFooterOn && <PortfolioHeader   /> }
      { !showFooterOn && <PortfolioContent  /> }
      {  showFooterOn && <PortfolioFooter   /> }
      <PortfolioScrollWrapper direction={showFooterOn? 'up' : 'down'}/>
    </div>
  )
}

export default Portfolio