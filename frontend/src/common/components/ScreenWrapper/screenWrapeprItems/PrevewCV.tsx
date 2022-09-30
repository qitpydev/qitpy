import React from 'react';
import { useDispatch } from 'react-redux';
import CV from '../../../../features/Portfolio/components/CV/CV';
import { clearScreenWrapper } from '../../../store/screenWrapperSlice';
import * as FUNC from '../../../function/functions'

const PreviewCV = () => {
    const dispatch = useDispatch()

    const handleClickOutside = (e) => {
        if (!e.target.classList.contains(FUNC.classNames.noClose)) {
            dispatch(clearScreenWrapper())
        }
    }

    return (
        <div id="screen-wrapper" onClick={handleClickOutside}>
            <div id="preview-cv" className={FUNC.classNames.noClose}>
                <CV classNames={FUNC.classNames.noClose}/>
            </div>
        </div>
    )
}

export default PreviewCV