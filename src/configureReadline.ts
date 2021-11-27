import { Interface as ReadlineInterface } from "readline";

export const configureReadline = (readline: ReadlineInterface) => {
  readline.setPrompt("Enter command > ");

  // set input listener
  readline.on("line", (cmd: string) => {
    console.log("Running " + cmd);
    readline.prompt();
  });

  readline.on("close", () => {
    console.log("Toy Robot shutting down...");
    process.exit();
  });

  readline.prompt();
};
