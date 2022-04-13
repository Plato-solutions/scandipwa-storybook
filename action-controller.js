const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const colors = require('colors');

const templates = require('./templates/template');


const storybookDir = '/.storybook';
const directory = path.join(process.cwd(), '/src/stories');
const storybookMainJs = path.join(process.cwd(), `${storybookDir}/main.js`);
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
 * Check whether Storybook is already installed in project
 */

const isStorybookExists = () => {
    return new Promise((resolve) => {
        if (fs.existsSync(storybookMainJs)) {
            resolve(true);
        } else {
            console.log('✗ Seems like storybook is not installed in your project. Install it by running:\n'.red);
            console.log('npx sb init\n'.green);
            resolve(false);
        }
    })
}

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
* Append a line that requires working config into main.js
*/

const configurateMainJs = () => {
  console.log("\nApplying changes to Storybook's main.js file...".green);
  return new Promise((resolve) => {
    const data = fs.readFileSync(storybookMainJs); // read existing contents into data
    const fileDescriptor = fs.openSync(storybookMainJs, "w+");
    const buffer = new Buffer.from(
      'const webpackConfig = require("./storybook-plugin");\n\n'
    );

    fs.writeSync(fileDescriptor, buffer, 0, buffer.length, 0); // write new data
    fs.writeSync(fileDescriptor, data, 0, data.length, buffer.length); // append old data

    fs.close(fileDescriptor, (err) => {
      if (err) {
        console.error("\nFailed to close file".red, err);
      } else {
        console.log("\n> File Closed successfully".green);
      }
    });
    console.log("\n✓ main.js file has been modified successfully.".green);
    resolve();
  });
};

/**
* Override a preview.js file to support react-router and redux;
* Add globals.scss file to apply all the necessary styling for components
*/

const overrideExistingSbConfig = () => {
    return new Promise((resolve) => {
      console.log("\nOverriding existing preview.js file...".green);
      console.log("\nConfigurating styling...".green);
      console.log("\nConfigurating router...".green);
      console.log("\nConfigurating redux...".green);
      Object.keys(templates).forEach((fileName, i) => {
        fs.writeFileSync(
          `${path.join(process.cwd(), "/.storybook")}/${fileName}`,
          templates[fileName],
          (err) => {
            if (err) {
              return console.log(`${err}`.red);
            }
          }
        );
      });
      console.log("\n✓ Configuration applied successfully.".green);
      resolve();
    });
};

const installPackages = () => {
    return new Promise(resolve=>{
      console.log("\nInstalling workbox-webpack-plugin\n".cyan)
      shell.exec(`yarn add workbox-webpack-plugin@5.4.1`, () => {
        console.log("\n✓ Package installed.".green)
        resolve()
      })
    })
  }

module.exports = {
    isStorybookExists,
    removeStories,
    configurateMainJs,
    overrideExistingSbConfig,
    installPackages
};