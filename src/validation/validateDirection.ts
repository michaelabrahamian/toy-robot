import { Direction } from '../types/Direction';

export const validateDirection = (direction: Direction): void => {
  if (!Direction[direction]) {
    throw new Error(`invalid direction: ${direction}`);
  }
};
