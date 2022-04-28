const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const colors = require('colors');

const { writeFile, createFiles } = require('./file-actions');

const directory = path.join(process.cwd(), '/src/stories');
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
    return new Promise((resolve) => {
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
            });
        });
        console.log('✓ All stories removed successfully.'.green);
        resolve();
    });
};

/**
* Inject all necessary configuration files into .storybook folder.
*/
const overrideExistingSbConfig = () => {
	return new Promise((resolve) => {
		console.log('\nInjecting config files to the .storybook'.green);
		const configFilesPath = path.join(__dirname, '../configuration-files/');
		const writePath = path.join(process.cwd(), './.storybook');

		createFiles(configFilesPath, writePath, writeFile);
		resolve();
	});
};

const installPackages = () => {
	return new Promise((resolve) => {
		console.log('\nInstalling workbox-webpack-plugin\n'.cyan);
		shell.exec(`yarn add workbox-webpack-plugin@5.1.4`, () => {
			console.log('\n✓ Package installed.'.green);
			resolve();
		});
	});
};

module.exports = {
    removeStories,
    overrideExistingSbConfig,
    installPackages
};