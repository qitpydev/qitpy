import React from 'react'

import { useDispatch } from 'react-redux';
import { setScreenWrapper } from '../../../../../app/screenWrapperSlice';
import { WrapperItemName } from '../../../../../components/ScreenWrapper/screenWrapeprItems/screenWrapperItems';


const PortfolioHeaderGetCV = () => {
    const dispatch = useDispatch()

    const handleShowPreviewCV = () => {
        dispatch(setScreenWrapper(WrapperItemName.PREVIEW_CV))
    }

    const handleDownloadCV = () => {
        alert('download clicked!')
    }

    return (
      <div className="portfolio-header-contact-getcv">
        <button className="preview-btn" onClick={handleShowPreviewCV}>Preview</button>
        <button className="download-btn" onClick={handleDownloadCV}>Download</button>
      </div>
    )
}

export default PortfolioHeaderGetCV