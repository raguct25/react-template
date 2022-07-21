/*
  Component Scaffolding Script
  This is a script that enables scaffolding a new JSS component using `jss scaffold <componentname>`.
  Edit this script if you wish to use your own conventions for component storage in your JSS app.
*/

/* eslint-disable no-throw-literal,no-console */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const {
  extractArgs,
  isValidScaffoldType,
  scaffoldComponentTest,
  scaffoldComponentCss,
} = require('./scaffold-utils');

/*
  SCAFFOLDING SCRIPT
*/
const componentName = process.argv[2];

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
// const isSitecoreScaffold = type === 'rendering';

if (!componentName) {
  throw 'Component name was not passed. Usage: jss scaffold <ComponentName>';
}

if (!/^[A-Z][A-Za-z0-9-]+$/.test(componentName)) {
  throw 'Component name should start with an uppercase letter and contain only letters and numbers.';
}

const componentRootPath = `src/components/${directory}`;

const componentOutputPath = scaffoldComponent();

const componentCssOutputPath = scaffoldComponentCss(
  componentName,
  componentRootPath,
);

const componentTestOutputPath = scaffoldComponentTest(
  componentName,
  componentRootPath,
);

console.log(chalk.green(`Component ${componentName} has been scaffolded.`));
console.log(chalk.green('Next steps:'));

console.log(
  `* Implement the React component in ${chalk.green(componentOutputPath)}`,
);
console.log(
  `* Implement scss for the React component in ${chalk.green(
    componentCssOutputPath,
  )}`,
);
console.log(
  `* Implement tests for the React component in ${chalk.green(
    componentTestOutputPath,
  )}`,
);

/*
  TEMPLATING FUNCTIONS
*/

function scaffoldComponent() {
  const exportVarName = componentName.replace(/[^\w]+/g, '');

  let importsTemplate = '';
  let propsTypeTemplate = `export type ${exportVarName}Props = {};`;
  let propsTemplate = ``;
  let renderTemplate = `(
  <div></div>
)`;

  importsTemplate = `import { AnchorableField } from '../../../types/types';`;

  propsTypeTemplate = `type ${exportVarName}Fields = Partial<AnchorableField> & {};

    export type ${exportVarName}Props = {
    fields: ${exportVarName}Fields;
    };`;
  propsTemplate = `{
    fields,
    }`;
  renderTemplate = `const { message } = fields;
    return (
      <div>
        <h1>{message}</h1>
      </div>
    );`;

  const componentTemplate = `import React, { memo, FunctionComponent } from 'react';
  ${importsTemplate}
  import classNames from 'classnames/bind';
  import styles from './${exportVarName}.module.scss';

  const cx = classNames.bind(styles);

  ${propsTypeTemplate}

  const ${exportVarName}: FunctionComponent<${exportVarName}Props> = (${propsTemplate}) => {
  ${renderTemplate};
  } 

 export default memo(${exportVarName});
`;

  const outputDirectoryPath = path.join(componentRootPath, componentName);

  if (fs.existsSync(outputDirectoryPath)) {
    throw `Component path ${outputDirectoryPath} already existed. Not creating component.`;
  }

  fs.mkdirSync(outputDirectoryPath);

  const outputFilePath = path.join(outputDirectoryPath, `${exportVarName}.tsx`);

  fs.writeFileSync(outputFilePath, componentTemplate, 'utf8');

  return outputFilePath;
}
