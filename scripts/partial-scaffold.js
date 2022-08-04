/* eslint-disable no-throw-literal,no-console */

const chalk = require('chalk');
const {
  extractArgs,
  isValidScaffoldType,
  scaffoldComponentTest,
  scaffoldComponentCss,
  scaffoldComponentStory,
} = require('./scaffold-utils');

const partialType = process.argv[2];
const componentName = process.argv[3];
const validTypes = ['test', 'styles', 'story'];

// To change the component type to scaffold, provide a `--type` option
// e.g. to create a Rendering (the default, this also create Sitecore files): `npm run scaffold <ComponentName> -- --type=rendering
// or, to create a regular component (no Sitecore files): `npm run scaffold <ComponentName> -- --type=component
// Types are mapped to the subdirectories of `./src/components`, and valid options are `rendering`, `element`, `component`, `module`, `placeholder`
// To change the format of the data file to scaffold, provide a `--format` option -- valid options are `js` and `json`
let { type } = extractArgs(process.argv);

if (!type) {
  type = 'rendering';
}

if (!isValidScaffoldType(type)) {
  console.log();
  console.log(
    chalk.red('Error:'),
    chalk.yellow(`"${type}" is not a valid component type.`),
    'Valid types are "rendering", "element", "component", "module" and "placeholder"',
  );
  return;
}

const directory = `${type}s`;

const componentRootPath = `src/components/${directory}`;
const storiesRootPath = `storybook/stories/${directory}`;

try {
  if (partialType) {
    if (validTypes.indexOf(partialType) < 0) {
      throw `A scaffold type that was passed is invalid. Valid types are \`${validTypes.join(
        '`, `',
      )}\`. Usage: \`npm run scaffold:<type> <ComponentName>\``;
    }
  } else {
    throw 'A scaffold type was not passed. Usage: npm run scaffold:<type> <ComponentName>';
  }

  if (!componentName) {
    throw `Component name was not passed. Usage: npm run scaffold:${partialType} <ComponentName>`;
  }

  if (!/^[A-Z][A-Za-z0-9-]+$/.test(componentName)) {
    throw 'Component name should start with an uppercase letter and contain only letters and numbers.';
  }

  let partialOutputPath;

  switch (partialType) {
    case 'test':
      partialOutputPath = scaffoldComponentTest(
        componentName,
        componentRootPath,
      );
      break;
    case 'styles':
      partialOutputPath = scaffoldComponentCss(
        componentName,
        componentRootPath,
      );
      break;
    case 'story':
      partialOutputPath = scaffoldComponentStory(
        componentName,
        storiesRootPath,
        directory,
      );
      break;
    default:
      break;
  }

  console.log();
  console.log(
    chalk.green(`Component ${componentName} has been partially scaffolded.`),
  );

  if (partialOutputPath) {
    console.log(
      `* The partial for ${componentName} has been created in ${chalk.green(
        partialOutputPath,
      )}`,
    );
  }
} catch (err) {
  console.error(`${chalk.red('Error:')} ${chalk.yellow(err)}`);
  return;
}
