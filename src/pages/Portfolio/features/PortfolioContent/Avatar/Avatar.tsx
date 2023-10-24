import React from 'react'
import avatar from "../../../images/portfolio-avatar.jpg";
import { InfoData } from '../../../../../data';
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
        <img src={avatar} alt="Avatar" className='portfolio-avatar-image' />
        <div className="portfolio-avatar-info">
            {renderInfoData(InfoData)}
        </div>
    </div>
  )
}

export default Avatar