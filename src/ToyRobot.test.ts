import { ToyRobot } from './ToyRobot';
import { Direction } from './types/Direction';
import { Position } from './types/Position';

const createMockToyRobot = () => new ToyRobot();

test('should throw an error when trying to report before being placed', () => {
  const toyRobot = createMockToyRobot();

  expect(() => toyRobot.report()).toThrowError(
    'Toy Robot has not been placed yet'
  );
});

test('should report position and direction correctly', () => {
  const toyRobot = createMockToyRobot();

  toyRobot.place(1, 3, Direction.EAST);

  expect(toyRobot.report()).toBe('1,3,EAST');
});

describe('place argument validation', () => {
  test('should throw an error if direction is invalid', () => {
    const toyRobot = createMockToyRobot();

    expect(() =>
      toyRobot.place(1, 1, 'some test value' as Direction)
    ).toThrowError('invalid direction: some test value');
  });

  test.each([-1, 8])('should throw an error if X value is invalid', (x) => {
    const toyRobot = createMockToyRobot();

    expect(() => toyRobot.place(x, 0, Direction.NORTH)).toThrowError(
      `Invalid X,Y value: ${x},0. Position should be between 0,0 and 4,4`
    );
  });

  test.each([-4, 7])('should throw an error if Y value is invalid', (y) => {
    const toyRobot = createMockToyRobot();

    expect(() => toyRobot.place(0, y, Direction.NORTH)).toThrowError(
      `Invalid X,Y value: 0,${y}. Position should be between 0,0 and 4,4`
    );
  });
});

test('should update position and direction when placed', () => {
  const toyRobot = createMockToyRobot();

  toyRobot.place(1, 3, Direction.EAST);

  expect(toyRobot.position.x).toBe(1);
  expect(toyRobot.position.y).toBe(3);
  expect(toyRobot.direction).toBe(Direction.EAST);
});

test('should update position and direction when placed again', () => {
  const toyRobot = createMockToyRobot();

  toyRobot.place(1, 3, Direction.EAST);

  expect(toyRobot.position.x).toBe(1);
  expect(toyRobot.position.y).toBe(3);
  expect(toyRobot.direction).toBe(Direction.EAST);

  toyRobot.place(2, 0, Direction.WEST);

  expect(toyRobot.position.x).toBe(2);
  expect(toyRobot.position.y).toBe(0);
  expect(toyRobot.direction).toBe(Direction.WEST);
});

describe('rotate left', () => {
  test.each([
    { currentDirection: Direction.NORTH, expectedNewDirection: Direction.WEST },
    { currentDirection: Direction.WEST, expectedNewDirection: Direction.SOUTH },
    { currentDirection: Direction.SOUTH, expectedNewDirection: Direction.EAST },
    { currentDirection: Direction.EAST, expectedNewDirection: Direction.NORTH },
  ])(
    'should rotate from $currentDirection to $expectedNewDirection',
    ({ currentDirection, expectedNewDirection }) => {
      const toyRobot = createMockToyRobot();

      toyRobot.place(0, 0, currentDirection);

      toyRobot.rotateLeft();

      expect(toyRobot.direction).toBe(expectedNewDirection);
    }
  );

  test('should throw an error when trying to rotate before being placed', () => {
    const toyRobot = createMockToyRobot();

    expect(() => toyRobot.rotateLeft()).toThrowError(
      'Toy Robot has not been placed yet'
    );
  });
});

describe('rotate right', () => {
  test.each([
    { currentDirection: Direction.NORTH, expectedNewDirection: Direction.EAST },
    { currentDirection: Direction.EAST, expectedNewDirection: Direction.SOUTH },
    { currentDirection: Direction.SOUTH, expectedNewDirection: Direction.WEST },
    { currentDirection: Direction.WEST, expectedNewDirection: Direction.NORTH },
  ])(
    'should rotate from $currentDirection to $expectedNewDirection',
    ({ currentDirection, expectedNewDirection }) => {
      const toyRobot = createMockToyRobot();

      toyRobot.place(0, 0, currentDirection);

      toyRobot.rotateRight();

      expect(toyRobot.direction).toBe(expectedNewDirection);
    }
  );

  test('should throw an error when trying to rotate before being placed', () => {
    const toyRobot = createMockToyRobot();

    expect(() => toyRobot.rotateRight()).toThrowError(
      'Toy Robot has not been placed yet'
    );
  });
});

