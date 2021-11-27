# toy-robot

A console application that simulates a toy robot moving on a 5x5 square table top.

- The origin `(0,0)` is the SOUTH WEST most corner.

## Steps to run:

1. `npm install`
1. `npm start`

## Available commands

- `PLACE X,Y,F`: puts the toy robot on the table in position `X,Y` and facing `F` (NORTH, SOUTH, EAST, or WEST)
- `MOVE`: moves the toy robot one unit forward in the direction it is currently facing.
- `LEFT`: rotates the toy robot 90 degrees to the left
- `RIGHT`: rotates the toy robot 90 degrees to the right
- `REPORT`: displays the X, Y, and F (direction) of the toy robot.

## Architecture Overview

- TypeScript
- Prettier & eslint for code consistency & cleanliness
