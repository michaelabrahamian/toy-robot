import { Direction } from './types/Direction';
import { validateDirection } from './validation/validateDirection';
import { validateWithinBounds } from './validation/validateWithinBounds';

class Position {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

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

export class ToyRobot {
  position: Position;
  direction: Direction;
  hasBeenPlaced: boolean;

  constructor(x: number, y: number, direction: Direction) {
    this.position = new Position(x, y);
    this.direction = direction;
    this.hasBeenPlaced = false;
  }

  report(): string {
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
    this.direction = ROTATE_LEFT_MAPPING[this.direction];
  }

  rotateRight(): void {
    this.direction = ROTATE_RIGHT_MAPPING[this.direction];
  }
}
