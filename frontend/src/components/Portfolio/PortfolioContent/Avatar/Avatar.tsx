import React from 'react'
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

    const info = {
        paragraphHeader: [
            "Hi, my name is Quyet - a young guy that loves Computer, Programming & Technologies."
        ],
        paragraphBody: [
            "I am a Web-Developer, with about 2 years experience, from 2021.",
            "My beginning is Springboot (a Java Framework)",
            "Besides, i can build CI/CD to deploy to VPS or Cloud-Service (Kubernetes) by myself.",
            "In previous projects, i was working as DevOps - FrontEnd - BackEnd roles (but DevOps &BE is my mainly)",
        ],
        paragraphFooter:[
            "I love Python because the ability, strongly, shortly, quickly and intelligence.",
            "Currently, i am interested in to working with ReactJs & Django.",
        ]
    };

  return (
    <div className="portfolio-avatar">
        <img src={avatar} alt="kk" className='portfolio-avatar-image' />
        <div className="portfolio-avatar-info">
            {renderInfoData(info)}
        </div>
    </div>
  )
}

export default Avatar