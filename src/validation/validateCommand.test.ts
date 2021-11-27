import { Command } from '../types/Command';
import { validateCommand } from './validateCommand';

test('should throw an error if the command is invalid', () => {
  expect(() => validateCommand('SOME_TEST_COMMAND' as Command)).toThrowError(
    'invalid command: SOME_TEST_COMMAND'
  );
});

test('should throw an error if the command is an empty string', () => {
  expect(() => validateCommand('' as Command)).toThrowError(
    'invalid command: '
  );
});

test('should not throw an error if the command is valid', () => {
  Object.values(Command).forEach((command) => {
    expect(() => validateCommand(command)).not.toThrowError();
  });
});
