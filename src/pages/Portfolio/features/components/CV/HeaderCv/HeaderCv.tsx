import React from 'react'
import './HeaderCv.scss'

function HeaderCv() {
  return (
    <div id='header-cv'>
        <div className="header-cv__left">
            <div className="header-cv__left__name">DOAN VAN QUYET</div>
            <div className="header-cv__left__title">PYTHON DEVELOPER</div>
            --- DevOps --- Web Development
            {/* <div className="header-cv__left__jobs">DevOps in Web Development</div> */}
        </div>
        <div className="header-cv__right">
            <div className="header-cv__right__year-of-birth"><span>Year of birth: </span><span>1999</span></div>
            <div className="header-cv__right__gender"><span>Languages: </span><span>Vietnamese/English</span></div>
            <div className="header-cv__right__language"><span>Location: </span><span>VietNam</span></div>
            <div className="header-cv__right__locate"></div>
        </div>
    </div>
  )
}

export default HeaderCv