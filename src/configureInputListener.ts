import { Interface as ReadlineInterface } from 'readline';
import { handleInput } from './input/handleInput';

export const configureInputListener = (readline: ReadlineInterface): void => {
  readline.setPrompt('Enter command > ');

  // Set input listener, waiting for user to click enter
  readline.on('line', (input: string) => {
    console.log(handleInput(input));

    // Listen to the next submitted line
    readline.prompt();
  });

  readline.on('close', () => {
    console.log('\r\nToy Robot shutting down...');
    process.exit();
  });

  readline.prompt();
};
