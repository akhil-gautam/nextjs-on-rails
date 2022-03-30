import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { useCookies } from 'react-cookie';

import { Button, TextInput } from '../../components/shared';
import { API_URL } from '../../constants';
import { useUser } from '../../store/user';

export default function SignUp() {
  const router = useRouter();
  const { addUser } = useUser();
  const [_cookie, setCookie] = useCookies(['nextRailsUser']);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_URL}users/login`, formData);
      setCookie('nextRailsUser', JSON.stringify(data), {
        path: '/',
        maxAge:
          new Date(data.exp.replace(/\s/, 'T')).getTime() -
          new Date().getTime(),
        sameSite: true,
      });
      addUser(data);

      toast.success('Successfully logged in!');
      router.push('/');
    } catch (e) {
      !e.response?.data && toast.error(e.message);
      e.response?.data &&
        Object.values(e.response?.data)
          .filter((el) => typeof el != 'object')
          .forEach(toast.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='flex flex-col w-full h-screen items-center pb-20 px-4 md:px-0 md:pb-0 bg-gray-50'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col w-full mt-10 md:mt-40 md:w-1/3 p-2 md:p-10 space-y-4 bg-white'
      >
        <header className='font-bold text-2xl mb-4 text-center'>Sign in</header>
        <TextInput
          type='email'
          placeholder='Email(required)'
          label='Email'
          helperText={errors.email?.message}
          {...register('email', {
            required: 'Email is required!',
            pattern: /^\S+@\S+$/i,
          })}
        />
        <TextInput
          type='password'
          placeholder='Password(required)'
          label='Password'
          helperText={errors.password?.message}
          {...register('password', {
            required: 'Valid password is required!',
          })}
        />

        <Button loading={loading} type='submit' className='mt-5'>
          Submit
        </Button>
        <Link href='/auth/signup'>
          <a className='text-blue-400'>
            <Button variant='outlined' block>Or register here...</Button>
          </a>
        </Link>
      </form>
    </section>
  );
}
