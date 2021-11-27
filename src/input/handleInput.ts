import { cleanInput } from '../utils/cleanInput';
import { Command } from '../types/Command';
import { validateCommand } from '../validation/validateCommand';
import { COMMAND_HANDLERS } from './InputStrategies';

export const handleInput = (input: string): string => {
  const parsedInput = cleanInput(input);

  const inputArray = parsedInput.split(' ');
  const command = inputArray[0] as Command;
  const commandArgs = inputArray.slice(1);

  try {
    validateCommand(command);

    const commandHandler = COMMAND_HANDLERS[command];

    if (!commandHandler) {
      throw new Error('unknown command');
    }

    return commandHandler(commandArgs);
  } catch (error) {
    return (error as Error).message;
  }
};
