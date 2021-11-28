import { cleanInput } from '../utils/cleanInput';
import { Command } from '../types/Command';
import { validateCommand } from '../validation/validateCommand';
import { COMMAND_HANDLERS } from './InputStrategies';
import { ToyRobot } from '../ToyRobot';
import { InputHandler } from '../types/InputHandler';

export const handleInput: InputHandler = (
  input: string,
  toyRobot: ToyRobot
): string => {
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

    return commandHandler(toyRobot, commandArgs);
  } catch (error) {
    return (error as Error).message;
  }
};
