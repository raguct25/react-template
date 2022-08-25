import React, { FunctionComponent } from 'react';
import { CFormInput } from '@coreui/react';

const InputComponent: FunctionComponent = (Props: any) => {
  return (
    <div>
      <CFormInput {...Props} {...Props.input} />
      {Props.meta.touched && (
        <p className="text-danger m-1">{Props.meta.error}</p>
      )}
    </div>
  );
};

export default React.memo(InputComponent);
