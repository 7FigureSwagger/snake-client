const stdin = process.stdin;
const stdout = process.stdout;
const {connect} = require('./client');

let connection;
let send;


const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
	stdin.setRawMode(true);
	stdin.setEncoding("utf8");
	stdin.resume();
  stdin.on('data', handleUserInput);
	return stdin;
};


const handleUserInput = function(key) {
		if (key === "\u0003") {
      console.log("worked ")
			process.exit();
    }
    
    if (key === '\u0077') {
      connection.write('Move: up')
      // console.log('up')
    }

    if (key === '\u0061') {
      // setInterval(() => {
        connection.write('Move: left');
      // }, 150)
      // console.log('left')
    }

    if (key === '\u0073') {
      // setInterval(() => {
        connection.write('Move: down');
      // }, 150)
      // console.log('down')
    }

    if (key === '\u0064') {
      // setInterval(() => {
        connection.write('Move: right');
      // }, 150)
      // console.log('right')
    }

    if (key === '\u007e') {
      console.log('talk');
        connection.write('Say: gg')
    }
};

module.exports = { setupInput };
