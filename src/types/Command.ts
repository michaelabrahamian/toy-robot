export enum Command {
  PLACE = 'PLACE',
  MOVE = 'MOVE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  REPORT = 'REPORT',
}

export const CommandsWithArgs = [Command.PLACE];

export const CommandsWithoutArgs = [
  Command.MOVE,
  Command.LEFT,
  Command.RIGHT,
  Command.REPORT,
];
