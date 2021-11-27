import { Direction } from './types/Direction';
import { Position } from './types/Position';
import { validateDirection } from './validation/validateDirection';
import { MAX_VALUES, MIN_VALUES, isWithinBounds } from './validation/bounds';

// Maps the current direction to a new direction when turning left
const ROTATE_LEFT_MAPPING: Record<Direction, Direction> = {
  [Direction.NORTH]: Direction.WEST,
  [Direction.EAST]: Direction.NORTH,
  [Direction.SOUTH]: Direction.EAST,
  [Direction.WEST]: Direction.SOUTH,
};

// Maps the current direction to a new direction when turning right
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
    this.validateIfPlaced();

    return `${this.position.x},${this.position.y},${this.direction}`;
  }

  place(x: number, y: number, direction: Direction): void {
    validateDirection(direction);

    if (!isWithinBounds(x, y)) {
      throw new Error(
        `Invalid X,Y value: ${x},${y}. Position should be between ${MIN_VALUES.X},${MIN_VALUES.Y} and ${MAX_VALUES.X},${MAX_VALUES.Y}`
      );
    }

    this.position.x = x;
    this.position.y = y;
    this.direction = direction;
    this.hasBeenPlaced = true;
  }

  rotateLeft(): void {
    this.validateIfPlaced();

    this.direction = ROTATE_LEFT_MAPPING[this.direction];
  }

  rotateRight(): void {
    this.validateIfPlaced();

    this.direction = ROTATE_RIGHT_MAPPING[this.direction];
  }

  move(): void {
    this.validateIfPlaced();

    const movementToApply = MOVE_MAPPING[this.direction];

    // validate the movement would still be within the table bounds
    const newX = this.position.x + movementToApply.x;
    const newY = this.position.y + movementToApply.y;

    if (!isWithinBounds(newX, newY)) {
      throw new Error(
        'Moving in the current direction would push the robot off the table!'
      );
    }

    this.position.x = newX;
    this.position.y = newY;
  }

  validateIfPlaced(): void {
    if (!this.hasBeenPlaced) {
      throw new Error('Toy Robot has not been placed yet');
    }
  }
}
