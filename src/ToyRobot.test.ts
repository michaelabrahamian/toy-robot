import { ToyRobot } from './ToyRobot';
import { Direction } from './types/Direction';

const createMockToyRobot = () => new ToyRobot(0, 0, Direction.NORTH);

test('should throw an error when trying to report before being placed', () => {
  const toyRobot = createMockToyRobot();

  expect(() => toyRobot.report()).toThrowError(
    'toy robot has not been placed yet'
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
      `invalid X value: ${x}. X should be between 0 and 4`
    );
  });

  test.each([-4, 7])('should throw an error if Y value is invalid', (y) => {
    const toyRobot = createMockToyRobot();

    expect(() => toyRobot.place(0, y, Direction.NORTH)).toThrowError(
      `invalid Y value: ${y}. Y should be between 0 and 4`
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
});
