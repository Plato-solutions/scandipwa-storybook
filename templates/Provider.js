/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import injectStaticReducers from '../node_modules/@scandipwa/scandipwa/src/store';
import { getStore } from '../node_modules/@scandipwa/scandipwa/src/util/Store';

/** @namespace ScandiLibTest/Provider/ProviderWrapper */
export const ProviderWrapper = ({ children }) => {
    const store = getStore();
    injectStaticReducers(store);
    return (
        <MemoryRouter initialEntries={ ['/'] }>
            <Provider store={ store } key="redux">{ children }</Provider>
        </MemoryRouter>
    );
};

export default Provider;
