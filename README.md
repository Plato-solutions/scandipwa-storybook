# scandipwa-storybook-plugin
## _A plugin that adds Storybook support to the ScandiPWA Application_

### Powered by:
[![Plato](https://i.ibb.co/w4v9g9d/Plato-Logo.png)](https://www.platosolutions.io/)

## Installation

NodeJS v10.0+ is required;
ScandiPWA Application is required underneath ;
Storybook v6.0+ is required.

In case you dont have any of this requirements -- follow the instructions:

Install NodeJS: [here](https://nodejs.org/en/download/)

Create a ScandiPWA project following the [instructions](https://docs.scandipwa.com/quick-start-guide)

Add Storybook to your ScandiPWA project using [this](https://storybook.js.org/docs/react/get-started/install)

After you have all this installed -- add scandipwa-storybook-plugin to your project running the:

###### For npm:
``` npm install scandipwa-storybook-plugin ```

###### For yarn:
``` yarn add scandipwa-storybook-plugin ```

The plugin will grab all the necessary configuration for you project and inject it into main.js file inside your .storybook directory.

### Test the story

To add a Scandipwa component to your Storybook UI -- use the example below:

#### Override ScandiPWA component

Run `scandipwa override component <scandipwa_component>` script in a console. It will create a component directory inside your src folder.

*Replace <scandipwa_component> with the component name defined inside the ScandiPWA component library*

#### Create a story for a component

Inside your `src/stories` directory create a file `<scandipwa_component>.stories.js`. From this point you're good to go.

Run `yarn storybook` or `npm run storybook` script to start your Storybook UI.

### Story example

`src/component/RangeSelector/RangeSelector.component.js`:

```
import {
    RangeSelector as SourceRangeSelector
} from 'SourceComponent/RangeSelector/RangeSelector.component';

/** @namespace ScandipwaStorybook/Component/RangeSelector/Component/RangeSelectorComponent */
export class RangeSelectorComponent extends SourceRangeSelector {
    // TODO implement logic
}

export default RangeSelectorComponent;
```

`src/stories/RangeSelector.stories.js`:

```
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import React from 'react';

import RangeSelector from '../component/RangeSelector/RangeSelector.component';

export default {
    title: 'ScandiPWA/RangeSelector',
    component: RangeSelector
};

/** @namespace ScandiLibTest/Stories/RangeSelector/Stories/RangeSelectorDefault */
export const RangeSelectorDefault = () => (
  <RangeSelector
    value={ 14 }
    minValue={ 1 }
    maxValue={ 20 }
    onChangeComplete={ null }
  />
);
```

#### The output of the Storybook UI:

[![Storybook UI](https://i.ibb.co/9bBtz0Y/Screen-Shot-2021-07-04-at-14-14-59.png)]
