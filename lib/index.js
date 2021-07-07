/* eslint-disable max-len */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */

process.env.NODE_ENV = process.env.NODE_ENV || "storybook";

// Change the working directory for correct path resolution
const workingDirectory = process.cwd();
process.chdir(`${workingDirectory}/node_modules/@tilework/mosaic-cra-scripts`)

const { createWebpackDevConfig } = require('@craco/craco');
const { overrideWebpackDev } = require('@tilework/mosaic-craco/lib/features/webpack/override');
const { overrideDevServer } = require('@tilework/mosaic-craco/lib/features/dev-server/override');
const { prepare } = require("../node_modules/@scandipwa/craco/scripts/run");
const { overrideCraPaths } = require('@scandipwa/craco/lib/features/cra-paths/override');

// Restore to the original directory for execution
process.chdir(workingDirectory);

const { cracoPromise, context } = prepare();

const webpackConfig = cracoPromise.then(
        (craco) => {
            overrideCraPaths(craco, context);
            overrideWebpackDev(craco, context);
            overrideDevServer(craco, context);
        
            return createWebpackDevConfig(craco);
        }
);

module.exports = webpackConfig;
