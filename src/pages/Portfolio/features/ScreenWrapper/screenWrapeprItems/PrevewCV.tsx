import React from 'react';
import { useDispatch } from 'react-redux';
import { ClassNames } from '../../../common/function/functions';
import { clearScreenWrapper } from '../../../common/store/screenWrapperSlice';
import CV from '../../components/CV/CV';


/**
 * Preview of the CV when user click 'preview CV'
 */
const PreviewCV = () => {
    const dispatch = useDispatch()

    /**close the wrapper of PreviewCV */
    const handleClickOutside = (e) => {
        if (!e.target.classList.contains(ClassNames.noClose)) {
            dispatch(clearScreenWrapper())
        }
    }

    /**
     * ClassNames.noClose, that mean will be
     * close wheather user click on this component
     */
    return (
        <div id="screen-wrapper" onClick={handleClickOutside}>
            <div id="preview-cv"
            className={ClassNames.noClose}
            style={{
                'transform': 'scale(0.5) translateY(-57%)',
                }}>
                <CV classNames={ClassNames.noClose}/>
            </div>
        </div>
    )
}

export default PreviewCV