#!/usr/bin/env node
const { Worker } = require("worker_threads");
new Worker(`${__dirname}/loginserver2016.js`);
new Worker(`${__dirname}/ZoneServer2016.js`);
