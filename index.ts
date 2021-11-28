import { configureInputListener } from './src/configureInputListener';
import readline from 'readline';
import { ToyRobot } from './src/ToyRobot';
import { handleInput } from './src/input/handleInput';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const startupMenu = [
  'Toy Robot booting up...',
  'Available commands:',
  '- PLACE X,Y,F',
  '    - X and Y are the new coordinates',
  '    - F is the new direction to face',
  '- MOVE',
  '- LEFT',
  '- RIGHT',
  '- REPORT',
];

// Log out each line of initial menu
console.log(startupMenu.join('\r\n'));

const toyRobot = new ToyRobot();

// Listen to input and handle commands
configureInputListener(rl, handleInput, toyRobot);
