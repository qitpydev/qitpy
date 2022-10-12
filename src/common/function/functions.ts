import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const classNames: { [key:string]: string } = {
    noWrap: "no-wrap",
    scrollHorizontal: "scroll-horizontal",
    noClose: "no-close",
}

export const elementId: { [key:string]: string } = {
    AppWorkingCardContainer: "app_working-card-container",
    CV: "CV"
}

export const recursiveToAddClassNameWith = (elementId: string, className: string) => {
    const elementRoot = document.getElementById(elementId)
    if (elementRoot)
        recursive(elementRoot, className)
}

const recursive = (element: HTMLElement, className: string) => {
    element?.classList.add(className)
    if (element)  {
        for (const child of element?.children) {
            recursive(child as HTMLElement, className)
        }
    }
}

export const Download_CV = () => {
    var htmlObject = document.querySelector(`#${elementId.CV}`)
    html2canvas(htmlObject as HTMLElement).then((canvas) => {
        const img = canvas.toDataURL('image/jpeg')
        const pdf = new jsPDF()
        pdf.addImage(img, 0, 0, 210, 297)
        pdf.save('maitocode_CV.pdf')
    })
}

