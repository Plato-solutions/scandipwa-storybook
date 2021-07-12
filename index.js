#!/usr/bin/env node

const { removeStories, configurateMainJs, overrideExistingSbConfig } = require('./action-controller');

const run = async () => {
    let success = await removeStories();
    if(success) {
        await configurateMainJs();
        await overrideExistingSbConfig();
        console.log("All done".green);
    }
};

run();
