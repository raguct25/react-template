import React, { memo, FunctionComponent } from 'react';
import { AnchorableField } from '../../../types/types';
import classNames from 'classnames/bind';
import styles from './TestComponent.module.scss';

const cx = classNames.bind(styles);

type TestComponentFields = Partial<AnchorableField> & {};

export type TestComponentProps = {
  fields: TestComponentFields;
};

const TestComponent: FunctionComponent<TestComponentProps> = ({ fields }) => {
  // const { message } = fields;
  return (
    <div className={cx('div-bg')}>
      <h1>Welcome TestComponent</h1>
      <p>Testing</p>
    </div>
  );
};

export default memo(TestComponent);
