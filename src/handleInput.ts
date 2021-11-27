import { cleanInput } from './utils/cleanInput';
import { Command, CommandsWithArgs } from './types/Command';
import { TOY_ROBOT } from './singleton';
import { handlePlaceCommand } from './commands/place';
import { validateCommand } from './validation/validateCommand';

export const handleInput = (input: string): string => {
  const parsedInput = cleanInput(input);

  const commandAndAnyArgs = parsedInput.split(' ');
  const command = commandAndAnyArgs[0] as Command;

  try {
    validateCommand(command);
    const hasArguments = commandAndAnyArgs.length > 1;

    return hasArguments
      ? handleCommandWithArgs(command, commandAndAnyArgs.slice(1))
      : handleCommandWithoutArgs(command);
  } catch (error) {
    return (error as Error).message;
  }
};

const handleCommandWithoutArgs = (command: Command): string => {
  switch (command) {
    case Command.MOVE:
      return 'MOVE';
    case Command.LEFT:
      return 'LEFT';
    case Command.RIGHT:
      return 'RIGHT';
    case Command.REPORT:
      try {
        return TOY_ROBOT.report();
      } catch (error) {
        return (error as Error).message;
      }

    default:
      // check if the command required argument(s)
      if (CommandsWithArgs.includes(command)) {
        return 'this command requires argument(s)';
      } else {
        return 'invalid command';
      }
  }
};

const handleCommandWithArgs = (
  command: Command,
  args: Array<string>
): string => {
  switch (command) {
    case Command.PLACE:
      return handlePlaceCommand(args);
    default:
      return 'invalid command';
  }
};
