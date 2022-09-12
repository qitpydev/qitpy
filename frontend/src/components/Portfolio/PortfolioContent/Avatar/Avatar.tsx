import React from 'react'
import { infoData } from '../../../../data';
import avatar from "../../../../images/portfolio-avatar.png";
import './Avatar.scss'

const renderInfoData = (info) => {
    return (<p>
    {info.paragraphHeader.map((element, index) => <React.Fragment key={index}>{element}<br/></React.Fragment>)}
    <br />
    {info.paragraphBody.map((element, index) => (<React.Fragment key={index}>{element}<br /></React.Fragment>))}
    <br />
    {info.paragraphFooter.map((element, index, array) => {
        if (array.length === index + 1) {
            return <React.Fragment key={index}>{element}</React.Fragment>
        } else {
            return <React.Fragment key={index}>{element}<br/></React.Fragment>
        }})}
    </p>)
}

function Avatar() {

  return (
    <div className="portfolio-avatar">
        <img src={avatar} alt="kk" className='portfolio-avatar-image' />
        <div className="portfolio-avatar-info">
            {renderInfoData(infoData)}
        </div>
    </div>
  )
}

export default Avatar