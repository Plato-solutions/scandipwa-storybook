/* eslint-disable react/prop-types */
import React, {Suspense} from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import injectStaticReducers from '@scandipwa/scandipwa/src/store';
import { getStore } from '@scandipwa/scandipwa/src/util/Store';

export const ProviderWrapper = ({ children }) => {
    const store = getStore();
    injectStaticReducers(store);
    return (
        <Suspense fallback={"Loading..."}>
            <MemoryRouter initialEntries={ ['/'] }>
                <Provider store={ store } key="redux">{ children }</Provider>
            </MemoryRouter>
        </Suspense>
    );
};

export default Provider;