import { publicIpv4 } from 'public-ip';
import { CloseContactOnClickOutside, ElementId } from '../../common/function/functions';
import { closeAll } from '../../common/store/contactSlice';

function preventDefault(event) {
    event.preventDefault();
}
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
window.addEventListener(
    "onwheel", 
    () => null, 
    Object.defineProperty(
        {}, 'passive', { get: () => { supportsPassive = true; } },
    )
);
} catch(e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

/**
 * this function to enable scroll action event of the entire app
 */
function enableScroll() {
    window.removeEventListener(wheelEvent, preventDefault);
}

/**
 * this function to disable scroll action event of the entire app
 */
function disableScroll() {
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
}


const getUserData = async () => {
    console.log(await publicIpv4());
}


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

const scrollWorkingProjectsByOnWheel = (event) => {
    const appWorkingCardContainerElement = document.getElementById(ElementId.AppWorkingCardContainer)
    if (appWorkingCardContainerElement) {
      appWorkingCardContainerElement.scrollLeft += event.deltaY;
    }
}

const closeContactPopUpWhetherClickOutsise = (event, dispatch) => {
    const classLists = event.target.classList;
    const found = CloseContactOnClickOutside.find((item: string) => classLists.contains(item))
    if (!found) { dispatch(closeAll()) }
}

const handleShowFooterWhetherOnScrollEvent = (event, setFooterCallback) => {
    if (event.ctrlKey || event.shiftKey || event.altKey
      || event.target.className?.includes('no-wrap')) {
    }
    else {
      if (event.deltaY > 0 && isAtBottom()) {
        setFooterCallback(true)
      } else if (event.deltaY < 0) {
        setFooterCallback(false)
      }
    }
}
export {getUserData, disableScroll, enableScroll, isAtBottom, scrollWorkingProjectsByOnWheel, closeContactPopUpWhetherClickOutsise, handleShowFooterWhetherOnScrollEvent }