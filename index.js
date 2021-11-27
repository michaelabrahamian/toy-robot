const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display info
console.log("Toy Robot booting up...");
console.log("Available commands:");
console.log("- PLACE X,Y,F");
console.log("    - X and Y are the new coordinates");
console.log("    - F is the new direction to face");
console.log("- MOVE");
console.log("- LEFT");
console.log("- RIGHT");
console.log("- REPORT");

// set input listener
rl.on("line", (cmd) => {
  console.log("Running " + cmd);
  rl.prompt();
});

rl.on("close", () => {
  console.log("Toy Robot shutting down...");
  process.exit();
});

rl.setPrompt("Enter command > ");

rl.prompt();
