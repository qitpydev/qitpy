import React from 'react';
import PreviewCV from './PrevewCV';


/**
 * Declare what element (or component/items)
 * will be using with the Global-Wrapper
 */
export enum WrapperItemName {
    NONE,
    PREVIEW_CV,
}

const listWrapperItems = {
    [WrapperItemName.NONE]: <></>,
    [WrapperItemName.PREVIEW_CV]: <PreviewCV />,
}

export default listWrapperItems;

