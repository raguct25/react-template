import React, { memo, FunctionComponent } from 'react';
import { AnchorableField } from '../../../types/types';
import classNames from 'classnames/bind';
import styles from './ListComponent.module.scss';

const cx = classNames.bind(styles);

type ListComponentFields = Partial<AnchorableField> & {};

export type ListComponentProps = {
  fields: ListComponentFields;
};

const ListComponent: FunctionComponent<ListComponentProps> = ({ fields }) => {
  // const { message } = fields;
  return (
    <div className={cx('div-bg')}>
      <h1> List Component</h1>
    </div>
  );
};

export default memo(ListComponent);
