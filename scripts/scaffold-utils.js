const fs = require('fs');
const path = require('path');

function extractArgs(args) {
  return args.reduce((acc, curr, i) => {
    if (
      i === 0 &&
      curr.indexOf('=') === -1 &&
      (curr.indexOf('-') === -1 || curr.indexOf('-') > 0)
    ) {
      acc['path'] = curr;
    } else {
      if (curr.indexOf('--') === 0) {
        const [flag, value] = curr.slice(2).split('=');
        acc[flag] = value || true;
      } else if (curr.indexOf('-') === 0) {
        const flags = curr.slice(1, curr.length).split('');
        acc = flags.reduce((a, c) => {
          a[c] = true;
          return a;
        }, acc);
      }
    }
    return acc;
  }, {});
}

function isValidScaffoldType(type) {
  const validScaffoldTypes = ['rendering', 'element', 'component', 'module'];
  return validScaffoldTypes.indexOf(type) >= 0;
}

/**
 * Scaffolds a `*.spec.tsx` file for a component.
 *
 * @param {string} componentName
 * @param {string} outputPath
 */
function scaffoldComponentTest(componentName, outputPath) {
  const exportVarName = componentName.replace(/[^\w]+/g, '');

  const browserTemplate = `/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, configure } from 'enzyme';
import ${exportVarName} from '../${exportVarName}';
import { defaultData } from '../../../../data/data';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<${exportVarName} />', () => {
  describe('default', () => {
    it('renders', () => {
      const component = shallow(
        <${exportVarName} {...(defaultData as any)} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
`;

  let outputDirectoryPath = path.join(outputPath, componentName);

  if (!fs.existsSync(outputDirectoryPath)) {
    throw new Error(
      `No existing component exists in path ${outputDirectoryPath}. Not creating additional files.`,
    );
  }

  outputDirectoryPath = path.join(outputDirectoryPath, '__tests__');

  fs.mkdirSync(outputDirectoryPath);

  const browserOutputFilePath = path.join(
    outputDirectoryPath,
    `${exportVarName}.spec.tsx`,
  );

  fs.writeFileSync(browserOutputFilePath, browserTemplate, 'utf8');

  return browserOutputFilePath;
}

/**
 * Scaffolds a `*.module.scss` file for a component.
 *
 * @param {stirng} componentName
 * @param {string} outputPath
 */
function scaffoldComponentCss(componentName, outputPath) {
  const exportVarName = componentName.replace(/[^\w]+/g, '');

  // TODO Add some default imports to the template
  const cssTemplate = `@import '../../../styles/settings/settings';
  @import '../../../styles/tools/tools';

  .div-bg {
    background-color: $color-sinbad;
  }
  h1 {
    color: $color-christine;
  }  `;

  const outputDirectoryPath = path.join(outputPath, componentName);

  if (!fs.existsSync(outputDirectoryPath)) {
    throw new Error(
      `No existing component exists in path ${outputDirectoryPath}. Not creating additional files.`,
    );
  }

  const outputFilePath = path.join(
    outputDirectoryPath,
    `${exportVarName}.module.scss`,
  );

  fs.writeFileSync(outputFilePath, cssTemplate, 'utf8');

  return outputFilePath;
}

/**
 * Scaffolds a `*.stories.tsx` file for a component.
 *
 * @param {string} componentName
 * @param {string} outputPath
 */
function scaffoldComponentStory(componentName, outputPath, dir = 'renderings') {
  const exportVarName = componentName.replace(/[^\w]+/g, '');

  let componentTemplate = `import React from 'react';
  import ${exportVarName}, {
  ${exportVarName}Props,
  } from '../../../src/components/${dir}/${exportVarName}/${exportVarName}';
  import { defaultData } from '../../../src/data/data';
  import { Section } from '../../enums/sections';

  export default {
  `;
  componentTemplate +=
    '  title: `${Section.' +
    dir.charAt(0).toUpperCase() +
    dir.slice(1) +
    '}/' +
    exportVarName +
    '`,';
  componentTemplate += `
  };

  export const Default = () => (
  <${exportVarName} {...((defaultData as unknown) as ${exportVarName}Props)} />
  );
  `;

  const outputFilePath = path.join(outputPath, `${exportVarName}.stories.tsx`);

  fs.writeFileSync(outputFilePath, componentTemplate, 'utf8');

  return outputFilePath;
}

module.exports = {
  extractArgs,
  isValidScaffoldType,
  scaffoldComponentTest,
  scaffoldComponentCss,
  scaffoldComponentStory,
};
