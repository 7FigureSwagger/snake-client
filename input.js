const stdin = process.stdin;
const stdout = process.stdout;

const setupInput = function() {
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding("utf8");
	stdin.resume();
	stdin.on(handleUserInput(key));
	return stdin;
};

const handleUserInput = function() {
	stdin.on("data", (key) => {
		if (key === "\u0003") {
			process.exit();
		}
	});
};

const inpObj = { setupInput };
module.exports = setupInput;
