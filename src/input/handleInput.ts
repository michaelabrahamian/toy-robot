import { cleanInput } from '../utils/cleanInput';
import { Command } from '../types/Command';
import { validateCommand } from '../validation/validateCommand';
import { handleCommandWithArgs } from './handleCommandWithArgs';
import { handleCommandWithoutArgs } from './handleCommandWithNoArgs';

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
