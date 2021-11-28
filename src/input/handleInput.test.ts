import { ToyRobot } from '../ToyRobot';
import { handleInput } from './handleInput';

const createMockToyRobot = () => new ToyRobot();

test.each(['MOVE', 'LEFT', 'RIGHT', 'REPORT'])(
  'should notify that the toy robot must first be placed when running command %s',
  (command) => {
    const output = handleInput(command, createMockToyRobot());
    expect(output).toBe('Toy Robot has not been placed yet');
  }
);

test.each(['MOVE', 'LEFT', 'RIGHT'])(
  'should handle the command %s successfully after the toy robot has been placed',
  (command) => {
    const toyRobot = createMockToyRobot();

    handleInput('PLACE 0,0,NORTH', toyRobot);
    const output = handleInput(command, toyRobot);

    expect(output).toBe(command);
  }
);

test('should output the position report correctly after the robot has been placed', () => {
  const toyRobot = createMockToyRobot();

  handleInput('PLACE 2,1,WEST', toyRobot);
  const output = handleInput('REPORT', toyRobot);
  expect(output).toBe('2,1,WEST');
});

test('should specify that arguments are required for PLACE command', () => {
  const output = handleInput('PLACE', createMockToyRobot());
  expect(output).toBe('no PLACE args provided');
});

test('should specify that correct argument format for PLACE command', () => {
  const output = handleInput('PLACE top right', createMockToyRobot());
  expect(output).toBe(
    'PLACE command requires an argument in the format: X,Y,F'
  );
});

test('should handle an invalid PLACE direction', () => {
  const output = handleInput('PLACE 0,0,up', createMockToyRobot());
  expect(output).toBe('invalid direction: UP');
});

test('should specify that correct argument format for PLACE command', () => {
  const output = handleInput('PLACE top right', createMockToyRobot());
  expect(output).toBe(
    'PLACE command requires an argument in the format: X,Y,F'
  );
});

test('should handle an empty command', () => {
  const output = handleInput('', createMockToyRobot());
  expect(output).toBe('invalid command: ');
});
