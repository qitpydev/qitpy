import React from 'react';
import PreviewCV from './PrevewCV';

export enum WrapperItemName {
    NONE,
    PREVIEW_CV,
}

const listWrapperItems = {
    [WrapperItemName.NONE]: <></>,
    [WrapperItemName.PREVIEW_CV]: <PreviewCV />,
}

export default listWrapperItems;

