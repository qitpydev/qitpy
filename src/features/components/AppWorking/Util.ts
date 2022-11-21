import { ElementId } from "../../../common/function/functions";

const setDefaultValueForScrollPosition = (value) => {
    const appWorkingCardContainerElement = document.getElementById(ElementId.AppWorkingCardContainer)
    if (appWorkingCardContainerElement) {
        appWorkingCardContainerElement.scrollLeft += value;
    }
}
export {setDefaultValueForScrollPosition}