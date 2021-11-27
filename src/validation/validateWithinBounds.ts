const MIN_VALUES = {
  X: 0,
  Y: 0,
};

const MAX_VALUES = {
  X: 4,
  Y: 4,
};

// Validates the arguments are within the bounds of the table
export const validateWithinBounds = (x: number, y: number) => {
  if (x < MIN_VALUES.X || x > MAX_VALUES.X) {
    throw new Error(
      `invalid X value: ${x}. X should be between ${MIN_VALUES.X} and ${MAX_VALUES.X}`
    );
  }

  if (y < MIN_VALUES.Y || y > MAX_VALUES.Y) {
    throw new Error(
      `invalid Y value: ${y}. Y should be between ${MIN_VALUES.Y} and ${MAX_VALUES.Y}`
    );
  }
};
