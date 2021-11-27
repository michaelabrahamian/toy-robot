import { Direction } from '../types/Direction';
import { validateDirection } from './validateDirection';

test('should throw an error if the direction is invalid', () => {
  expect(() =>
    validateDirection('SOME_TEST_DIRECTION' as Direction)
  ).toThrowError('invalid direction: SOME_TEST_DIRECTION');
});

test('should throw an error if the direction is an empty string', () => {
  expect(() => validateDirection('' as Direction)).toThrowError(
    'invalid direction: '
  );
});

test('should not throw an error if the direction is valid', () => {
  Object.values(Direction).forEach((direction) => {
    expect(() => validateDirection(direction)).not.toThrowError();
  });
});
