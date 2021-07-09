/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */

const fs = require('fs');
const path = require('path');
const colors = require('colors');

const templates = require('./templates/template');

const directory = path.join(process.cwd(), '../../src/stories');
const storybookMainJs = path.join(process.cwd(), '../../.storybook/main.js');
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

/**
* Delete all predefined stories by Storybook to exclude eslint issues
*/

const removeStories = () => {
    console.log('Deleting predefined Storybook stories'.green);
    fs.readdir(directory, (err, files) => {
        if (err) {
            throw err;
        }

        files.map((file) => {
            if (defaultStories.includes(file)) {
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) {
                        console.log('✗ Something went wrong.'.red);
                        throw err;
                    }
                });
            }
            console.log('✓ All stories removed successfully.'.green);
            return 0;
        });
    });
};

/**
* Append a line that requires working config into main.js
*/

const configurateMainJs = () => {
    console.log('Applying changes to Storybook\'s main.js file.'.green);
    const data = fs.readFileSync(storybookMainJs); // read existing contents into data
    const fileDescriptor = fs.openSync(storybookMainJs, 'w+');
    const buffer = new Buffer.from(
        'const webpackConfig = require("../node_modules/scandipwa-storybook-plugin");\n\n'
    );

    fs.writeSync(fileDescriptor, buffer, 0, buffer.length, 0); // write new data
    fs.writeSync(fileDescriptor, data, 0, data.length, buffer.length); // append old data

    fs.close(fileDescriptor, (err) => {
        if (err) {
            console.error('Failed to close file'.red, err);
        } else {
            console.log('\n> File Closed successfully'.green);
        }
    });
    console.log('✓ main.js file has been modified successfully.'.green);
};

/**
* Override a preview.js file to support react-router and redux;
* Add globals.scss file to apply all the necessary styling for components
*/

const overrideExistingSbConfig = () => {
    console.log('Overriding existing preview.js file.'.green);
    console.log('Configurating styling...'.green);
    console.log('Configurating router...'.green);
    console.log('Configurating redux...'.green);
    Object.keys(templates).forEach((fileName, i) => {
        fs.writeFileSync(`${path.join(process.cwd(), '../../.storybook')}/${fileName}`, templates[fileName], (err) => {
            if (err) {
                return console.log(`${err}`.red);
            }
        });
    });
    console.log('✓ Configuration applied.'.green);
};

module.exports = {
    storybookMainJs,
    removeStories,
    configurateMainJs,
    overrideExistingSbConfig
};
