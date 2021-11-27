import { Command } from '../types/Command';

// Checks if the command is a known valid command
export const validateCommand = (command: Command): void => {
  if (!Command[command]) {
    throw new Error(`invalid command: ${command}`);
  }
};
