import { configureReadline } from "./src/configureReadline";
import readline from "readline";

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

configureReadline(rl);
