#!/usr/bin/env node

const {
    removeStories,
    overrideExistingSbConfig,
    installPackages
} = require('./src/action-controller');
const { isValidProject } = require('./src/validations');

const run = async () => {
    const isValid = await isValidProject();
    if(isValid) {
        await removeStories()
        await overrideExistingSbConfig();
        await installPackages();
        console.log("All done".green);
    }
};

run();
