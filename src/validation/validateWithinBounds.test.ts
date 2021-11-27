import { validateWithinBounds } from './validateWithinBounds';

test('should throw an error if the X value is negative', () => {
  expect(() => validateWithinBounds(-1, 0)).toThrowError('invalid x value: -1');
});

test('should throw an error if the y value is negative', () => {
  expect(() => validateWithinBounds(0, -1)).toThrowError('invalid y value: -1');
});

test('should throw an error if the x value is greater than 4', () => {
  expect(() => validateWithinBounds(5, 0)).toThrowError('invalid x value: 5');
});

test('should throw an error if the y value is greater than 4', () => {
  expect(() => validateWithinBounds(0, 5)).toThrowError('invalid y value: 5');
});

test.each([
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [4, 0],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [4, 4],
])('should not throw an error if the x,y is %d,%d', (x, y) => {
  expect(() => validateWithinBounds(x, y)).not.toThrowError();
});
