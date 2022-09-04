import React, {useEffect, useMemo, useState, useRef, useCallback} from 'react'
import './PortfolioContent.scss'
import PortfolioContentAvatar from './PortfolioContentAvatar/PortfolioContentAvatar.jsx'

function PortfolioContent() {
  return (
    <div className='portfolio-content'>
      <PortfolioContentAvatar />
    </div>
  )
}

export default PortfolioContent;