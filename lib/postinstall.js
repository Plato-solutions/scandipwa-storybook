/* eslint-disable max-len */
/* eslint-disable no-throw-literal */
/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
const fs = require('fs');
const path = require('path');

const directory = path.join(process.cwd(), '../../src/stories');

const storybookMainJs = path.join(process.cwd(), '../../.storybook/main.js');

const applyStorybookChanges = () => {
    /**
    * Delete all predefined stories by Storybook to exclude eslint issues
    */

    const defaultStories = [
        'button.css',
        'Button.jsx',
        'Button.stories.jsx',
        'header.css',
        'Header.jsx',
        'Header.stories.jsx',
        'Introduction.stories.mdx',
        'page.css',
        'Page.jsx',
        'Page.stories.jsx'
    ];

    fs.readdir(directory, (err, files) => {
        if (err) {
            throw err;
        }

        files.map((file) => {
            if (defaultStories.includes(file)) {
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) {
                        throw err;
                    }
                });
            }

            return 0;
        });
    });

    /**
    * Append a line that requires working config into main.js
    */

    const data = fs.readFileSync(storybookMainJs); // read existing contents into data
    const fileDescriptor = fs.openSync(storybookMainJs, 'w+');
    const buffer = new Buffer.from(
        'const webpackConfig = require("../node_modules/scandipwa-storybook-plugin");\n\n'
    );

    fs.writeSync(fileDescriptor, buffer, 0, buffer.length, 0); // write new data
    fs.writeSync(fileDescriptor, data, 0, data.length, buffer.length); // append old data

    fs.close(fileDescriptor, (err) => {
        if (err) {
            console.error('Failed to close file', err);
        } else {
            console.log('\n> File Closed successfully');
        }
    });
};

if (fs.existsSync(storybookMainJs)) {
    applyStorybookChanges();
} else {
    throw 'Make sure you have Storybook installed. Install it by running: npx sb init.\n Then install scandipwa-storybook again.';
}
