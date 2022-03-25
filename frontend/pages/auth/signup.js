import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Button, TextInput } from '../../components/shared';
import { API_URL } from '../../constants';
import { axios } from '../../utils';

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (loading) return;
    setLoading(true);
    try {
      await axios.post(`users`, data);
      toast.success('Account created successfully!');
      router.push('/auth/signin');
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
    <section className='flex flex-col w-full min-h-screen items-center bg-gradient-to-tr bg-gray-50 pb-20 px-4 md:px-0 md:pb-0'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col w-full mt-10 md:mt-20 md:w-1/3 p-2 md:p-10 space-y-4 bg-white'
      >
        <header className='font-bold text-2xl mb-4 text-center'>Sign up</header>
        <TextInput
          type='text'
          placeholder='John'
          label='First name'
          helperText={errors.first_name?.message}
          {...register('first_name')}
        />
        <TextInput
          type='text'
          placeholder='Doe'
          label='Last name'
          helperText={errors.last_name?.message}
          {...register('last_name')}
        />
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
        <Link href='/auth/signin'>
          <a className='text-blue-600'>
            <Button color='light' block>Or sign in here...</Button>
          </a>
        </Link>
      </form>
    </section>
  );
}
