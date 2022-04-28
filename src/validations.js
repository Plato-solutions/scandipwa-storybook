const path = require('path');
const fs = require('fs');
const colors = require('colors');

const storybookDir = '/.storybook';
const storybookMainJs = path.join(process.cwd(), `${storybookDir}/main.js`);

/**
 * Check whether Storybook is already installed in project
 */

const isStorybookExists = () => {
	return new Promise((resolve) => {
		if (fs.existsSync(storybookMainJs)) {
			resolve(true);
		} else {
			console.log(
				'✗ Seems like storybook is not installed in your project. Install it by running:\n'
					.red
			);
			console.log('npx sb init\n'.green);
			reject("Storybook is not installed.");
		}
	});
};

const isScandiBasedProject = () => {
	return new Promise((resolve) => {
		const { scandipwa = {} } =
			require(path.join(process.cwd(), './package.json')) || {};
		const validTypes = ['theme', 'extension'];

		resolve(validTypes.includes(scandipwa.type));
	});
};

const isValidProject = () => {
    return Promise.all([isStorybookExists(), isScandiBasedProject()]).then((values) => {
        return values.every((bool) => bool)
    })
}

module.exports = { isValidProject };
