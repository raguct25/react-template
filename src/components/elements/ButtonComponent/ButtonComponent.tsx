import { CButton } from '@coreui/react';
import React, { FunctionComponent } from 'react';

const ButtonComponent: FunctionComponent = (Props: any) => {
  return (
    <div className={Props.className}>
      <CButton {...Props}>{Props.label}</CButton>
    </div>
  );
};

export default React.memo(ButtonComponent);
