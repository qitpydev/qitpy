import React, { useEffect, useState } from 'react'
import PortfolioHeader from '../../features/Portfolio/PortfolioHeader/PortfolioHeader';
import PortfolioContent from '../../features/Portfolio/PortfolioContent/PortfolioContent';
import PortfolioFooter from '../../features/Portfolio/PortfolioFooter/PortfolioFooter';
import './Portfolio.scss'
import PortfolioScrollWrapper from '../../features/Portfolio/PortfolioScrollWrapper/PortfolioScrollWrapper';
import { CloseContactOnClickOutside } from './setting';
import { useDispatch } from 'react-redux';
import { closeAll } from '../../common/store/contactSlice';
import * as FUNC from '../../common/function/functions'
import axios from 'axios';
import { object } from 'prop-types';
import { publicIpv4 } from 'public-ip';
import CV from '../../features/Portfolio/components/CV/CV';

function Portfolio() {
  const [showFooterOn, setShowFooterOn] = useState(false);
  const dispatch = useDispatch();

  const getData = async () => {
    console.log(await publicIpv4());
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()
  }, [])

  /** Handle scroll to: Footer || Header_Body */
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

    // wrapper-horizontal
    if (event.target.className?.includes("scroll-horizontal")) {
      const appWorkingCardContainerElement = document.getElementById(FUNC.elementId.AppWorkingCardContainer)
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