import { Direction } from './types/Direction';

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

  constructor(x: number, y: number, direction: Direction) {
    this.position = new Position(x, y);
    this.direction = direction;
  }

  report(): string {
    return `${this.position.x},${this.position.y},${this.direction}`;
  }
}
