/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import React from 'react';

import Breadcrumbs from '../component/Breadcrumbs/Breadcrumbs.component';

export default {
    title: 'ScandiPWA/Breadcrumbs',
    component: Breadcrumbs
};

/** @namespace ScandipwaStorybookPlugin/Stories/Breadcrumbs/Stories/Template */
export const Template = (args) => <Breadcrumbs { ...args } />;

export const BreadcrumbsList = Template.bind({});
BreadcrumbsList.args = {
    breadcrumbs: [
        {
            url: '/home',
            name: 'Home'
        },
        {
            url: '/plato',
            name: 'Plato'
        },
        {
            url: '/test',
            name: 'Test'
        }
    ],
    areBreadcrumbsVisible: true
};
