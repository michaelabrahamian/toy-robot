import { Interface as ReadlineInterface } from 'readline';
import { ToyRobot } from './ToyRobot';
import { InputHandler } from './types/InputHandler';

export const configureInputListener = (
  readline: ReadlineInterface,
  inputHandler: InputHandler,
  toyRobot: ToyRobot
): void => {
  readline.setPrompt('Enter command > ');

  // Set input listener, waiting for user to click enter, and pass input to the handler
  readline.on('line', (input: string) => {
    console.log(inputHandler(input, toyRobot));

    // Listen to the next submitted line
    readline.prompt();
  });

  readline.on('close', () => {
    console.log('\r\nToy Robot shutting down...');
    process.exit();
  });

  readline.prompt();
};
