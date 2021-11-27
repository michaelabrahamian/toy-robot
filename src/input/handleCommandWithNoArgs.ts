import { TOY_ROBOT } from '../singleton';
import { Command, CommandsWithArgs } from '../types/Command';

export const handleCommandWithoutArgs = (command: Command): string => {
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
