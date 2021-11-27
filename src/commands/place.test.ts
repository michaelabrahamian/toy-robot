import { extractPlaceArgs } from './place';

describe('extractPlaceArgs', () => {
  test('should throw an error for an empty array', () => {
    expect(() => extractPlaceArgs([])).toThrowError('no PLACE args provided');
  });

  test.each(['this argument is invalid', '1', '1,1'])(
    'should throw an error if the first argument is in the incorrect format',
    (arg) => {
      expect(() => extractPlaceArgs([arg])).toThrowError(
        'PLACE command requires an argument in the format: X,Y,F'
      );
    }
  );

  test.each(['one,1,NORTH', '1,one,NORTH'])(
    'should throw an error if the X or Y values are not numeric',
    (arg) => {
      expect(() => extractPlaceArgs([arg])).toThrowError(
        'X and Y should be numeric'
      );
    }
  );
});

describe('handlePlaceCommand', () => {
  test.todo('should not throw an error for valid place args');
});
