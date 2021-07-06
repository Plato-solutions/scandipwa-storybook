# scandipwa-storybook-plugin

## Powered by:
[![Platosolutions](https://i.ibb.co/w4v9g9d/Plato-Logo.png)](https://www.platosolutions.io)

## Installation

### Requirements:
- NodeJS v10.0+ is required;
- ScandiPWA Application is required underneath;
- Storybook v6.0+ is required.

---

#### In case you dont have any of this requirements -- follow the instructions:
- Install NodeJS: [here](https://nodejs.org/en/download/)

- Create a ScandiPWA project following the [instructions](https://docs.scandipwa.com/quick-start-guide)

- Add Storybook to your ScandiPWA project(root directory) using [this](https://storybook.js.org/docs/react/get-started/install)

> **Note**: ScandiPWA and Storybook will NOT work until you install the plugin. A manual on the plugin installation is listed down below.

#### After you have all this installed -- add `scandipwa-storybook-plugin` to your project by running:

##### For npm:
`npm install scandipwa-storybook-plugin --save`

##### For yarn:
`yarn add scandipwa-storybook-plugin`

> The plugin will grab all the necessary configuration for you project and inject it into main.js file inside your .storybook directory. The configuration consists of the complete craco config returned from ScandiPWA.

### Test the story

To add a Scandipwa component to your Storybook UI -- use the example below:

#### Step 1: Override ScandiPWA component

> **Note**: you must have Scandipwa CLI be installed to be able to override components from console. In order you don't have one -- install it or override component manually.

Run `scandipwa override component <scandipwa_component>` script in a console. It will create a component directory inside your src folder.

> Replace <scandipwa_component> with the component name defined inside the ScandiPWA component library

**Example:**

1. Run `scandipwa override component RangeSelector` in a console
2. Choose things to extend in RangeSelector.component.js: Select RangeSelector by pressing <space>
3. What would you like to do with styles?
*Keep* - use predefined styling;
*Extend* - use predefined styling with ability to apply a new ones;
*Override* - Create a completely new styling file without keeping predefined ones.

#### Step 2: Create a story for a component

Inside your `src/stories` directory create a file `<scandipwa_component>.stories.js`. Test your component by writting an apropriate story for it. From this point you're good to go.

In the case of our previous example the file would be named `RangeSelector.stories.js`.

Run `yarn storybook` or `npm run storybook` script to start your Storybook UI.

### Story example

> **Note**: Replace <root_dirname> placeholder inside component and stories files to whatever your root directory name is in CamelCase. **For example:** scandi-storybook-project -> ScandiStorybookProject

`src/component/RangeSelector/RangeSelector.component.js`:

```
import {
    RangeSelector as SourceRangeSelector
} from 'SourceComponent/RangeSelector/RangeSelector.component';

/** @namespace <root_dirname>/Component/RangeSelector/Component/RangeSelectorComponent */
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

/** @namespace <root_dirname>/Stories/RangeSelector/Stories/RangeSelectorDefault */
export const RangeSelectorDefault = () => (
  <RangeSelector
    value={ 14 }
    minValue={ 1 }
    maxValue={ 20 }
    onChangeComplete={ null }
  />
);

```

> **Note**: Copying the code might cause an issue with eslint rules defined by ScandiPWA. The conflicts are mostly spacing issues. To solve them, please use any ESLint extension for your IDE that allow to spectate and fix the issues automatically. Also make sure you have one empty line at the end of your file.

#### The output of the Storybook UI:

<p align="center">
  <img src="https://i.ibb.co/9bBtz0Y/Screen-Shot-2021-07-04-at-14-14-59.png" alt="Storybook UI">
</p>

### Troubleshouting

You may have an error related to `webpack-i18n-import-loader`. This one is currently under resolving.

<p align="center">
  <img src="https://i.ibb.co/YD3Yxsy/webpack-i18n-import-loader.png" alt="i18n-error">
</p>

#### Temporary solve

- Go to the `node_modules/@scandipwa/webpack-i18n-runtime/build-config/config.plugin.js` in your project root directory;
- Find an `addImportInjector` function;
- Change a line `loader: 'webpack-i18n-import-loader'` to `loader: require.resolve('./webpack-i18n-import-loader')`
