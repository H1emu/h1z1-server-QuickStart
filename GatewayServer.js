const h1serv = require("h1z1-server");

var Gateway = new h1serv.GatewayServer("LoginUdp_9", 7533, "fuckdb");

Gateway.start();
