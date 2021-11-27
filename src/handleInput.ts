import { cleanInput } from './utils/cleanInput';
import { Command, CommandsWithArgs } from './types/Command';

export const handleInput = (input: string): void => {
  const parsedInput = cleanInput(input);

  const commandAndAnyArgs = parsedInput.split(' ');
  const command = commandAndAnyArgs[0] as Command;
  const hasArguments = commandAndAnyArgs.length > 1;

  hasArguments
    ? handleCommandWithArgs(command, commandAndAnyArgs.slice(1))
    : handleCommandWithoutArgs(command);
};

const handleCommandWithoutArgs = (command: Command) => {
  switch (command) {
    case Command.MOVE:
      console.log('MOVE');
      break;
    case Command.LEFT:
      console.log('LEFT');
      break;
    case Command.RIGHT:
      console.log('RIGHT');
      break;
    case Command.REPORT:
      console.log('REPORT');
      break;
    default:
      // check if the command required argument(s)
      if (CommandsWithArgs.includes(command)) {
        console.log('this command requires argument(s)');
      } else {
        console.log('invalid command');
      }
  }
};

const handleCommandWithArgs = (command: Command, args: Array<string>) => {
  switch (command) {
    case Command.PLACE:
      console.log('PLACE');
      console.log('args', args);
      break;
    default:
      console.log('invalid command');
  }
};
