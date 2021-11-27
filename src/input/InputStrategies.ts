import { TOY_ROBOT } from '../singleton';
import { handlePlaceCommand } from '../commands/place';
import { Command } from '../types/Command';
import { CommandHandler } from '../types/CommandHandler';

// Maps a command to its handler
export const COMMAND_HANDLERS: Record<Command, CommandHandler> = {
  [Command.PLACE]: handlePlaceCommand,
  [Command.REPORT]: () => TOY_ROBOT.report(),
  [Command.MOVE]: () => {
    TOY_ROBOT.move();
    return 'MOVE';
  },
  [Command.LEFT]: () => {
    TOY_ROBOT.rotateLeft();
    return 'LEFT';
  },
  [Command.RIGHT]: () => {
    TOY_ROBOT.rotateRight();
    return 'RIGHT';
  },
};
