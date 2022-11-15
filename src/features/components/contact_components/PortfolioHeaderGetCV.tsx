import React from 'react'

import { useDispatch } from 'react-redux';
import { setScreenWrapper } from '../../../common/store/screenWrapperSlice';
import { WrapperItemName } from '../../../common/components/ScreenWrapper/screenWrapeprItems/screenWrapperItems';
import CV from '../CV/CV';
import { renderToStaticMarkup } from "react-dom/server"
import { Download_CV } from '../../../common/function/functions';

const PortfolioHeaderGetCV = () => {
    const dispatch = useDispatch()

    const handleShowPreviewCV = () => {
        dispatch(setScreenWrapper(WrapperItemName.PREVIEW_CV))
    }

    const handleDownloadCV = () => {
      const cv = document.createElement('div')
      cv.innerHTML = `<div>${renderToStaticMarkup(<CV classNames='download-cv' />)}</div>`
      document.body.appendChild(cv)

      Download_CV()
      cv.remove()
    }

    return (
      <div className="portfolio-header-contact-getcv">
        <button className="preview-btn" onClick={handleShowPreviewCV}>Preview</button>
        <button className="download-btn" onClick={handleDownloadCV}>Download</button>
      </div>
    )
}

export default PortfolioHeaderGetCV