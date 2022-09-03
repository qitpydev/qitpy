import React, { useState } from 'react'
import PortfolioHeader from '../../components/Portfolio/PortfolioHeader/PortfolioHeader';
import PortfolioContent from '../../components/Portfolio/PortfolioContent/PortfolioContent';
import PortfolioFooter from '../../components/Portfolio/PortfolioFooter/PortfolioFooter';
import './Portfolio.scss'
import { BsChevronDoubleDown } from 'react-icons/bs';

function Portfolio() {

  const [showFooterOn, setShowFooterOn] = useState(false)

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
      <BsChevronDoubleDown className='portfolio-scroll-wrapper'/>
      <BsChevronDoubleDown className='portfolio-scroll-wrapper-2'/>
    </div>
  )
}

export default Portfolio