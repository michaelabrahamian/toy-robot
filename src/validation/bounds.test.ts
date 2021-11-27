import { isWithinBounds } from './bounds';

test('should return false if the X value is negative', () => {
  expect(isWithinBounds(-1, 0)).toBe(false);
});

test('should throw an error if the y value is negative', () => {
  expect(isWithinBounds(0, -1)).toBe(false);
});

test('should throw an error if the x value is greater than 4', () => {
  expect(isWithinBounds(5, 0)).toBe(false);
});

test('should throw an error if the y value is greater than 4', () => {
  expect(isWithinBounds(0, 5)).toBe(false);
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
])('should return true if the x,y is %d,%d', (x, y) => {
  expect(isWithinBounds(x, y)).toBe(true);
});
