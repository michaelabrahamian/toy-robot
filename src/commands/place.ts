import { TOY_ROBOT } from '../singleton';
import { Command } from '../types/Command';
import { Direction } from '../types/Direction';

export const handlePlaceCommand = (args: Array<string>): string => {
  const { x, y, direction } = extractPlaceArgs(args);

  TOY_ROBOT.place(x, y, direction);
  return 'PLACE';
};

type PlaceCommandArgs = {
  x: number;
  y: number;
  direction: Direction;
};

const extractPlaceArgs = (args: Array<string>): PlaceCommandArgs => {
  const firstArg = args[0];

  if (!firstArg) {
    throw new Error(`${Command.PLACE} args provided`);
  }

  const placeArgs = firstArg.split(',');

  if (placeArgs.length !== 3) {
    throw new Error(
      `${Command.PLACE} command requires an argument in the format: X,Y,F`
    );
  }

  const [x, y, direction] = placeArgs;

  return {
    x: Number(x),
    y: Number(y),
    direction: direction as Direction,
  };
};
