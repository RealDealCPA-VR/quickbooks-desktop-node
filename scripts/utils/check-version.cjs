'use strict';

const versionRegex = /^(\d+)\.(\d+)\.(\d+)/;
const fs = require('fs');
const path = require('path');

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'package.json'), 'utf8'));
const packageVersion = packageJson.version;

if (!versionRegex.test(packageVersion)) {
  throw new Error(`Invalid package version: ${packageVersion}`);
}

const nodeVersion = process.versions.node.match(versionRegex);
if (!nodeVersion) {
  throw new Error('Invalid Node.js version');
}

const nodeMajor = parseInt(nodeVersion[1], 10);
if (nodeMajor < 18) {
  throw new Error('Node.js version must be at least 18.00.0');
}

const packageEngines = packageJson.engines || {};
if (packageEngines.node) {
  const enginesVersion = packageEngines.node.match(versionRegex);
  if (!enginesVersion) {
    throw new Error(`Invalid node version in engines: ${packageEngines.node}`);
  }
  if (parseInt(enginesVersion[1], 10) > nodeMajor) {
    throw new Error(`Node.js version (${nodeVersion[0]}) is below the minimum version required by package engines (${enginesVersion[0]})`);
  }
}
