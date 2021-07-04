/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import React from 'react';

import Button from '../button';

export default {
    title: 'ScandiPWA/Button',
    component: Button
};

/** @namespace ScandipwaStorybook/Stories/Button/Stories/Template */
export const Template = (args) => <Button { ...args } />;

export const Btn = Template.bind({});
Btn.args = {};
