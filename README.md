# toy-robot

A console application that simulates a toy robot moving on a 5x5 square table top.

- The origin `(0,0)` is the SOUTH WEST most corner.

## Steps to run:

1. `npm install`
2. `npm start`

## App Demo

- Demo data has been added in demo of the Toy Robot has been under `/testData`.
- The directory contains several `txt` files containing a list of commands on separate lines.

### To manually test the app using this data:

1. Start the app (as detailed in the section above)
2. Copy the contents of a `txt` file
3. Paste into terminal

## Available commands

- `PLACE X,Y,F`: puts the toy robot on the table in position `X,Y` and facing `F` (NORTH, SOUTH, EAST, or WEST)
- `MOVE`: moves the toy robot one unit forward in the direction it is currently facing.
- `LEFT`: rotates the toy robot 90 degrees to the left
- `RIGHT`: rotates the toy robot 90 degrees to the right
- `REPORT`: displays the X, Y, and F (direction) of the toy robot.

## Architecture Overview

- TypeScript
- Jest for unit tests
- `readline` for reading data from standard input
- Prettier & eslint for code consistency & cleanliness

## Architectural Decisions

- A `ToyRobot` class is used to encapsulate the logic and data for the toy robot.

- Initially a singleton was implemented for the ToyRobot class, which could be imported and accessed by any file in the app. This later refactored and removed, to instead pass around a reference to a ToyRobot instance across the required areas of the app. The main reason for this was to decouple the functions with the singleton instance - this became especially problematic for tests running in parallel, which would access the same singleton.

- TypeScript was chosen to aid with development - mainly to quickly detect any errors or issues that would otherwise be hidden during development and compile time.

- All functions except the input listener configurer return strings or throw errors, rather than logging to console directly themselves.
  - this allows for easier testing, and also allows the invoker to decide how to handle the output (e.g. console logging, or writing to a file)
