#!/usr/bin/env node
const { Worker } = require("worker_threads");
new Worker(`${__dirname}/loginserver2015.js`);
new Worker(`${__dirname}/ZoneServer2015.js`);
