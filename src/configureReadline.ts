import { Interface as ReadlineInterface } from 'readline';
import { handleInput } from './handleInput';

export const configureReadline = (readline: ReadlineInterface): void => {
  readline.setPrompt('Enter command > ');

  // set input listener
  readline.on('line', (input: string) => {
    handleInput(input);
    readline.prompt();
  });

  readline.on('close', () => {
    console.log('Toy Robot shutting down...');
    process.exit();
  });

  readline.prompt();
};
