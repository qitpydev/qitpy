import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * The ClassNames that using for many Components
 */
export const ClassNames: { [key: string]: string } = {
    noWrap: "no-wrap",
    scrollHorizontal: "scroll-horizontal",
    noClose: "no-close",
}

/**
 * The Element_Id that using for many Components
 */
export const ElementId: { [key: string]: string } = {
    AppWorkingCardContainer: "app_working-card-container",
    AppWorkingStripOfCards: "app_working-strip_of_cards",
    CV: "CV",
}

/**
 * The Util function
 * using for add className to component, and add to all the children of it
 * @param elementId parent Element that is needed to add classNames
 * @param className className that will be add to the Elements
 */
export const recursiveToAddClassNameWith = (elementId: string, className: string) => {
    const elementRoot = document.getElementById(elementId)
    if (elementRoot)
        recursive(elementRoot, className)
}
const recursive = (element: HTMLElement, className: string) => {
    element?.classList.add(className)
    if (element) {
        for (const child of element?.children) {
            recursive(child as HTMLElement, className)
        }
    }
}

/**
 * The Util function
 * Download CV to local machine
 */
export const Download_CV = () => {
    var htmlObject = document.querySelector(`#${ElementId.CV}`)
    html2canvas(htmlObject as HTMLElement).then((canvas) => {
        const img = canvas.toDataURL('image/jpeg')
        const pdf = new jsPDF()
        pdf.addImage(img, 0, 0, 210, 297)
        pdf.save('maitocode_CV.pdf')
    })
}


/**
 * The Util function
 * using for get the experience time working
 */
export const getWorkingTimes = () => {
    const firstTime = new Date("2021-06-01")
    const now = new Date()

    const timeWorking = now.getTime() - firstTime.getTime()
    console.log('timeworking', timeWorking);

    const second = Math.floor(timeWorking / 1000)
    const minute = Math.floor(second / 60)
    const hour = Math.floor(minute / 60)
    const day = Math.floor(hour / 24)
    let month = Math.floor(day / 30)
    const year = Math.floor(month / 12)
    month = month % 12

    return `${year} yr & ${month} mos`
}

/**
 * when user click outside of the header, 
 *  close the header popup 
 *  that will display to "none" element have each of the classnames below
 */
 const CloseContactOnClickOutside: Array<string> = [
    "portfolio-header-contact-item-text",
    "no-close"
]

export {CloseContactOnClickOutside}