const alphapetRegex = /^[A-Za-z]+$/;

export const required = (fieldName: string) => (value: string) => {
  return value ? undefined : `${fieldName} required`;
};

export const mustBeAlphabet = (value: string) =>
  alphapetRegex.test(value) ? undefined : 'Must be a alphabet';

export const minimumValue = (value: string) =>
  value.length < 3 ? 'Atleast should have 3 characters' : undefined;

export const composeValidators =
  (...validators: any) =>
  (value: string) =>
    validators.reduce(
      (error: string, validator: any) => error || validator(value),
      undefined,
    );
