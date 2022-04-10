#!/usr/bin/env node
import meow from 'meow'
import updateNotifier from 'update-notifier'
import pkg from '../package.json'
import commands from './commands'
import ParamUtils from './utils/ParamUtils'


updateNotifier({ pkg }).notify({ isGlobal: true })

const FLAGS = {
  HELP: 'help',
  VERSION: 'version',
  UPDATE: 'update',
  WEEK_START: 'weekStart',
  VIEW: 'view',
}

const cli = meow(
  `
  usage:
    $ lunarcal [options] [<month> <year>]
  options:
    --view,         -V   Calendar view, default month view, available options: [y, m, d, w, h]
    --update,       -u   Sync national holidays with the repo
    --version,      -v   Print lunarcal installed version
    --week-start,        Specify week start day. 0: Sunday, 1: Monday, 5: Saturday; default Monday
    --compact,      -c   Print compact calendar in month view.
    --border,       -b   Print calendar with solid border in month view.
  examples:
  #1 Print current month view (default) 
    $ lunarcal
  #2 Print day view
    $ lunarcal --view=d
  #3 Print specified month view of June 2022, with border and week starts on Saturday
    $ lunarcal 6 2022 -b --week-start=5
`,
  {
    // ["string", "boolean", "number", "array", "string-array", "boolean-array", "number-array"]
    flags: {
      [FLAGS.HELP]: { type: 'boolean', alias: 'h' },
      [FLAGS.VIEW]: { type: 'string', alias: 'V', default: 'm' },
      [FLAGS.UPDATE]: { type: 'boolean', alias: 'u' },
      [FLAGS.VERSION]: { type: 'boolean', alias: 'v' },
      [FLAGS.WEEK_START]: { type: 'number', default: 1 },
      ['compact']: { type: 'boolean', alias: 'c' },
      ['border']: { type: 'boolean', alias: 'b' },
    }
  }
)

export const options = {
  [FLAGS.HELP]: () => cli.showHelp(),
  [FLAGS.UPDATE]: () => commands.update(),
}

const getCommand = (flags) => {
  const commandFlag = Object.keys(flags)
    .map((flag) => flags[flag] && flag)
    .find((flag) => options[flag])
  return commandFlag;
}

// const getOptionsForCommand = (command, cli) => {
//   const commandsWithOptions = [FLAGS.DAY, FLAGS.MONTH]
//   const { flags, input } = cli;
//   if (commandsWithOptions.includes(command)) {
//     return {
//       const m = input && input[0];
//       const y = input && input[1];
//     }
//   }
//   return null
// }

const handleCmd = (cli) => {
  const { flags, input } = cli;

  const command = getCommand(flags);

  if (command) {
    return options[command](flags)
  };

  const validationResult = ParamUtils.validateViewCommandOptions(flags, input);

  if (!validationResult.valid) {
    if (validationResult.message) {
      console.log(validationResult.message)
      return;
    } else {
      return cli.showHelp();
    }
  }

  switch (flags.view) {
    case 'd':
      return commands.renderDay(flags, input)
    default:
      const m = input && input[0];
      const y = input && input[1];
      return commands.renderMonth(flags, m, y);
  }
}

handleCmd(cli);