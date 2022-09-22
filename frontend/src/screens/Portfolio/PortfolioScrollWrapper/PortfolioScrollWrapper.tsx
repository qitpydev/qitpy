import React from 'react'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
import './PortfolioScrollWrapper.scss'
import PropTypes from 'prop-types';

PortfolioScrollWrapper.propTypes = {
    direction: PropTypes.oneOf(['up', 'down']),
}

const genChevronDoubleIcon = (directionStatus) => {
    if (directionStatus === 'up') {
        return (<>
            <BsChevronDoubleUp className='portfolio-scroll-wrapper-item-2'/>
            <BsChevronDoubleUp className='portfolio-scroll-wrapper-item-1'/>
        </>)
    } else 
    if (directionStatus === 'down') {
        return (<>
            <BsChevronDoubleDown className='portfolio-scroll-wrapper-item-1'/>
            <BsChevronDoubleDown className='portfolio-scroll-wrapper-item-2'/>
        </>)
    }
}

function PortfolioScrollWrapper({direction}) {
  return (
    <div className={`portfolio-scroll-wrapper ${direction}`}>
        {genChevronDoubleIcon(direction)}
    </div>
  )
}

export default PortfolioScrollWrapper