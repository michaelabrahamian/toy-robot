export type CommandHandler = CommandWithNoArgsHandler | CommandWithArgsHandler;

type CommandWithNoArgsHandler = () => string;

type CommandWithArgsHandler = (args: Array<string>) => string;
