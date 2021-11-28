import { ToyRobot } from '../ToyRobot';

export type CommandHandler = (
  toyRobot: ToyRobot,
  args?: Array<string>
) => string;
