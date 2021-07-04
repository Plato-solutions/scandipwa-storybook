/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import React from 'react';

import RangeSelector from '../component/RangeSelector/RangeSelector.component';

export default {
    title: 'ScandiPWA/RangeSelector',
    component: RangeSelector
};

/** @namespace ScandipwaStorybook/Stories/RangeSelector/Stories/Template */
export const Template = (args) => <RangeSelector { ...args } />;

export const RangeSelectorDefault = Template.bind({});
RangeSelectorDefault.args = {
    value: 14,
    minValue: 1,
    maxValue: 20,
    onChangeComplete: () => {}
};
