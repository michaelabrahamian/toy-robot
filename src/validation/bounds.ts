// Inclusive min and max X and Y table positions.
export const MIN_VALUES = {
  X: 0,
  Y: 0,
};

export const MAX_VALUES = {
  X: 4,
  Y: 4,
};

// Validates the arguments are within the bounds of the table
export const isWithinBounds = (x: number, y: number): boolean =>
  x >= MIN_VALUES.X &&
  x <= MAX_VALUES.X &&
  y >= MIN_VALUES.Y &&
  y <= MAX_VALUES.Y;
