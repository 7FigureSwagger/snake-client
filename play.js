const net = require("net");
const { connect } = require("./client");
const { inpObj } = require('./client')

/**
 * Establishes connection with the game server
 */

console.log("Connecting ...");


connect();
