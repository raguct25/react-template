import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addLoginData } from '../../redux/actions/login/Login.action';
import { useSelector, useDispatch } from 'react-redux';

type FormValues = {
  email: string;
  password: number;
};

interface IState {
  login: {
    email: string;
    password: string;
    isAuth: boolean;
  };
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state.login);

  let navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-indigo-200 flex flex-col justify-center items-center transition-all ease-out duration-900 transform">
      <div className="bg-white m-auto w-[30rem] p-14 border rounded-lg bg-slate-800">
        <h1 className="text-center test-bold text-4xl mb-5 text-white">
          Login to Your Account
        </h1>
        <form
          action=""
          onSubmit={handleSubmit((data) => {
            dispatch(addLoginData(data));
            if (!errors.email?.message && !errors.password?.message) {
              navigate('/');
            }
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
            className={`rounded-lg bg-red-500 p-2 duration-500 hover:bg-red-600 `}
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
