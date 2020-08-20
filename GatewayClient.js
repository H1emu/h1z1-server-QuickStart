const h1serv = require("h1z1-server");

var Gateway_client = new h1serv.GatewayClient(
  "127.0.0.1",
  1117,
  "fuckdb",
  6666
);
Gateway_client.connect();
Gateway_client.login("41", "sqsq", "LoginUdp_9", "0.0.4");
