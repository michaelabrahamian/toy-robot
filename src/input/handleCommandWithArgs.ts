import { handlePlaceCommand } from '../commands/place';
import { Command } from '../types/Command';

export const handleCommandWithArgs = (
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
