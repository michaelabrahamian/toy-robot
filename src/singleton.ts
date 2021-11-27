import { ToyRobot } from './ToyRobot';
import { Direction } from './types/Direction';

// Toy Robot singleton, used by the app to simulate a toy robot and store its state.
export const TOY_ROBOT = new ToyRobot(0, 0, Direction.NORTH);
