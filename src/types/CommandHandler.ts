import { ToyRobot } from '../ToyRobot';

export type CommandHandler = CommandWithNoArgsHandler | CommandWithArgsHandler;

type CommandWithNoArgsHandler = (toyRobot: ToyRobot) => string;

type CommandWithArgsHandler = (
  toyRobot: ToyRobot,
  args: Array<string>
) => string;
