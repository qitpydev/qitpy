import React, {useState} from 'react'
import PropTypes, { element } from 'prop-types'
import './PortfolioContactItem.scss'


function PortfolioContactItem(props) {

    const {text, element} = props;

    const [showItems, setShowItems] = useState(false)

    return (
    <div className="portfolio-header-contact-item" 
        onClick={() => setShowItems(!showItems)}
        >
        {showItems && element || text}
    </div>
  )
}

PortfolioContactItem.propTypes = {
    text: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
}

export default PortfolioContactItem
