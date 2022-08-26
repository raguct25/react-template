import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: number;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  console.log('errors', errors);

  return (
    <div className="m-auto w-[25rem] h-screen">
      <h1 className="text-center test-bold text-2xl mb-5">
        Login to Your Account
      </h1>
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          console.log('data', data);
        })}
        className="grid gap-y-2 grid-col"
      >
        <input
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
          type="text"
          placeholder="Email"
          className={`rounded-lg ${
            errors.email?.type && `border-2 border-rose-600`
          }`}
        />
        <p className="h-5 text-center text-red-600">
          {errors.email?.type === 'required' && 'Password is required'}
          {errors.email?.type === 'pattern' && errors.email.message}
        </p>

        <input
          {...register('password', {
            required: true,
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
              message: 'Number Only',
            },
          })}
          type="password"
          placeholder="Password"
          className={`rounded-lg ${
            errors.password?.type && `border-2 border-rose-600`
          }`}
        />

        <p className="h-5 text-center text-red-600">
          {errors.password?.type === 'required' && 'Password is required'}
          {errors.password?.type === 'pattern' && errors.password.message}
        </p>

        <input
          type="submit"
          className={`rounded-lg bg-red-500 p-2 hover:bg-red-600 `}
        />
      </form>
    </div>
  );
};

export default SignIn;
