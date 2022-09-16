import React, { memo, FunctionComponent, useState } from 'react';
import { AnchorableField } from '../../../types/types';
import classNames from 'classnames/bind';
import styles from './TestComponent.module.scss';
import { useRef, createRef } from 'react';

const cx = classNames.bind(styles);

type TestComponentFields = Partial<AnchorableField> & {};

export type TestComponentProps = {
  fields: TestComponentFields;
};

const TestComponent: FunctionComponent<TestComponentProps> = ({ fields }) => {
  return (
    <div className={cx('div-bg')}>
      <h1>Campaigns Component</h1>
    </div>
  );
};

export default memo(TestComponent);
