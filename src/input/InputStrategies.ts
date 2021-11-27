import { TOY_ROBOT } from '../singleton';
import { handlePlaceCommand } from '../commands/place';
import { Command } from '../types/Command';
import { CommandHandler } from '../types/CommandHandler';

// Maps a command to its handler
export const COMMAND_HANDLERS: Record<Command, CommandHandler> = {
  [Command.PLACE]: handlePlaceCommand,
  [Command.REPORT]: () => TOY_ROBOT.report(),
  [Command.MOVE]: () => 'MOVE',
  [Command.LEFT]: () => 'LEFT',
  [Command.RIGHT]: () => 'RIGHT',
};
