import React from 'react'
import PropTypes from 'prop-types'
import './ScreenWrapper.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import listWrapperItems, { WrapperItemName } from './screenWrapeprItems/screenWrapperItems';

function ScreenWrapper() {
    const wrapperState: WrapperItemName = useSelector(
        (state: RootState) => state.screenWrapper.element
    )
    
    return (wrapperState === WrapperItemName.NONE) ? (<></>) 
    : listWrapperItems[wrapperState]
}

ScreenWrapper.propTypes = {
    Element: PropTypes.element,
}

export default ScreenWrapper