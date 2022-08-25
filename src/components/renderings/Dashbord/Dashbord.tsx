import React, { memo, FunctionComponent } from 'react';
import { AnchorableField } from '../../../types/types';
import classNames from 'classnames/bind';
import styles from './Dashbord.module.scss';

const cx = classNames.bind(styles);

type DashbordFields = Partial<AnchorableField> & {};

export type DashbordProps = {
  fields: DashbordFields;
};

const Dashbord: FunctionComponent<DashbordProps> = ({ fields }) => {
  // const { message } = fields;
  return (
    <div className={cx('div-bg')}>
      <h1>Dashbord Components</h1>
    </div>
  );
};

export default memo(Dashbord);
