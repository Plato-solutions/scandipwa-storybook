/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import React from 'react';

import RangeSelector from '../component/RangeSelector/RangeSelector.component';

export default {
    title: 'ScandiPWA/RangeSelector',
    component: RangeSelector
};

/** @namespace sbScandiFresh/Stories/RangeSelector/Stories/RangeSelectorDefault */
export const RangeSelectorDefault = () => {
    <RangeSelector
      value={ 14 }
      minvalue={ 1 }
      maxValue={ 20 }
      onChangeComplete={ null }
    />;
};
