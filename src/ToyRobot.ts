import { Direction } from './types/Direction';
import { Position } from './types/Position';
import { validateDirection } from './validation/validateDirection';
import {
  MAX_VALUES,
  MIN_VALUES,
  validateWithinBounds,
} from './validation/validateWithinBounds';

const ROTATE_LEFT_MAPPING: Record<Direction, Direction> = {
  [Direction.NORTH]: Direction.WEST,
  [Direction.EAST]: Direction.NORTH,
  [Direction.SOUTH]: Direction.EAST,
  [Direction.WEST]: Direction.SOUTH,
};

const ROTATE_RIGHT_MAPPING: Record<Direction, Direction> = {
  [Direction.NORTH]: Direction.EAST,
  [Direction.EAST]: Direction.SOUTH,
  [Direction.SOUTH]: Direction.WEST,
  [Direction.WEST]: Direction.NORTH,
};

// Maps a direction to the units in each direction the robot's position should change by
const MOVE_MAPPING: Record<Direction, Position> = {
  [Direction.NORTH]: { x: 0, y: 1 },
  [Direction.EAST]: { x: 1, y: 0 },
  [Direction.SOUTH]: { x: 0, y: -1 },
  [Direction.WEST]: { x: -1, y: 0 },
};

export class ToyRobot {
  position: Position;
  direction: Direction;
  hasBeenPlaced: boolean;

  constructor(x: number, y: number, direction: Direction) {
    this.position = { x, y };
    this.direction = direction;
    this.hasBeenPlaced = false;
  }

  report(): string {
    // TODO: refactor this check to prevent repetition in all methods
    if (!this.hasBeenPlaced) {
      throw new Error('toy robot has not been placed yet');
    }

    return `${this.position.x},${this.position.y},${this.direction}`;
  }

  place(x: number, y: number, direction: Direction): void {
    validateDirection(direction);

    validateWithinBounds(x, y);

    this.position.x = x;
    this.position.y = y;
    this.direction = direction;
    this.hasBeenPlaced = true;
  }

  rotateLeft(): void {
    if (!this.hasBeenPlaced) {
      throw new Error('toy robot has not been placed yet');
    }

    this.direction = ROTATE_LEFT_MAPPING[this.direction];
  }

  rotateRight(): void {
    if (!this.hasBeenPlaced) {
      throw new Error('toy robot has not been placed yet');
    }

    this.direction = ROTATE_RIGHT_MAPPING[this.direction];
  }

  move(): void {
    if (!this.hasBeenPlaced) {
      throw new Error('toy robot has not been placed yet');
    }

    const movementToApply = MOVE_MAPPING[this.direction];

    // validate the movement would still be within the table bounds
    const newX = this.position.x + movementToApply.x;
    const newY = this.position.y + movementToApply.y;

    if (
      newX < MIN_VALUES.X ||
      newX > MAX_VALUES.X ||
      newY < MIN_VALUES.Y ||
      newY > MAX_VALUES.X
    ) {
      throw new Error(
        'moving in the current direction would push the robot off the table!'
      );
    }

    this.position.x += movementToApply.x;
    this.position.y += movementToApply.y;
  }
}
