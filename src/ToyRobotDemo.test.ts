import { handleInput } from './input/handleInput';
import { ToyRobot } from './ToyRobot';

// Demo of the Toy Robot. Submits commands to the input handler, and asserts on the output.
// By testing directly on the `handleInput` function, we can bypass the `readLine` implementation
// that integrates with the terminal for ease of testing.

const createMockToyRobot = () => new ToyRobot();

// Returns a handleInput function binded with an instance of a Toy Robot.
const createHandleInputWithToyRobot = (toyRobot: ToyRobot) => (input: string) =>
  handleInput(input, toyRobot);

test('should successfully complete a happy path', () => {
  const handleInput = createHandleInputWithToyRobot(createMockToyRobot());

  let output = handleInput('PLACE 0,0,NORTH');
  expect(output).toBe('PLACE');

  output = handleInput('REPORT');
  expect(output).toBe('0,0,NORTH');

  output = handleInput('MOVE');
  expect(output).toBe('MOVE');

  output = handleInput('REPORT');
  expect(output).toBe('0,1,NORTH');

  output = handleInput('LEFT');
  expect(output).toBe('LEFT');

  output = handleInput('REPORT');
  expect(output).toBe('0,1,WEST');

  output = handleInput('MOVE');
  expect(output).toBe(
    'Moving in the current direction would push the robot off the table!'
  );

  output = handleInput('REPORT');
  expect(output).toBe('0,1,WEST');

  output = handleInput('RIGHT');
  expect(output).toBe('RIGHT');

  output = handleInput('REPORT');
  expect(output).toBe('0,1,NORTH');

  output = handleInput('MOVE');
  expect(output).toBe('MOVE');

  output = handleInput('MOVE');
  expect(output).toBe('MOVE');

  output = handleInput('MOVE');
  expect(output).toBe('MOVE');

  output = handleInput('MOVE');
  expect(output).toBe(
    'Moving in the current direction would push the robot off the table!'
  );

  output = handleInput('REPORT');
  expect(output).toBe('0,4,NORTH');

  output = handleInput('RIGHT');
  expect(output).toBe('RIGHT');

  output = handleInput('MOVE');
  expect(output).toBe('MOVE');

  output = handleInput('MOVE');
  expect(output).toBe('MOVE');

  output = handleInput('REPORT');
  expect(output).toBe('2,4,EAST');

  output = handleInput('PLACE 3,1,SOUTH');
  expect(output).toBe('PLACE');

  output = handleInput('REPORT');
  expect(output).toBe('3,1,SOUTH');
});

describe('handles edge cases', () => {
  test('should handle several place commands in a row', () => {
    const handleInput = createHandleInputWithToyRobot(createMockToyRobot());

    handleInput('PLACE 0,0,NORTH');
    handleInput('PLACE 2,1,WEST');
    handleInput('PLACE 3,2,SOUTH');
    handleInput('PLACE 1,4,EAST');

    const output = handleInput('REPORT');
    expect(output).toBe('1,4,EAST');
  });

  test('should handle several invalid place commands in a row', () => {
    const handleInput = createHandleInputWithToyRobot(createMockToyRobot());

    handleInput('PLACE');
    handleInput('PLACE somewhere');
    handleInput('PLACE blah,blah');
    handleInput('PLACE 1,1,bottom');
    handleInput('PLACE 100,100,NORTH');
    handleInput('PLACE -1,5,SOUTH');
    handleInput('PLACE 0,-9001,EAST');
    handleInput('PLACE -1000,-6,WEST');
    handleInput('PLACE one,two,three');

    const output = handleInput('REPORT');
    expect(output).toBe('Toy Robot has not been placed yet');
  });
});
