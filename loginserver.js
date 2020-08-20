const H1Z1servers = require("h1z1-server");
var server = new H1Z1servers.LoginServer(
  295110, // <- AppID
  "dev", // <- environment
  false, // <- using MongoDB (boolean)
  1115, // <- server port
  "dds", // <- loginkey
  true // <- Use spam glitch
);
server.start();
