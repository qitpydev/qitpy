import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { renderToStaticMarkup } from "react-dom/server"
import { useEffect } from 'react';

function CV() {
    const JsxContent = () => {
        return (
            <h1>HIHI</h1>
        )
    }

    useEffect(() => {
        // const CV_Element = renderToStaticMarkup(<JsxContent />)
        var htmlObject = document.querySelector('#app_working-card-container')
        // htmlObject.innerHTML = CV_Element;
        html2canvas(htmlObject as HTMLElement).then((canvas) => {
            const img = canvas.toDataURL('image/jpeg')
            const pdf = new jsPDF()
            pdf.addImage(img, 0, 0, 500, 500)
            pdf.save('CV.pdf')
        })
    }, [])

  return (
    <div>CV</div>
  )
}

export default CV