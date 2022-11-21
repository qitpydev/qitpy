import { ElementId } from "../../../common/function/functions";

const setDefaultValueForScrollPosition = () => {
    const appWorkingCardContainerElement = document.getElementById(ElementId.AppWorkingCardContainer)
    if (appWorkingCardContainerElement) {
        appWorkingCardContainerElement.scrollLeft += 50;
    }
}
export {setDefaultValueForScrollPosition}