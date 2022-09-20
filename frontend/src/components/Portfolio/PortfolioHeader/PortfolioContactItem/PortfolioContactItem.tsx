import React, {useState} from 'react'
import PropTypes, { element } from 'prop-types'
import './PortfolioContactItem.scss'


function PortfolioContactItem(props) {

    const {text, element} = props;

    const [showItems, setShowItems] = useState(false)

    return (
    <div className="portfolio-header-contact-item">
        <div className="portfolio-header-contact-item-text"
            onClick={() => setShowItems(!showItems)}
        >
            {text}
        </div>
        {showItems && renderItemDetail(element)}
    </div>
    )
}


const renderItemDetail = (items) => {
    return (
        <div className="portfolio-header-contact-item-detail">
            {items}
        </div>
    )
}

PortfolioContactItem.propTypes = {
    text: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
}

export default PortfolioContactItem