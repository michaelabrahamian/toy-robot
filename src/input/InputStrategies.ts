import { handlePlaceCommand } from './place';
import { Command } from '../types/Command';
import { CommandHandler } from '../types/CommandHandler';
import { ToyRobot } from '../ToyRobot';

// Maps a command to its handler
// Only the handler logic `PLACE` command has been extracted into a separate file.
// The other command handlers are very simple, so are inlined in the below map.
export const COMMAND_HANDLERS: Record<Command, CommandHandler> = {
  [Command.PLACE]: handlePlaceCommand,
  [Command.REPORT]: (toyRobot: ToyRobot) => toyRobot.report(),
  [Command.MOVE]: (toyRobot: ToyRobot) => {
    toyRobot.move();
    return 'MOVE';
  },
  [Command.LEFT]: (toyRobot: ToyRobot) => {
    toyRobot.rotateLeft();
    return 'LEFT';
  },
  [Command.RIGHT]: (toyRobot: ToyRobot) => {
    toyRobot.rotateRight();
    return 'RIGHT';
  },
};
