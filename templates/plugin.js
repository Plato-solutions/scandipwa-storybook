module.exports = `//* eslint-disable max-len */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const originalCWD = process.cwd();
process.chdir(\`\${originalCWD}/node_modules/@tilework/mosaic-cra-scripts\`);

const { createWebpackDevConfig } = require('@scandipwa/craco');

const { getCraPaths } = require('@tilework/mosaic-craco/lib/cra');

const { overrideWebpackDev } = require('@tilework/mosaic-craco/lib/features/webpack/override');
const { overrideDevServer } = require('@tilework/mosaic-craco/lib/features/dev-server/override');
const { overrideCraPaths } = require('@tilework/mosaic-craco/lib/features/cra-paths/override');

const { initialize } = require('@tilework/mosaic-craco/scripts/script');

process.chdir(originalCWD);

const {craco, context} = initialize();

const config = craco.then(craco => {
        context.paths = getCraPaths(craco);
        overrideCraPaths(craco, context);
        overrideWebpackDev(craco, context);
        overrideDevServer(craco, context);

        return createWebpackDevConfig(craco);
})

module.exports = config;
`;
