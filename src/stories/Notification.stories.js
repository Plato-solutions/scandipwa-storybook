/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import React from 'react';

import Notification from '../component/Notification/Notification.component';

export default {
    title: 'ScandiPWA/Notification',
    component: Notification
};

/** @namespace ScandipwaStorybookPlugin/Stories/Notification/Stories/Template */
export const Template = (args) => <Notification { ...args } />;

export const defaultNotification = Template.bind({});
defaultNotification.args = {
    notificationId: 'alert-message',
    notification: {
        msgText: 'Hello I\'m alert',
        msgType: 'success',
        msgDebug: 'Hello I\'m alert'
    },
    onHideNotification: () => {}
};
