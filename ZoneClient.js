const h1serv = require("h1z1-server");

var Zone = new h1serv.ZoneClient(
  "localhost",
  1117,
  "test",
  2,
  "ok",
  "udp9",
  "0.2",
  6782
);

Zone.connect();
