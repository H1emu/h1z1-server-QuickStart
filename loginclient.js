const H1Z1servers = require("h1z1-server");

var client = new H1Z1servers.LoginClient(
  "295110",
  "dev",
  "127.0.0.1",
  "1115",
  "dds", // <- loginkey
  "4851"
);
client.connect();
