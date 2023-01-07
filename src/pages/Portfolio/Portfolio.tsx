import React, { useEffect, useState } from 'react'
import PortfolioFooter from './features/PortfolioFooter/PortfolioFooter';
import './Portfolio.scss'
import PortfolioContent from './features/PortfolioContent/PortfolioContent';
import PortfolioHeader from './features/PortfolioHeader/PortfolioHeader';
import * as Util from './utils'
import { useDispatch } from 'react-redux';
import { ClassNames } from './common/function/functions';
import ScreenWrapper from './features/ScreenWrapper/ScreenWrapper';

/**
 * Portfolio Home-Page
 */
function Portfolio() {
  const [showFooterOn, ] = useState(false);
  const dispatch = useDispatch();

  useEffect( () => {
    Util.getUserData()
  }, [])

  /**
   * when user:
   *  scroll-down: display the footer screen
   *  scroll-up: display the header & body screen
   */
  const handleOnScroll = (event) => {
    Util.enableScroll()
    // Util.handleShowFooterWhetherOnScrollEvent(event, setShowFooterOn)

    if (event.target.className?.includes(ClassNames.scrollHorizontal)) {
      Util.disableScroll()
      Util.scrollWorkingProjectsByOnWheel(event)
    }
  }

  /** handle Close all Contact-items when click outside of the contact **/
  const handleOnClick = (event) => {
    Util.closeContactPopUpWhetherClickOutsise(event, dispatch)
  }

  /** Render Portfolio*/
  return (
    <div className='portfolio' id='portfolio' onWheel={handleOnScroll} onClick={handleOnClick}>
        <ScreenWrapper />
      { !showFooterOn && <PortfolioHeader   /> }
      { !showFooterOn && <PortfolioContent  /> }
      {  showFooterOn && <PortfolioFooter   /> }
      {/* <PortfolioScrollWrapper direction={showFooterOn? 'up' : 'down'}/> */}
    </div>
  )
}

export default Portfolio