describe('move', () => {
  test('should throw an error when trying to move before being placed', () => {
    const toyRobot = createMockToyRobot();

    expect(() => toyRobot.move()).toThrowError(
      'Toy Robot has not been placed yet'
    );
  });

  test.each([
    {
      currentPosition: { x: 0, y: 0 },
      currentDirection: Direction.NORTH,
      expectedNewPosition: { x: 0, y: 1 },
    },
    {
      currentPosition: { x: 0, y: 1 },
      currentDirection: Direction.NORTH,
      expectedNewPosition: { x: 0, y: 2 },
    },
    {
      currentPosition: { x: 0, y: 2 },
      currentDirection: Direction.NORTH,
      expectedNewPosition: { x: 0, y: 3 },
    },
    {
      currentPosition: { x: 0, y: 3 },
      currentDirection: Direction.NORTH,
      expectedNewPosition: { x: 0, y: 4 },
    },
    {
      currentPosition: { x: 0, y: 0 },
      currentDirection: Direction.EAST,
      expectedNewPosition: { x: 1, y: 0 },
    },
    {
      currentPosition: { x: 1, y: 0 },
      currentDirection: Direction.EAST,
      expectedNewPosition: { x: 2, y: 0 },
    },
    {
      currentPosition: { x: 2, y: 0 },
      currentDirection: Direction.EAST,
      expectedNewPosition: { x: 3, y: 0 },
    },
    {
      currentPosition: { x: 3, y: 0 },
      currentDirection: Direction.EAST,
      expectedNewPosition: { x: 4, y: 0 },
    },
    {
      currentPosition: { x: 3, y: 4 },
      currentDirection: Direction.SOUTH,
      expectedNewPosition: { x: 3, y: 3 },
    },
    {
      currentPosition: { x: 3, y: 3 },
      currentDirection: Direction.SOUTH,
      expectedNewPosition: { x: 3, y: 2 },
    },
    {
      currentPosition: { x: 3, y: 2 },
      currentDirection: Direction.SOUTH,
      expectedNewPosition: { x: 3, y: 1 },
    },
    {
      currentPosition: { x: 3, y: 1 },
      currentDirection: Direction.SOUTH,
      expectedNewPosition: { x: 3, y: 0 },
    },
    {
      currentPosition: { x: 4, y: 1 },
      currentDirection: Direction.WEST,
      expectedNewPosition: { x: 3, y: 1 },
    },
    {
      currentPosition: { x: 3, y: 1 },
      currentDirection: Direction.WEST,
      expectedNewPosition: { x: 2, y: 1 },
    },
    {
      currentPosition: { x: 2, y: 1 },
      currentDirection: Direction.WEST,
      expectedNewPosition: { x: 1, y: 1 },
    },
    {
      currentPosition: { x: 1, y: 1 },
      currentDirection: Direction.WEST,
      expectedNewPosition: { x: 0, y: 1 },
    },
  ])(
    'Moving $currentDirection from $currentPosition.x,$currentPosition.y should result in position $expectedNewPosition.x,$expectedNewPosition.y',
    ({
      currentPosition,
      currentDirection,
      expectedNewPosition,
    }: {
      currentPosition: Position;
      currentDirection: Direction;
      expectedNewPosition: Position;
    }) => {
      const toyRobot = createMockToyRobot();

      toyRobot.place(currentPosition.x, currentPosition.y, currentDirection);

      toyRobot.move();

      expect(toyRobot.position.x).toBe(expectedNewPosition.x);
      expect(toyRobot.position.y).toBe(expectedNewPosition.y);
    }
  );

  test.each([
    {
      currentPosition: { x: 0, y: 0 },
      currentDirection: Direction.SOUTH,
    },
    {
      currentPosition: { x: 0, y: 0 },
      currentDirection: Direction.WEST,
    },
    {
      currentPosition: { x: 0, y: 1 },
      currentDirection: Direction.WEST,
    },
    {
      currentPosition: { x: 1, y: 0 },
      currentDirection: Direction.SOUTH,
    },
    {
      currentPosition: { x: 4, y: 3 },
      currentDirection: Direction.EAST,
    },
    {
      currentPosition: { x: 2, y: 4 },
      currentDirection: Direction.NORTH,
    },
    {
      currentPosition: { x: 2, y: 4 },
      currentDirection: Direction.NORTH,
    },
    {
      currentPosition: { x: 4, y: 4 },
      currentDirection: Direction.NORTH,
    },
    {
      currentPosition: { x: 4, y: 4 },
      currentDirection: Direction.EAST,
    },
  ])(
    'an out of bounds movement $currentDirection from $currentPosition.x,$currentPosition.y throws an error',
    ({
      currentPosition,
      currentDirection,
    }: {
      currentPosition: Position;
      currentDirection: Direction;
    }) => {
      const toyRobot = createMockToyRobot();

      toyRobot.place(currentPosition.x, currentPosition.y, currentDirection);

      expect(() => toyRobot.move()).toThrowError(
        'Moving in the current direction would push the robot off the table!'
      );
    }
  );
});
