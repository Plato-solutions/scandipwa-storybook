module.exports = `/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
const { ProviderWrapper } = require('./Provider');

require('./globals.scss');

const decorators = [
    (Story) => (
      <ProviderWrapper>
        <Story />
      </ProviderWrapper>
    )
];

const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

window.storeList = ['default'];
window.storeRegexText = '\\s';
window.contentConfiguration = {};

module.exports = {
    decorators,
    parameters
};
`;
