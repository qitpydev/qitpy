import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioContactItem.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../common/store/store'
import { ContactValueName, toggleOne } from '../../../../common/store/contactSlice'


function PortfolioContactItem(props) {
    const {text, element, stateSet} = props

    const isShow = useSelector((state: RootState) => state.contact.states[stateSet])
    const dispatch = useDispatch()

    return (
    <div className="portfolio-header-contact-item">
        <div className="portfolio-header-contact-item-text"
            onClick={() => dispatch(toggleOne(stateSet))}
        >
            {text}
        </div>
        { isShow && renderItemDetail(element)}
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
    stateSet: PropTypes.oneOf(Object.values(ContactValueName))
}

export default PortfolioContactItem