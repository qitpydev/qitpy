import React, { useEffect, useState } from 'react'
import PortfolioFooter from '../../features/PortfolioFooter/PortfolioFooter';
import './Portfolio.scss'
import PortfolioScrollWrapper from '../../features/PortfolioScrollWrapper/PortfolioScrollWrapper';
import { useDispatch } from 'react-redux';
import { closeAll } from '../../common/store/contactSlice';
import { publicIpv4 } from 'public-ip';
import { CloseContactOnClickOutside, ElementId } from '../../common/function/functions';
import PortfolioContent from '../../features/PortfolioContent/PortfolioContent';
import PortfolioHeader from '../../features/PortfolioHeader/PortfolioHeader';

/**
 * Portfolio Home-Page
 */
function Portfolio() {
  const [showFooterOn, setShowFooterOn] = useState(false);
  const dispatch = useDispatch();

  /**
   * get some stuff data of user,
   * to using for somthings needed
   */
  const getData = async () => {
    console.log(await publicIpv4());
  }
  
  useEffect( () => {
    getData()
  }, [])

  /** 
   * when user:
   *  scroll-down: display the footer screen
   *  scroll-up: display the header & body screen
   */
  const handleOnScroll = (event) => {
    // no-wrapper
    if (event.ctrlKey || event.shiftKey || event.altKey
      || event.target.className?.includes('no-wrap')) {
    }
    else {
      if (event.deltaY > 0) {
        setShowFooterOn(true)
      } else if (event.deltaY < 0) {
        setShowFooterOn(false)
      } 
    }

    /**
     * using the scroll value to verify that user scroll down or up
     */
    if (event.target.className?.includes("scroll-horizontal")) {
      const appWorkingCardContainerElement = document.getElementById(ElementId.AppWorkingCardContainer)
      if (appWorkingCardContainerElement) {
        appWorkingCardContainerElement.scrollLeft += event.deltaY;
      }
    }
  }

  /** handle Close all Contact-items when click outside of the contact **/
  const handleOnClick = (e) => {
    const classLists = e.target.classList;
    const found = CloseContactOnClickOutside.find((item: string) => classLists.contains(item))
    if (!found) { dispatch(closeAll()) }
  }

  /** Render Portfolio*/
  return (
    <div className='portfolio' onWheel={handleOnScroll} onClick={handleOnClick}>
      { !showFooterOn && <PortfolioHeader   /> }
      { !showFooterOn && <PortfolioContent  /> }
      {  showFooterOn && <PortfolioFooter   /> }
      <PortfolioScrollWrapper direction={showFooterOn? 'up' : 'down'}/>
    </div>
  )
}

export default Portfolio