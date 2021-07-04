/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import React from 'react';

import Logo from '../component/Logo/Logo.component';

export default {
    title: 'ScandiPWA/Logo',
    component: Logo
};

/** @namespace ScandipwaStorybook/Stories/Logo/Stories/Template */
export const Template = (args) => <Logo { ...args } />;
