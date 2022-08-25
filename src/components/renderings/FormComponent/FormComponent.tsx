import React, { memo, FunctionComponent } from 'react';
import { AnchorableField } from '../../../types/types';
import classNames from 'classnames/bind';
import styles from './FormComponent.module.scss';
import { Form, Field } from 'react-final-form';
import InputComponent from '../../elements/InputComponent/InputComponent';
import { CCol } from '@coreui/react';
import ButtonComponent from '../../elements/ButtonComponent/ButtonComponent';
import {
  required,
  composeValidators,
  mustBeAlphabet,
  minimumValue,
} from '../../../helper/validator';

const cx = classNames.bind(styles);

type FormComponentFields = Partial<AnchorableField> & {};

export type FormComponentProps = {
  fields: FormComponentFields;
};

const FormComponent: FunctionComponent<FormComponentProps> = ({ fields }) => {
  const onSubmit = async (values: any) => {
    console.log('onSubmit values', values);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine }) => {
          return (
            <form onSubmit={handleSubmit}>
              <CCol sm={6}>
                <Field
                  name="firstName"
                  component={InputComponent}
                  type="text"
                  placeholder="First Name"
                  label="First Name"
                  validate={composeValidators(
                    required('First name'),
                    mustBeAlphabet,
                    minimumValue,
                  )}
                />
              </CCol>
              <CCol className="mt-5">
                <Field
                  name="button"
                  label="Submit"
                  type="submit"
                  color="success"
                  variant="outline"
                  size="lg"
                  shape="rounded-pill"
                  className="d-grid gap-2 d-md-block"
                  component={ButtonComponent}
                  disabled={submitting || pristine}
                />
              </CCol>
            </form>
          );
        }}
      />
    </div>
  );
};

export default memo(FormComponent);
