#!/usr/bin/env node

const { removeStories, configurateMainJs, overrideExistingSbConfig, installPackages } = require('./action-controller');

const run = async () => {
    let success = await removeStories();
    if(success) {
        await configurateMainJs();
        await overrideExistingSbConfig();
        await installPackages();
        console.log("All done".green);
    }
};

run();
