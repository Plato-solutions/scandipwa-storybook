#!/usr/bin/env node

const { isStorybookExists, removeStories, configurateMainJs, overrideExistingSbConfig, installPackages } = require('./action-controller');

const run = async () => {
    let success = await isStorybookExists();
    if(success) {
        await removeStories()
        await configurateMainJs();
        await overrideExistingSbConfig();
        await installPackages();
        console.log("All done".green);
    }
};

run();
