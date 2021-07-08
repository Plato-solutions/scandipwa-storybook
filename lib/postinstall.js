#!/usr/bin/env node
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */

const fs = require('fs');
const path = require('path');
const colors = require('colors');

const { removeStories, configurateMainJs, overrideExistingSbConfig } = require('./fileActions');

const storybookMainJs = path.join(process.cwd(), '../../.storybook/main.js');

if (fs.existsSync(storybookMainJs)) {
    removeStories();

    configurateMainJs();

    overrideExistingSbConfig();
} else {
    throw 'Make sure you have Storybook installed. Install it by running: npx sb init.\n Then install scandipwa-storybook again.'.red;
}
