import React, { memo, FunctionComponent } from 'react';
import { AnchorableField } from '../../../types/types';
import classNames from 'classnames/bind';
import styles from './NewComponent.module.scss';

const cx = classNames.bind(styles);

type NewComponentFields = Partial<AnchorableField> & {};

export type NewComponentProps = {
  fields: NewComponentFields;
};

const NewComponent: FunctionComponent<NewComponentProps> = ({ fields }) => {
  const { message } = fields;
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default memo(NewComponent);
