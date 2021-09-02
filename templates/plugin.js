module.exports = `//* eslint-disable max-len */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const originalCWD = process.cwd();
process.chdir(\`\${originalCWD}/node_modules/@tilework/mosaic-cra-scripts\`);

const { initialize } = require('@tilework/mosaic-craco/scripts/script');

const { overrideWebpackDev } = require('@tilework/mosaic-craco/lib/features/webpack/override');
const { overrideDevServer } = require('@tilework/mosaic-craco/lib/features/dev-server/override');

process.chdir(originalCWD);

const {craco, context} = initialize();

const config = craco.then(
    (cracoConfig) => {
        overrideWebpackDev(cracoConfig, context);
        overrideDevServer(cracoConfig, context);
    }
);

module.exports = config;
`;
