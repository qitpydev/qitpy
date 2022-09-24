import React from 'react';
import { useDispatch } from 'react-redux';
import { clearScreenWrapper } from '../../../store/screenWrapperSlice';

const PreviewCV = () => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        console.log("e.target.classList", e.target.classList)
        if (!e.target.classList.contains('no-close')) {
            dispatch(clearScreenWrapper())
        }
    }

    return (
        <div id="screen-wrapper" onClick={handleClick}>
            <div id="preview-cv" className='no-close'>
                Preview
            </div>
        </div>
    )
}

export default PreviewCV