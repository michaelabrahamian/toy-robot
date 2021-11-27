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
}
