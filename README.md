
<div id="top"></div>

<!-- PROJECT LOGO -->

<br />

<div align="center">

<a href="https://www.platosolutions.io/">

<img src="https://i.ibb.co/w4v9g9d/Plato-Logo.png" alt="Logo" />

</a>

<h3 align="center">ScandiPWA & Storybook plugin</h3>

<p align="center">

A plugin that makes your ScandiPWA based project compatible with Storybook

<br />

</div>

<!-- TABLE OF CONTENTS -->

<details>

<summary>Table of Contents</summary>

<ol>

<li>

<a href="#getting-started">Getting Started</a>

<ul>

<li><a href="#prerequisites">Prerequisites</a></li>

<li><a href="#installation">Installation</a></li>

</ul>

</li>

<li>

<a href="#test-the-story">Test the story</a>

<ul>

<li><a href="#override-scandipwa-component">Override ScandiPWA component</a></li>

<li><a href="#create-a-story-for-a-component">Create a story for a component</a></li>

</ul>


</li>

<li>

<a href="#story-example">Story example</a>

<ul>

<li><a href="#the-output-of-the-storybook-ui">The output of the Storybook UI</a></li>

</ul>

</li>

<li><a href="#contributing">Contributing</a></li>

<li><a href="#acknowledgments">Acknowledgments</a></li>

<li><a href="#troubleshooting">Troubleshooting</a></li>

</ol>

</details>

<!-- GETTING STARTED -->

##  Getting Started

The following plugin allows to make your project created on ScandiPWA platform compatible with Storybook library.

By installing this plugin, your project will be adjusted with all the necessary files. The files are not affecting your project sources. The changes will only appear in `.storybook` and `/src/stories` folders.

###  Prerequisites

Before installing the plugin, make sure, the project you're going to bump, has the following:

* NodeJS v14+;

```sh

node -v // --> example: v14.17.6

```
>  **Important**: *node-sass* package is causing issues with the Node version 16+.

* The project is a ScandiPWA based
* Storybook v6.0+ is installed in the project root

###  Installation

> _The plugin will grab all the necessary configuration for you project and inject it into main.js file inside your .storybook directory. The configuration consists of the complete craco config returned from ScandiPWA._

1. Navigate to the project root directory

2. Run an installation script

```sh

npx scandipwa-storybook-plugin

```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

##  Test the story

To add a Scandipwa component to your Storybook UI -- use the example below:

#### Override ScandiPWA component

>  **Note**: you must have Scandipwa CLI be installed to be able to override components from console. In order you don't have one -- install it or override component manually.

Run `scandipwa override component <scandipwa_component>` script in a console. It will create a component directory inside your src folder.

> Replace <scandipwa_component> with the component name defined inside the ScandiPWA component library

**Example:**

1. Run `scandipwa override component RangeSelector` in a console

2. Choose things to extend in RangeSelector.component.js: Select RangeSelector by pressing <space>

3. What would you like to do with styles?

*Keep* - use predefined styling;

*Extend* - use predefined styling with ability to apply a new ones;

*Override* - Create a completely new styling file without keeping predefined ones.

#### Create a story for a component

Inside your `src/stories` directory create a file `<scandipwa_component>.stories.js`. Test your component by writting an apropriate story for it. From this point you're good to go.

In the case of our previous example the file would be named `RangeSelector.stories.js`.

Run `yarn storybook` or `npm run storybook` script to start your Storybook UI.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

##  Story example


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

#### The output of the Storybook UI
<p align="center">
 <img src="https://i.ibb.co/9bBtz0Y/Screen-Shot-2021-07-04-at-14-14-59.png" alt="Storybook UI">
</p>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

##  Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".


1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

##  Acknowledgments

This might be helpful for you:

* [ScandiPWA docs](https://docs.scandipwa.com/)

* [Storybook docs](https://storybook.js.org/docs/react/get-started/introduction)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TROUBLESHOOTING -->

##  Troubleshooting


You may have an error related to `webpack-i18n-import-loader`. This one is currently under resolving.
<p align="center">
 <img src="https://i.ibb.co/YD3Yxsy/webpack-i18n-import-loader.png" alt="i18n-error">
</p>

#### Temporary solve
- Go to the `node_modules/@scandipwa/webpack-i18n-runtime/build-config/config.plugin.js` in your project root directory;
- Find an `addImportInjector` function;
- Change a line `loader: 'webpack-i18n-import-loader'` to `loader: require.resolve('./webpack-i18n-import-loader')`