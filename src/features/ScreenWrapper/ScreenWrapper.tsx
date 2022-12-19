import React from 'react'
import PropTypes from 'prop-types'
import './ScreenWrapper.scss'
import { useSelector } from 'react-redux';

import listWrapperItems, { WrapperItemName } from './screenWrapeprItems/screenWrapperItems';
import { RootState } from '../../common/store/store';

/**
 * The Global Wrapper
 *
 * if WrapperItemName == NONE: there are no wrappers
 * else: display wrapper items
 */

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
