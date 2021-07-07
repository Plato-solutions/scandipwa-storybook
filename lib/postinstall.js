#!/usr/bin/env node
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-throw-literal */
/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
const fs = require('fs');
const shell = require('shelljs');
const colors = require('colors');
const path = require('path');

const templates = require('../templates/template');

const { storybookMainJs, removeStories, configurateMainJs } = require('./configurateStorybook');

const APP_DIRECTORY = path.join(process.cwd(), '../../');

const applyStorybookChanges = () => new Promise((resolve) => {
    if (fs.existsSync(storybookMainJs)) {
        removeStories();
        configurateMainJs();
        resolve(true);
    } else {
        resolve(false);
    }
});

const START_CONFIG = async () => {
    const success = await applyStorybookChanges();
    if (!success) {
        console.log('Make sure you have Storybook installed. Install it by running `npx sb init`'.red);
        return false;
    }
    cdIntoStorybookDirectory();
    console.log('All done');
};

START_CONFIG();

const cdIntoStorybookDirectory = () => new Promise((resolve) => {
    shell.exec('cd .storybook/', () => {
        resolve();
    });
});

const updateStorybookTemplates = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(templates).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/src/${fileName}`, templates[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }
