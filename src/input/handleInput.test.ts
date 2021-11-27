// main e2e / integration test for the app.

import { handleInput } from './handleInput';

test.each(['MOVE', 'LEFT', 'RIGHT', 'REPORT'])(
  'should notify that the toy robot must first be placed when running command %s',
  (command) => {
    const output = handleInput(command);
    expect(output).toBe('Toy Robot has not been placed yet');
  }
);

test('should successfully complete a happy path', () => {
  let output = handleInput('PLACE 0,0,NORTH');
  expect(output).toBe('PLACE');

  output = handleInput('MOVE');
  expect(output).toBe('MOVE');

  output = handleInput('REPORT');
  expect(output).toBe('0,1,NORTH');

  output = handleInput('LEFT');
  expect(output).toBe('LEFT');

  output = handleInput('REPORT');
  expect(output).toBe('0,1,WEST');
});
