# [h1z1-server](https://github.com/QuentinGruber/h1z1-server) [![npm version](http://img.shields.io/npm/v/h1z1-server.svg?style=flat)](https://npmjs.org/package/h1z1-server "View this project on npm")

## Usage

To install lastest stable version of h1z1-server run `npm i h1z1-server@latest`

To install the very lastest version of h1z1-server run `npm i h1z1-server@next`


run `npm start` to launch a loginserver + a zoneserver ( who are required to play )

run `npm run *NAMEOFSERVER*` the server of your choice.

Servers:

- "login-server"
- "zone-server"

You can modify the parameters of these servers in their respective Javascript files.

Debug Logs will not be displayed under linux with these commands use `Debug logs DEBUG=* node loginserver.js` instead.

### Docker

For users that known how to use Docker : https://hub.docker.com/r/h1emu/server
