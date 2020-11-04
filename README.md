## Usage

run `npm ci` to install dependencies (stable).

to install lastest h1z1-server run `npm update`

run `npm start` to launch a loginserver + a zoneserver ( who are required to play )

run `npm run *NAMEOFSERVER/CLIENT*` the server/client of your choice.

Servers/Clients:

- "login-server"
- "login-client"
- "gateway-server"
- "gateway-client"
- "zone-server"
- "zone-client"

You can modify the parameters of these servers in their respective Javascript files.

Debug Logs will not be displayed under linux with these commands use `Debug logs DEBUG=* node loginserver.js` instead.

# [h1z1-server](https://github.com/QuentinGruber/h1z1-server) [![npm version](http://img.shields.io/npm/v/h1z1-server.svg?style=flat)](https://npmjs.org/package/h1z1-server "View this project on npm")
