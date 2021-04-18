const H1Z1servers = require("h1z1-server");
const { Base64 } = require("js-base64");
var Zone = new H1Z1servers.ZoneServer(
  1117,
  Base64.toUint8Array("F70IaxuU8C/w7FPXY1ibXw==")
);
//server._protocol = new H1Z1servers.ZoneProtocol("ClientProtocol_948"); TODO: add 2016 ClientProtocol
Zone.start();
