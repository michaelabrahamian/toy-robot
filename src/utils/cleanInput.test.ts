import { cleanInput } from './cleanInput';

test('should remove leading and trailing whitespace from input', () => {
  expect(cleanInput('  TEST_STRING  ')).toBe('TEST_STRING');
});

test('should remove retain internal white space', () => {
  expect(cleanInput('  TEST STRING  ')).toBe('TEST STRING');
});

test('should return the input in upper case', () => {
  expect(cleanInput('test string')).toBe('TEST STRING');
});

test('should remove unnecessary whitespace and return the input in uppercase', () => {
  expect(cleanInput('  test string  ')).toBe('TEST STRING');
});

test('should handle an empty input', () => {
  expect(cleanInput('')).toBe('');
});
