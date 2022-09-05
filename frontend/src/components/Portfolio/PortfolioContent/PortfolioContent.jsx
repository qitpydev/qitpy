import React, {useEffect, useMemo, useState, useRef, useCallback} from 'react'
import './PortfolioContent.scss'
import PortfolioContentAvatar from './PortfolioContentAvatar/PortfolioContentAvatar.jsx'
import PortfolioContentBesides from './PortfolioContentBesides/PortfolioContentBesides';

function PortfolioContent() {
  return (
    <div className='portfolio-content'>
      <PortfolioContentAvatar />
      <PortfolioContentBesides />
    </div>
  )
}

export default PortfolioContent;