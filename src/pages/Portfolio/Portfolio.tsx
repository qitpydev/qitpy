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
import { ClassNames } from '../../common/function/functions'

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
  function isAtBottom() {
    const ele = document.getElementById("portfolio")
    if (!ele) return false
    var sh = ele.scrollHeight;
    var st = ele.scrollTop;
    var ht = ele.offsetHeight;
    if(st === sh - ht)
        {return true;} 
    else 
        {return false;}
  }
  const handleOnScroll = (event) => {
    // no-wrapper
    if (event.ctrlKey || event.shiftKey || event.altKey
      || event.target.className?.includes('no-wrap')) {
    }
    else {
      console.log("Event", event)
      if (event.deltaY > 0 && isAtBottom()) {
        setShowFooterOn(true)
      } else if (event.deltaY < 0) {
        setShowFooterOn(false)
      } 
    }

    /**
     * using the scroll value to verify that user scroll down or up
     * this section handle App-working
     */
    if (event.target.className?.includes(ClassNames.scrollHorizontal)) {
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
    <div className='portfolio' id='portfolio' /*onWheel={handleOnScroll}*/ onClick={handleOnClick}>
      { !showFooterOn && <PortfolioHeader   /> }
      { !showFooterOn && <PortfolioContent  /> }
      {  showFooterOn && <PortfolioFooter   /> }
      {/* <PortfolioScrollWrapper direction={showFooterOn? 'up' : 'down'}/> */}
    </div>
  )
}

export default Portfolio