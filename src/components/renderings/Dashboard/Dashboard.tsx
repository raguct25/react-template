import React, { memo, FunctionComponent } from 'react';
import { AnchorableField } from '../../../types/types';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

type DashboardFields = Partial<AnchorableField> & {};

export type DashboardProps = {
  fields: DashboardFields;
};

const Dashboard: FunctionComponent<DashboardProps> = ({ fields }) => {
  // const { message } = fields;
  return (
    <div className={cx('div-bg')}>
      <h1> Welcome Test Dashboard </h1>
    </div>
  );
};

export default memo(Dashboard);
