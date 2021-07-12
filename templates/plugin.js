module.exports = `/* eslint-disable max-len */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const originalCWD = process.cwd();
process.chdir(\`\${originalCWD}/node_modules/@tilework/mosaic-cra-scripts\`);

const { createWebpackDevConfig } = require('@craco/craco');

const { findArgsFromCli } = require('@tilework/mosaic-craco/lib/args');

// Make sure this is called before "paths" is imported.
findArgsFromCli();

const { log } = require('@tilework/mosaic-craco/lib/logger');

const { getCraPaths } = require('@tilework/mosaic-craco/lib/cra');

const { loadCracoConfigAsync } = require('@tilework/mosaic-craco/lib/config');
const { overrideWebpackDev } = require('@tilework/mosaic-craco/lib/features/webpack/override');
const { overrideDevServer } = require('@tilework/mosaic-craco/lib/features/dev-server/override');
const { overrideCraPaths } = require('@tilework/mosaic-craco/lib/features/cra-paths/override');
const { validateCraVersion } = require('@tilework/mosaic-craco/lib/validate-cra-version');

log('Override started with arguments: ', process.argv);
log('For environment: ', process.env.NODE_ENV);

const context = {
    env: process.env.NODE_ENV
};

process.chdir(originalCWD);

const config = loadCracoConfigAsync(context).then(
/** @namespace ScandipwaStorybook/Start/loadCracoConfigAsync/then */
    (craco) => {
        validateCraVersion(craco);

        context.paths = getCraPaths(craco);
        overrideCraPaths(craco, context);
        overrideWebpackDev(craco, context);
        overrideDevServer(craco, context);

        const webpackConfig = createWebpackDevConfig(craco);
        // start(cracoConfig);

        return webpackConfig;
    }
);

module.exports = config;
`;
