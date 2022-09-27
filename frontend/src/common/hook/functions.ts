export const classNames: { [key:string]: string } = {
    noWrap: "no-wrap",
    scrollHorizontal: "scroll-horizontal",
}

export const elementId: { [key:string]: string } = {
    stripOfProjectCard: "strip-of-project-card",
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
