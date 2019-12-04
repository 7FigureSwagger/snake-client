const net = require("net");
const { connect } = require("./client");
const stdin = process.stdin;
const stdout = process.stdout;
/**
 * Establishes connection with the game server
 */

console.log("Connecting ...");

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })
}

handleUserInput();
setupInput();
connect();
