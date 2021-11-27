import { Interface as ReadlineInterface } from 'readline';
import { handleInput } from './input/handleInput';

export const configureReadline = (readline: ReadlineInterface): void => {
  readline.setPrompt('Enter command > ');

  // Set input listener, waiting for user to click enter
  readline.on('line', (input: string) => {
    console.log(handleInput(input));

    // Listen to the next submitted line
    readline.prompt();
  });

  readline.on('close', () => {
    console.log('Toy Robot shutting down...');
    process.exit();
  });

  readline.prompt();
};
